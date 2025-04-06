import { TouchEventHandler } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user touches the screen.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Touchable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onTouchStart = noop, text }) => (
 *   <div onTouchStart={onTouchStart}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Touchable<T = Element> {
	/**
	 * [Optional] Handle an event when a 'touchcancel' event is fired. The
	 * 'touchcancel' event is fired when one or more touch points have been
	 * disrupted in an implementation-specific manner (for example, too many touch
	 * points are created).
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchCancel?: TouchEventHandler<T>;

	/**
	 * [Optional] Handle an event when a 'touchcancel' event is fired during
	 * capturing. The 'touchcancel' event is fired when one or more touch points
	 * have been disrupted in an implementation-specific manner (for example, too
	 * many touch points are created).
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchCancelCapture?: TouchEventHandler<T>;

	/**
	 * [Optional] Handle an event when one or more touch points are removed from
	 * the touch surface.
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchEnd?: TouchEventHandler<T>;

	/**
	 * [Optional] Handle an event when one or more touch points are removed from
	 * the touch surface during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchEndCapture?: TouchEventHandler<T>;

	/**
	 * [Optional] Handle an event when one or more touch points are moved along
	 * the touch surface.
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchMove?: TouchEventHandler<T>;

	/**
	 * [Optional] Handle an event when one or more touch points are moved along
	 * the touch surface during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchMoveCapture?: TouchEventHandler<T>;

	/**
	 * [Optional] Handle an event when a user touches the screen.
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchStart?: TouchEventHandler<T>;

	/**
	 * [Optional] Handle an event when a user touches the screen during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onTouchStartCapture?: TouchEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Touchable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onTouchCancel()` is optional and must be a function if provided.
 *   - `value.onTouchCancelCapture()` is optional and must be a function if provided.
 *   - `value.onTouchEnd()` is optional and must be a function if provided.
 *   - `value.onTouchEndCapture()` is optional and must be a function if provided.
 *   - `value.onTouchMove()` is optional and must be a function if provided.
 *   - `value.onTouchMoveCapture()` is optional and must be a function if provided.
 *   - `value.onTouchStart()` is optional and must be a function if provided.
 *   - `value.onTouchStartCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Touchable}.
 */
export const isTouchable = <T = Element>(
	value: unknown,
): value is Touchable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onTouchCancel()
	 */
	('onTouchCancel' in value ? isFunction(value.onTouchCancel) : true) &&
	/**
	 * value.onTouchCancelCapture()
	 */
	('onTouchCancelCapture' in value
		? isFunction(value.onTouchCancelCapture)
		: true) &&
	/**
	 * value.onTouchEnd()
	 */
	('onTouchEnd' in value ? isFunction(value.onTouchEnd) : true) &&
	/**
	 * value.onTouchEndCapture()
	 */
	('onTouchEndCapture' in value ? isFunction(value.onTouchEndCapture) : true) &&
	/**
	 * value.onTouchMove()
	 */
	('onTouchMove' in value ? isFunction(value.onTouchMove) : true) &&
	/**
	 * value.onTouchMoveCapture()
	 */
	('onTouchMoveCapture' in value
		? isFunction(value.onTouchMoveCapture)
		: true) &&
	/**
	 * value.onTouchStart()
	 */
	('onTouchStart' in value ? isFunction(value.onTouchStart) : true) &&
	/**
	 * value.onTouchStartCapture()
	 */
	('onTouchStartCapture' in value
		? isFunction(value.onTouchStartCapture)
		: true);
