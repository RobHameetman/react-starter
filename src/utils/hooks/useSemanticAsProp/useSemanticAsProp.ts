import { JSXElementConstructor, ReactElement } from 'react';

/**
 * An input object provided to {@link useSemanticAsProp()} used for
 * destructuring.
 */
export interface UseSemanticAsPropInput {
	/**
	 * A React component or string name of an HTML element to be rendered in the
	 * underlying DOM.
	 */
	readonly as: ReactElement<unknown, string> | keyof JSX.IntrinsicElements;
}

/**
 * Type cast the semantic "as" prop values as a `JSXElementConstructor`. This
 * allows us to use a string as a JSX element constructor (e.g. `'div'`) without
 * the TypeScript compiler complaining. Use this hook with your semantic "as"
 * props to make it easier to render the provided values as JSX elements. See
 * the `<View.Content />` component as an example.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useSemanticAsProp = ({ as: $as }: UseSemanticAsPropInput) =>
	$as as JSXElementConstructor<Record<string, unknown>> & typeof $as;
