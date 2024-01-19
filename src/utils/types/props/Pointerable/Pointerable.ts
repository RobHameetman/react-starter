import { PointerEventHandler } from 'react';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { Mousable, isMousable } from '@app/utils/types/props/Mousable';
import { Touchable, isTouchable } from '@app/utils/types/props/Touchable';

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
 * export const MyComponent: FC<MyComponentProps> = ({ onPointerDown = noop, text }) => (
 *   <div onPointerDown={onPointerDown}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Pointerable<T = Element> extends Mousable<T>, Touchable<T> {
	/**
	 * [Optional] Handle an event when an element captures a pointer.
	 * @defaultValue - A no-op function.
	 */
	readonly onGotPointerCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when an element captures a pointer during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onGotPointerCaptureCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when a captured pointer is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onLostPointerCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when a captured pointer is released during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onLostPointerCaptureCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the pointer is cancelled.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerCancel?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the pointer is cancelled during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerCancelCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle a 'pointerup' event. The 'pointerdown' event is fired when
	 * a pointer becomes active. For mouse, it is fired when the device transitions
	 * from no buttons pressed to at least one button pressed. For touch, it is
	 * fired when physical contact is made with the digitizer. For pen, it is fired
	 * when the stylus makes physical contact with the digitizer.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerDown?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle a 'pointerup' event during capturing. The 'pointerdown'
	 * event is fired when a pointer becomes active. For mouse, it is fired when the
	 * device transitions from no buttons pressed to at least one button pressed.
	 * For touch, it is fired when physical contact is made with the digitizer. For
	 * pen, it is fired when the stylus makes physical contact with the digitizer.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerDownCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component but not any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerEnter?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component but not any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerEnterCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component but not any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerLeave?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component but not any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerLeaveCapture?: PointerEventHandler<T>;

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

	/**
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component and any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerOut?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component and any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerOutCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component and any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerOver?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component and any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerOverCapture?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle a 'pointerup' event. The 'pointerup' event is fired when a
	 * pointer is no longer active.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerUp?: PointerEventHandler<T>;

	/**
	 * [Optional] Handle a 'pointerup' event during capturing. The 'pointerup'
	 * event is fired when a pointer is no longer active.
	 * @defaultValue - A no-op function.
	 */
	readonly onPointerUpCapture?: PointerEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Pointerable}.
 *
 * Requirements:
 *   - `value` must be valid {@link Mousable} and {@link Touchable} prop types.
 *   - `value.onGotPointerCapture()` is optional and must be a function if provided.
 *   - `value.onGotPointerCaptureCapture()` is optional and must be a function if provided.
 *   - `value.onLostPointerCapture()` is optional and must be a function if provided.
 *   - `value.onLostPointerCaptureCapture()` is optional and must be a function if provided.
 *   - `value.onPointerCancel()` is optional and must be a function if provided.
 *   - `value.onPointerCancelCapture()` is optional and must be a function if provided.
 *   - `value.onPointerDown()` is optional and must be a function if provided.
 *   - `value.onPointerDownCapture()` is optional and must be a function if provided.
 *   - `value.onPointerEnter()` is optional and must be a function if provided.
 *   - `value.onPointerEnterCapture()` is optional and must be a function if provided.
 *   - `value.onPointerLeave()` is optional and must be a function if provided.
 *   - `value.onPointerLeaveCapture()` is optional and must be a function if provided.
 *   - `value.onPointerMove()` is optional and must be a function if provided.
 *   - `value.onPointerMoveCapture()` is optional and must be a function if provided.
 *   - `value.onPointerOut()` is optional and must be a function if provided.
 *   - `value.onPointerOutCapture()` is optional and must be a function if provided.
 *   - `value.onPointerOver()` is optional and must be a function if provided.
 *   - `value.onPointerOverCapture()` is optional and must be a function if provided.
 *   - `value.onPointerUp()` is optional and must be a function if provided.
 *   - `value.onPointerUpCapture()` is optional and must be a function if provided.
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
	isMousable<T>(value) &&
	isTouchable<T>(value) &&
	/**
	 * value.onGotPointerCapture()
	 */
	('onGotPointerCapture' in value
		? isFunction(value.onGotPointerCapture)
		: true) &&
	/**
	 * value.onGotPointerCaptureCapture()
	 */
	('onGotPointerCaptureCapture' in value
		? isFunction(value.onGotPointerCaptureCapture)
		: true) &&
	/**
	 * value.onLostPointerCapture()
	 */
	('onLostPointerCapture' in value
		? isFunction(value.onLostPointerCapture)
		: true) &&
	/**
	 * value.onLostPointerCaptureCapture()
	 */
	('onLostPointerCaptureCapture' in value
		? isFunction(value.onLostPointerCaptureCapture)
		: true) &&
	/**
	 * value.onPointerCancel()
	 */
	('onPointerCancel' in value ? isFunction(value.onPointerCancel) : true) &&
	/**
	 * value.onPointerCancelCapture()
	 */
	('onPointerCancelCapture' in value
		? isFunction(value.onPointerCancelCapture)
		: true) &&
	/**
	 * value.onPointerDown()
	 */
	('onPointerDown' in value ? isFunction(value.onPointerDown) : true) &&
	/**
	 * value.onPointerDownCapture()
	 */
	('onPointerDownCapture' in value
		? isFunction(value.onPointerDownCapture)
		: true) &&
	/**
	 * value.onPointerEnter()
	 */
	('onPointerEnter' in value ? isFunction(value.onPointerEnter) : true) &&
	/**
	 * value.onPointerEnterCapture()
	 */
	('onPointerEnterCapture' in value
		? isFunction(value.onPointerEnterCapture)
		: true) &&
	/**
	 * value.onPointerLeave()
	 */
	('onPointerLeave' in value ? isFunction(value.onPointerLeave) : true) &&
	/**
	 * value.onPointerLeaveCapture()
	 */
	('onPointerLeaveCapture' in value
		? isFunction(value.onPointerLeaveCapture)
		: true) &&
	/**
	 * value.onPointerMove()
	 */
	('onPointerMove' in value ? isFunction(value.onPointerMove) : true) &&
	/**
	 * value.onPointerMoveCapture()
	 */
	('onPointerMoveCapture' in value
		? isFunction(value.onPointerMoveCapture)
		: true) &&
	/**
	 * value.onPointerOut()
	 */
	('onPointerOut' in value ? isFunction(value.onPointerOut) : true) &&
	/**
	 * value.onPointerOutCapture()
	 */
	('onPointerOutCapture' in value
		? isFunction(value.onPointerOutCapture)
		: true) &&
	/**
	 * value.onPointerOver()
	 */
	('onPointerOver' in value ? isFunction(value.onPointerOver) : true) &&
	/**
	 * value.onPointerOverCapture()
	 */
	('onPointerOverCapture' in value
		? isFunction(value.onPointerOverCapture)
		: true) &&
	/**
	 * value.onPointerUp()
	 */
	('onPointerUp' in value ? isFunction(value.onPointerUp) : true) &&
	/**
	 * value.onPointerUpCapture()
	 */
	('onPointerUpCapture' in value ? isFunction(value.onPointerUpCapture) : true);
