import { MouseEventHandler, PointerEventHandler } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user either clicks a mouse or track-pad or touches the screen
 * with a pen/stylus or using a gesture.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Pointerable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onKeyDown = noop, text }) => (
 *   <div onKeyDown={onKeyDown}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Pointerable<T = Element> {
	/**
	 * [Optional] Handle an event when a mouse is moved.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseMove?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when a mouse is moved during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseMoveCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the pointer is moved.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerMove?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the pointer is moved during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerMoveCapture?: PointerEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Pointerable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onKeyDown()` is optional and must be a function if provided.
 *   - `value.onKeyDownCapture()` is optional and must be a function if provided.
 *   - `value.onKeyUp()` is optional and must be a function if provided.
 *   - `value.onKeyUpCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Pointerable}.
 */
export const isPointerable = <T = Element>(
	value: unknown,
): value is Pointerable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onKeyDown()
	 */
	('onKeyDown' in value ? isFunction(value.onKeyDown) : true) &&
	/**
	 * value.onKeyDownCapture()
	 */
	('onKeyDownCapture' in value ? isFunction(value.onKeyDownCapture) : true) &&
	/**
	 * value.onKeyUp()
	 */
	('onKeyUp' in value ? isFunction(value.onKeyUp) : true) &&
	/**
	 * value.onKeyUpCapture()
	 */
	('onKeyUpCapture' in value ? isFunction(value.onKeyUpCapture) : true);
