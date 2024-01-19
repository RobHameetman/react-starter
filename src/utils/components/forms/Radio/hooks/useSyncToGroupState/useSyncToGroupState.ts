import { useEffect } from 'react';
import { noop } from '@app/utils/functions/misc/noop';
import { useRadioContext as _useRadioContext } from '../useRadioContext';

/**
 * Functional dependencies used in the {@link useSyncToGroupState()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseSyncToGroupStateDependencies {
	/**
	 * [Optional] Retrieve the current `RadioContext` from the nearest
	 * `RadioProvider`.
	 */
	readonly useRadioContext?: typeof _useRadioContext;
}

/**
 * Destructured arguments provided to the {@link useSyncToGroupState()}
 * hook.
 */
export interface UseSyncToGroupStateInput {
	/**
	 * The checked state of the radio button input.
	 */
	readonly checked: boolean;

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
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseSyncToGroupStateDependencies;
}

/**
 * Sync the group value with the radio button's `checked` state. This is
 * triggered by using the `<Radio />` component's "checked" prop when the radio
 * button is in a group.
 *
 * @param input - A {@link UseSyncToGroupStateInput} object used for destructuring.
 */
export const useSyncToGroupState = ({
	checked,
	disabled = false,
	value,
	_dependencies = {},
}: UseSyncToGroupStateInput) => {
	const { useRadioContext = _useRadioContext } = _dependencies;
	const { groupValueIs = noop, setGroupValue = noop } = useRadioContext();

	useEffect(() => {
		setGroupValue((currentGroupValue: string) => {
			if (checked && !disabled && !groupValueIs(value)) {
				return value;
			}

			return currentGroupValue;
		});
	}, [disabled, value]);
};
