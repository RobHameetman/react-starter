import { CompoundComponent, isCompoundComponent } from '../CompoundComponent';

/**
 * `CC` is a type alias for the `CompoundComponent` interface, much like how
 * React's `FC` type is a shorthand version of `FunctionComponent`.
 *
 * @typeParam T - The interface mapping sub-components to their prop types.
 * @typeParam U - Prop type for the parent component.
 *
 * @see {@link CompoundComponent}
 */
export type CC<T, U = Record<string, never>> = CompoundComponent<T, U>;

/**
 * Checks that an `unknown` value is a `CC`.
 *
 * Requirements:
 *   - `value` must be a valid `CompoundComponent`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an `CC`.
 */
export const isCC = <T = Record<string, never>, U extends string = string>(
	value: unknown,
): value is CC<T, U> => isCompoundComponent(value);
