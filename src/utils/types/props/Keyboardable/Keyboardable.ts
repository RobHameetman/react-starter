import { KeyboardEventHandler } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user presses a keyboard key.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Keyboardable<HTMLDivElement> {
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
export interface Keyboardable<T = Element> {
	/**
	 * [Optional] Handle an event when a keyboard key is pressed.
	 * @defaultValue - A no-op function.
	 */
	readonly onKeyDown?: KeyboardEventHandler<T>;

	/**
	 * [Optional] Handle an event when a keyboard key is pressed during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onKeyDownCapture?: KeyboardEventHandler<T>;

	/**
	 * [Optional] Handle an event when a keyboard key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onKeyUp?: KeyboardEventHandler<T>;

	/**
	 * [Optional] Handle an event when a keyboard key is released during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onKeyUpCapture?: KeyboardEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Keyboardable}.
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
 * @returns The determination that `value` is or is not {@link Keyboardable}.
 */
export const isKeyboardable = <T = Element>(
	value: unknown,
): value is Keyboardable<T> =>
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

export default Keyboardable;
