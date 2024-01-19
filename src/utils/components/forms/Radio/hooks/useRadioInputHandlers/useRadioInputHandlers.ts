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
import { useRadioContext as _useRadioContext } from '../useRadioContext';
import { setNativeInputValue as _setNativeInputValue } from '../../functions';

/**
 * Functional dependencies used in the {@link useRadioInputHandlers()} hook.
 * This object is provided in tests for mocking and spying.
 */
export interface UseRadioInputHandlersDependencies {
	/**
	 * [Optional] Forcibly dispatch a React event to a target element.
	 */
	readonly dispatchReactEvent?: typeof _dispatchReactEvent;

	/**
	 * [Optional] Set the native input value for the radio button element.
	 */
	readonly setNativeInputValue?: typeof _setNativeInputValue;

	/**
	 * [Optional] Retrieve the current `RadioContext` from the nearest
	 * `RadioProvider`.
	 */
	readonly useRadioContext?: typeof _useRadioContext;
}

/**
 * Destructured arguments provided to the {@link useRadioInputHandlers()}
 * hook.
 */
export interface UseRadioInputHandlersInput {
	/**
	 * [Optional] The disabled state of the radio button input.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 * The default value of the radio button input.
	 */
	readonly value: string;

	/**
	 * [Optional] The event handler called when the radio button's `checked` state
	 * changes.
	 * @defaultValue - A no-op function.
	 */
	readonly onChange?: ChangeEventHandler<HTMLInputElement>;

	/**
	 * [Optional] Set the radio button's `checked` state in React.
	 * @defaultValue - A no-op function.
	 */
	readonly setChecked?: Dispatch<SetStateAction<boolean>>;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseRadioInputHandlersDependencies;
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
 * @param input - A {@link UseRadioInputHandlersInput} object used for destructuring.
 */
export const useRadioInputHandlers = ({
	disabled = false,
	value: defaultValue,
	onChange = noop,
	setChecked = noop,
	_dependencies = {},
}: UseRadioInputHandlersInput) => {
	const {
		dispatchReactEvent = _dispatchReactEvent,
		setNativeInputValue = _setNativeInputValue,
		useRadioContext = _useRadioContext,
	} = _dependencies;

	const { getGroupValue = () => null, setGroupValue = noop } =
		useRadioContext();

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => {
			if (!disabled) {
				const { checked, value: currentValue } = e.currentTarget;

				const isGroup = getGroupValue() !== null;
				const shouldChange = checked && currentValue !== defaultValue;
				const isFirstChangeEvent = isGroup && shouldChange;

				if (isFirstChangeEvent) {
					setNativeInputValue({ target: e.currentTarget, value: defaultValue });
				} else {
					setChecked(true);
					setGroupValue(defaultValue);

					onChange(e);
				}
			}
		},
		[setChecked, onChange, setGroupValue, disabled, defaultValue],
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
