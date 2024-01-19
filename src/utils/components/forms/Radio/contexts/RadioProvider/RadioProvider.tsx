import { $FC, useCallback, useState } from 'react';
import { RadioContext } from '../RadioContext';

type GetGroupValue = RadioContext['getGroupValue'];
type GroupValueIs = RadioContext['groupValueIs'];
type SetGroupValue = RadioContext['setGroupValue'];

/**
 * Prop types for the {@link RadioProvider} component.
 */
export interface RadioProviderProps {
	/**
	 * [Optional] If `true`, the currently active button will be toggled when
	 * pressed.
	 * @defaultValue - `false`
	 */
	readonly value?: string;
}

/**
 * Provides state management for radio button groups. This is used in the
 * `<RadioGroup />` component.
 *
 * @example
 * ```
 * <RadioProvider>
 *   {...}
 *   <Radio>My Button</Radio>
 * </RadioProvider>
 * ```
 */
export const RadioProvider: $FC<RadioProviderProps> = ({
	children,
	value: _value = '',
}) => {
	const [_groupValue, _setGroupValue] = useState<string>(_value);

	const getGroupValue = useCallback<GetGroupValue>(
		() => _groupValue,
		[_groupValue],
	);

	const groupValueIs = useCallback<GroupValueIs>(
		(potentialValue) => _groupValue === potentialValue,
		[_groupValue],
	);

	const setGroupValue = useCallback<SetGroupValue>(
		(value) => _setGroupValue(value),
		[_setGroupValue],
	);

	return (
		<RadioContext.Provider
			value={{
				getGroupValue,
				groupValueIs,
				setGroupValue,
			}}
		>
			{children}
		</RadioContext.Provider>
	);
};
