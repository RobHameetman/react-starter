import {
	ChangeEventHandler,
	FormEventHandler,
	Dispatch,
	SetStateAction,
	useCallback,
} from 'react';
import { ChangeEvent } from '@app/utils/events/ChangeEvent';
import { dispatchReactEvent as _dispatchReactEvent } from '@app/utils/functions/events/misc/dispatchReactEvent';
import { isCapturing as _isCapturing } from '@app/utils/functions/events/phases/isCapturing';
import { noop } from '@app/utils/functions/misc/noop';
import { useCheckboxContext as _useCheckboxContext } from '../useCheckboxContext';
import { setNativeInputValue as _setNativeInputValue } from '../../functions';

/**
 * Functional dependencies used in the {@link useCheckboxInputHandlers()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseCheckboxInputHandlersDependencies {
	/**
	 * [Optional] Forcibly dispatch a React event to a target element.
	 */
	readonly dispatchReactEvent?: typeof _dispatchReactEvent;

	/**
	 * [Optional] Set the native input value for the checkbox element.
	 */
	readonly setNativeInputValue?: typeof _setNativeInputValue;

	/**
	 * [Optional] Retrieve the current `CheckboxContext` from the nearest
	 * `CheckboxProvider`.
	 */
	readonly useCheckboxContext?: typeof _useCheckboxContext;
}

/**
 * Destructured arguments provided to the {@link useCheckboxInputHandlers()}
 * hook.
 */
export interface UseCheckboxInputHandlersInput {
	/**
	 * [Optional] The disabled state of the checkbox input.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 * [Optional] The indeterminate state of the checkbox input.
	 * @defaultValue - `false`
	 */
	readonly indeterminate?: boolean;

	/**
	 * The default value of the checkbox input.
	 */
	readonly value: string;

	/**
	 * [Optional] The event handler called when the checkbox's `checked` state
	 * changes.
	 * @defaultValue - A no-op function.
	 */
	readonly onChange?: ChangeEventHandler<HTMLInputElement>;

	/**
	 * [Optional] Set the checkbox's `checked` state in React.
	 * @defaultValue - A no-op function.
	 */
	readonly setChecked?: Dispatch<SetStateAction<boolean>>;

	/**
	 * [Optional] Set the checkbox's `indeterminate` state in React.
	 * @defaultValue - A no-op function.
	 */
	readonly setIndeterminate?: Dispatch<SetStateAction<boolean>>;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseCheckboxInputHandlersDependencies;
}

/**
 * A hook which provides event handlers for checkbox inputs. The `change` event
 * handler is used to update the checkbox's `checked` state and the 'input'
 * event handler is used to manage the checkbox's value in a checkbox group.
 * When a checkbox is in a group, the value of the native input element is
 * used to determine which checkboxes are checked. This allows us to avoid
 * redundant rendering while allowing for natural checkbox behavior. The
 * execution flows for checkboxes are as follows:
 *
 * Discrete Checkboxes:
 *  1. User clicks on a checkbox and the checkbox's native `checked` state is
 *     updated, triggering a `'change'` event.
 *  2. The checkbox's `onChange` handler is called and the checkbox's `checked`
 *     state is updated in React, triggering a rerender. If a checkbox is in an
 *     indeterminate state, the `indeterminate` state is set to `false`.
 *
 * Grouped Checkboxes:
 *  1. User clicks on a checkbox and the checkbox's native `checked` state is
 *     updated, triggering a `'change'` event.
 *  2. The checkbox's `onChange` handler is called and the input element's
 *     native value is updated manually, triggering an `'input'` event.
 *  3. The checkbox's `onInput` handler is called and a second `'change'` event
 *     with an updated value on the target is manually dispatched.
 *  4. The checkbox's `onChange` handler is called again and the checkbox's
 *     `checked` state is updated in React, triggering a rerender. If a checkbox
 *     is in an indeterminate state, the `indeterminate` state is set to `false`.
 *
 * @param input - A {@link UseCheckboxInputHandlersInput} object used for destructuring.
 */
export const useCheckboxInputHandlers = ({
	disabled = false,
	indeterminate = false,
	value: defaultValue,
	onChange = noop,
	setChecked = noop,
	setIndeterminate = noop,
	_dependencies = {},
}: UseCheckboxInputHandlersInput) => {
	const {
		dispatchReactEvent = _dispatchReactEvent,
		setNativeInputValue = _setNativeInputValue,
		useCheckboxContext = _useCheckboxContext,
	} = _dependencies;

	const {
		addToGroupValue = noop,
		getGroupValue = () => null,
		removeFromGroupValue = noop,
		setGroupValue = noop,
	} = useCheckboxContext();

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => {
			if (!disabled) {
				const { checked, value: currentValue } = e.currentTarget;

				const isGroup = getGroupValue() !== null;
				const shouldAdd = checked && !currentValue.includes(defaultValue);
				const shouldRemove = !checked && currentValue.includes(defaultValue);
				const isFirstChangeEvent = isGroup && (shouldAdd || shouldRemove);

				if (isFirstChangeEvent) {
					const updatedValue = (
						shouldAdd ? addToGroupValue : removeFromGroupValue
					)(defaultValue, currentValue) as string;

					setNativeInputValue({ target: e.currentTarget, value: updatedValue });
				} else {
					setChecked(checked);
					setGroupValue(e.currentTarget.value);

					if (indeterminate) {
						setIndeterminate(false);
					}

					onChange(e);
				}
			}
		},
		[
			setChecked,
			onChange,
			indeterminate,
			setIndeterminate,
			setGroupValue,
			disabled,
			defaultValue,
		],
	);

	const handleInput = useCallback<FormEventHandler<HTMLInputElement>>(
		(e) => {
			if (getGroupValue() !== null && !disabled) {
				dispatchReactEvent({
					event: new ChangeEvent(e.currentTarget),
					target: e.currentTarget,
				});
			}
		},
		[disabled, getGroupValue],
	);

	return { handleChange, handleInput };
};
