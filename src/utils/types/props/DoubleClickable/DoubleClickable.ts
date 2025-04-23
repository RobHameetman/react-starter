import { MouseEventHandler } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { Pointerable } from '@/utils/types/props/Pointerable';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user double-clicks the component.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends DoubleClickable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onDoubleClick = noop, text }) => (
 *   <div onDoubleClick={onDoubleClick}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export type DoubleClickable<T = Element> = Pick<
	Pointerable<T>,
	'onDoubleClick' | 'onDoubleClickCapture'
>;

/**
 * Checks that an `unknown` value is {@link DoubleClickable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onDoubleClick()` is optional and must be a function if provided.
 *   - `value.onDoubleClickCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link DoubleClickable}.
 */
export const isDoubleClickable = <T = Element>(
	value: unknown,
): value is DoubleClickable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onDoubleClick()
	 */
	('onDoubleClick' in value ? isFunction(value.onDoubleClick) : true) &&
	/**
	 * value.onDoubleClickCapture()
	 */
	('onDoubleClickCapture' in value
		? isFunction(value.onDoubleClickCapture)
		: true);

export default DoubleClickable;
