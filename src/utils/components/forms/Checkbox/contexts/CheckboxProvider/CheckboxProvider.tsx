import { $FC, useCallback, useState } from 'react';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { CheckboxContext } from '../CheckboxContext';

type AddToGroupValue = CheckboxContext['addToGroupValue'];
type GetGroupValue = CheckboxContext['getGroupValue'];
type GroupValueIncludes = CheckboxContext['groupValueIncludes'];
type RemoveFromGroupValue = CheckboxContext['removeFromGroupValue'];
type SetGroupValue = CheckboxContext['setGroupValue'];

/**
 * Prop types for the {@link CheckboxProvider} component.
 */
export interface CheckboxProviderProps {
	/**
	 * [Optional] Set the delimiter for the checkbox group values.
	 * @defaultValue - `','`
	 */
	readonly delimiter?: string;

	/**
	 * [Optional] If `true`, the currently active button will be toggled when
	 * pressed.
	 * @defaultValue - `false`
	 */
	readonly value?: ReadonlyArray<string>;
}

/**
 * Provides state management for button groups.
 *
 * @example
 * ```
 * <CheckboxProvider>
 *   {...}
 *   <Checkbox>My Button</Checkbox>
 * </CheckboxProvider>
 * ```
 */
export const CheckboxProvider: $FC<CheckboxProviderProps> = ({
	children,
	delimiter = ',',
	value: _value = [],
}) => {
	const [_groupValue, _setGroupValue] = useState<ReadonlyArray<string>>(_value);

	const getGroupValue = useCallback<GetGroupValue>(
		() => _groupValue.join(delimiter),
		[_groupValue],
	);

	const groupValueIncludes = useCallback<GroupValueIncludes>(
		(potentialValue) => _groupValue.includes(potentialValue),
		[_groupValue],
	);

	const addToGroupValue = useCallback<AddToGroupValue>(
		(newValue, currentValue = getGroupValue() as string) =>
			[...currentValue.split(delimiter), newValue]
				.filter(Boolean)
				.join(delimiter),
		[],
	);

	const removeFromGroupValue = useCallback<RemoveFromGroupValue>(
		(removedValue, currentValue = getGroupValue() as string) =>
			currentValue
				.split(delimiter)
				.filter((item) => item !== removedValue)
				.join(delimiter),
		[],
	);

	const setGroupValue = useCallback<SetGroupValue>(
		(value) =>
			_setGroupValue((currentValue) =>
				isString(value)
					? value.split(delimiter)
					: value(currentValue.join(delimiter)).split(delimiter),
			),
		[_setGroupValue],
	);

	return (
		<CheckboxContext.Provider
			value={{
				addToGroupValue,
				getGroupValue,
				groupValueIncludes,
				removeFromGroupValue,
				setGroupValue,
			}}
		>
			{children}
		</CheckboxContext.Provider>
	);
};
