import { useEffect } from 'react';
import { noop } from '@app/utils/functions/misc/noop';
import { useCheckboxContext as _useCheckboxContext } from '../useCheckboxContext';

/**
 * Functional dependencies used in the {@link useSyncToGroupState()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseSyncToGroupStateDependencies {
	/**
	 * [Optional] Retrieve the current `CheckboxContext` from the nearest
	 * `CheckboxProvider`.
	 */
	readonly useCheckboxContext?: typeof _useCheckboxContext;
}

/**
 * Destructured arguments provided to the {@link useSyncToGroupState()}
 * hook.
 */
export interface UseSyncToGroupStateInput {
	/**
	 * The checked state of the checkbox input.
	 */
	readonly checked: boolean;

	/**
	 * [Optional] The disabled state of the checkbox input.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 * The indeterminate state of the checkbox input.
	 */
	readonly indeterminate: boolean;

	/**
	 * The default value of the checkbox input.
	 */
	readonly value: string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseSyncToGroupStateDependencies;
}

/**
 * Sync the group value with the checkbox's `checked` state. This is triggered
 * by using the `<Checkbox />` component's "checked" prop when the checkbox is
 * in a group.
 *
 * @param input - A {@link UseSyncToGroupStateInput} object used for destructuring.
 */
export const useSyncToGroupState = ({
	checked,
	disabled = false,
	indeterminate,
	value,
	_dependencies = {},
}: UseSyncToGroupStateInput) => {
	const { useCheckboxContext = _useCheckboxContext } = _dependencies;
	const { addToGroupValue = noop, setGroupValue = noop } = useCheckboxContext();

	useEffect(() => {
		setGroupValue((currentGroupValue: string) => {
			if (
				checked &&
				!indeterminate &&
				!disabled &&
				!currentGroupValue.includes(value)
			) {
				return addToGroupValue(value, currentGroupValue) as string;
			}

			return currentGroupValue;
		});
	}, [disabled, indeterminate, value]);
};
