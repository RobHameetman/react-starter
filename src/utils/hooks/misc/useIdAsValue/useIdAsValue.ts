import { useEffect, useRef } from 'react';

/**
 * Functional dependencies used in the {@link useIdAsValue()} hook. This object
 * is provided in tests for mocking and spying.
 */
export type UseIdAsValueDependencies = Record<string, never>;

/**
 * Destructured arguments provided to the {@link useIdAsValue()} hook.
 */
export interface UseIdAsValueInput {
	/**
	 * @TODO
	 */
	readonly prefix: string;

	/**
	 * @TODO
	 */
	readonly value: string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseIdAsValueDependencies;
}

const ids = new Set<string>();

/**
 * @TODO
 *
 * @param input - A {@link UseIdAsValueInput} object used for destructuring.
 */
export const useIdAsValue = ({ prefix, value }: UseIdAsValueInput) => {
	const values = Array.from(ids.values());
	let _value = value;

	const hasValueWithPrefix = values.some((val) => val.startsWith(prefix));

	if (!hasValueWithPrefix && !ids.has(value)) {
		ids.add(value);
	} else {
		_value = values.find((val) => val.startsWith(prefix)) ?? value;
	}

	useEffect(
		() => () => {
			if (ids.has(value)) {
				ids.delete(value);
			}
		},
		[],
	);

	return _value;
};
