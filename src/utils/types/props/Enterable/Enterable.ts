import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import {
	EnterEventHandler,
	isEnterEventHandler,
} from '@/utils/types/handlers/EnterEventHandler';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user presses the 'Enter' key.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Enterable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onPressEnter = noop, text }) => (
 *   <div onKeyDown={onPressEnter}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Enterable<T = Element> {
	/**
	 * [Optional] Handle an event when the 'Enter' key is pressed.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEnter?: EnterEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Enter' key is pressed during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEnterCapture?: EnterEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Enter' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEnterUp?: EnterEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Enter' key is released during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEnterUpCapture?: EnterEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Enterable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onPressEnter()` is optional and must be a valid {@link EnterEventHandler} if provided.
 *   - `value.onPressEnterCapture()` is optional and must be a valid {@link EnterEventHandler} if provided.
 *   - `value.onPressEnterUp()` is optional and must be a valid {@link EnterEventHandler} if provided.
 *   - `value.onPressEnterUpCapture()` is optional and must be a valid {@link EnterEventHandler} if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Enterable}.
 */
export const isEnterable = <T = Element>(
	value: unknown,
): value is Enterable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onPressEnter()
	 */
	('onPressEnter' in value ? isEnterEventHandler(value.onPressEnter) : true) &&
	/**
	 * value.onPressEnterCapture()
	 */
	('onPressEnterCapture' in value
		? isEnterEventHandler(value.onPressEnterCapture)
		: true) &&
	/**
	 * value.onPressEnterUp()
	 */
	('onPressEnterUp' in value ? isEnterEventHandler(value.onPressEnterUp) : true) &&
	/**
	 * value.onPressEnterUpCapture()
	 */
	('onPressEnterUpCapture' in value
		? isEnterEventHandler(value.onPressEnterUpCapture)
		: true);
