import { ComponentType, PropsWithChildren } from 'react';

/**
 * Compound components are an essential React component pattern used to dissect
 * components with relational overlap. The classic example of this is Kent C.
 * Dodds' `<Toggle />` component, which is composed of `<Toggle.On />` and
 * `<Toggle.Off />`. This highlights one way to use compound components:
 * by partitioning your state.
 *
 * Another way to use compound components is to segment abstract visual spaces
 * in template/view-level components. For instance, a view component
 * `<MyView />` could be composed of something like `<MyView.LeftColumn>` and
 * `<MyView.RightColumn />` or, if the sizing is more dynamic, multiple
 * `<MyView.Section>`s.
 *
 * One thing to remember with compound components is that the inner components
 * may be coupled to the outer component. Though compound components are an
 * essential React component pattern, they are not exclusive to React. The
 * `<select>` HTML element is a good example of this, as `<option>` elements
 * may only be used inside of a `<select>` element. A common example of this in
 * React with MUI is a compound component where the outer component wraps its
 * `children` with `<Grid container>`, so the root node of any inner component
 * must be a `<Grid item />`.
 *
 * @typeParam T - The interface mapping sub-components to their prop types.
 * @typeParam U - Prop type for the parent component.
 *
 * @see https://kentcdodds.com/blog/compound-components-with-react-hooks/
 */
export type CompoundComponent<T, U = Record<string, never>> = ComponentType<
	PropsWithChildren<U>
> &
	T;

/**
 * Checks that an `unknown` value is a {@link CompoundComponent}.
 *
 * Requirements:
 *   - `value` must be a function with additional functions attached as
 *     properties.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CompoundComponent}.
 */
export const isCompoundComponent = <
	T = Record<string, never>,
	U extends string = string,
>(
	value: unknown,
): value is CompoundComponent<T, U> =>
	typeof value === 'function' &&
	Object.keys(value).length > 0 &&
	Object.values(value).every((_value) => typeof _value === 'function');
