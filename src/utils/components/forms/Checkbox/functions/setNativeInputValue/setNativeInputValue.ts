/**
 * Functional dependencies used in the {@link setNativeInputValue()} function.
 * This object is provided in tests for mocking and spying.
 */
export type SetNativeInputValueDependencies = Record<string, never>;

/**
 * Destructured arguments provided to the {@link setNativeInputValue()} function.
 */
export interface SetNativeInputValueInput {
	/**
	 * The native input element in the DOM.
	 */
	readonly target: HTMLInputElement;

	/**
	 * The value to set on the native input.
	 */
	readonly value: string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: SetNativeInputValueDependencies;
}

/**
 * Set the native input value for the checkbox element. When a checkbox is in a
 * group, we use this function to set the value of the native input element to
 * avoid being out of sync with the React state.
 *
 * @param input - A {@link SetNativeInputValueInput} object used for destructuring.
 */
export const setNativeInputValue = ({
	target,
	value,
}: SetNativeInputValueInput) => {
	const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
		window.HTMLInputElement.prototype,
		'value',
	)?.set;

	nativeInputValueSetter?.call(target, value);
};
