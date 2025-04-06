import type { ReactElement } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';

/**
 * Checks that an `unknown` value is a {@link ReactElement}. This type guard is
 * used in other type guards to improve readability.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.type` is required.
 *   - `value.props` is required.
 *
 * @typeParam `P` - The type of the props object. Defaults to type
 * `Record<string, never>`, which represents a component without props.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ReactElement}.
 */
export const isReactElement = <P = Record<string, never>>(
	value: unknown,
): value is ReactElement<P> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	/**
	 * value.props
	 */
	'props' in value;
