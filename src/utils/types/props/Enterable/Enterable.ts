import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import {
	EnterEventHandler,
	isEnterEventHandler,
} from '@app/utils/types/handlers/EnterEventHandler';

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
 * export const MyComponent: FC<MyComponentProps> = ({ onEnter = noop, text }) => (
 *   <div onKeyDown={onEnter}>
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
	readonly onEnter?: EnterEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Enter' key is pressed during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onEnterCapture?: EnterEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Enter' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onEnterUp?: EnterEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Enter' key is released during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onEnterUpCapture?: EnterEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Enterable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onEnter()` is optional and must be a valid {@link EnterEventHandler} if provided.
 *   - `value.onEnterCapture()` is optional and must be a valid {@link EnterEventHandler} if provided.
 *   - `value.onEnterUp()` is optional and must be a valid {@link EnterEventHandler} if provided.
 *   - `value.onEnterUpCapture()` is optional and must be a valid {@link EnterEventHandler} if provided.
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
	 * value.onEnter()
	 */
	('onEnter' in value ? isEnterEventHandler(value.onEnter) : true) &&
	/**
	 * value.onEnterCapture()
	 */
	('onEnterCapture' in value
		? isEnterEventHandler(value.onEnterCapture)
		: true) &&
	/**
	 * value.onEnterUp()
	 */
	('onEnterUp' in value ? isEnterEventHandler(value.onEnterUp) : true) &&
	/**
	 * value.onEnterUpCapture()
	 */
	('onEnterUpCapture' in value
		? isEnterEventHandler(value.onEnterUpCapture)
		: true);
