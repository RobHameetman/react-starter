import type { ReactElement, createElement } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';
import { isReactElement } from '@/utils/functions/check/react/isReactElement';

/**
 * A compositional prop type for React components that can be any HTML element
 * or another React component. Note that this is used with the
 * `useSemanticAsProp()` hook, which is used to ensure proper type checking. As
 * a rule of thumb, the polymorphic element in the DOM should be the outermost
 * root node unless there's a specific reason for it to be elsewhere and any
 * extra props should be passed to it by default.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Polymorphic {
 *   readonly children: string;
 * }
 *
 * export const MyComponent: $FC<MyComponentProps> = ({ as: As = 'div', children, ...props }) => (
 *   <As {...props}>
 * 	   {children}
 *   </As>
 * );
 * ```
 */
export interface Polymorphic extends Record<string, unknown> {
	/**
	 * [Optional] Semantic "as" prop. Override the root node.
	 * @defaultValue - `'aside'`
	 */
	readonly as?: Parameters<typeof createElement<Record<string, unknown>>>[0];
}

/**
 * Checks that an `unknown` value is {@link Polymorphic}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.as` is optional and must be a React component or a non-empty string if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Polymorphic}.
 */
export const isPolymorphic = (value: unknown): value is Polymorphic =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.as
	 */
	('as' in value
		? (isString(value.as) && Boolean(value.as.length)) ||
		  isReactElement(value.as)
		: true);

export default Polymorphic;
