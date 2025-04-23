import { MouseEventHandler } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action the user uses a mouse.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Mousable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onClick = noop, text }) => (
 *   <div onClick={onClick}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Mousable<T = Element> {
	/**
	 * [Optional] Handle an event when the component is right-clicked. The
	 * 'auxclick' event is fired at an element when a non-primary pointing device
	 * button (any mouse button other than the primary—usually leftmost—button)
	 * has been pressed and released both within the same element. 'auxclick' is
	 * fired after the 'mousedown' and 'mouseup' events have been fired, in that
	 * order.
	 * @defaultValue - A no-op function.
	 */
	readonly onAuxClick?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is clicked during capturing.
	 * The 'auxclick' event is fired at an element when a non-primary pointing
	 * device button (any mouse button other than the primary—usually
	 * leftmost—button) has been pressed and released both within the same
	 * element. 'auxclick' is fired after the 'mousedown' and 'mouseup' events have
	 * been fired, in that order.
	 * @defaultValue - A no-op function.
	 */
	readonly onAuxClickCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is clicked. An element
	 * receives a 'click' event when a pointing device button (such as a mouse's
	 * primary mouse button) is both pressed and released while the pointer is
	 * located inside the element. 'click' events fire after both the 'mousedown'
	 * and 'mouseup' events have fired, in that order.
	 * @defaultValue - A no-op function.
	 */
	readonly onClick?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is clicked during capturing.
	 * An element receives a 'click' event when a pointing device button (such as
	 * a mouse's primary mouse button) is both pressed and released while the
	 * pointer is located inside the element. 'click' events fire after both the
	 * 'mousedown' and 'mouseup' events have fired, in that order.
	 * @defaultValue - A no-op function.
	 */
	readonly onClickCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is double-clicked.
	 * @defaultValue - A no-op function.
	 */
	readonly onDoubleClick?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is double-clicked during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDoubleClickCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle a 'mousedown' event. The 'mousedown' event is fired at an
	 * element the moment a pointing device button is initially pressed while the
	 * pointer is inside the element.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseDown?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle a 'mousedown' event during capturing. The 'mousedown'
	 * event is fired at an element the moment a pointing device button is
	 * initially pressed while the pointer is inside the element.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseDownCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component but not any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseEnter?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component but not any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseEnterCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component but not any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseLeave?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component but not any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseLeaveCapture?: MouseEventHandler<T>;

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
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component and any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseOut?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user stops hovering their pointer over
	 * the component and any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseOutCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component and any of its children.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseOver?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user hovers their pointer over the
	 * component and any of its children during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseOverCapture?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle a 'mouseup' event. The 'mouseup' event is fired at an
	 * element when a button on a pointing device (such as a mouse or trackpad) is
	 * released while the pointer is located inside it.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseUp?: MouseEventHandler<T>;

	/**
	 * [Optional] Handle a 'mouseup' event during capturing. The 'mouseup' event
	 * is fired at an element when a button on a pointing device (such as a mouse
	 * or trackpad) is released while the pointer is located inside it.
	 * @defaultValue - A no-op function.
	 */
	readonly onMouseUpCapture?: MouseEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Mousable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onAuxClick()` is optional and must be a function if provided.
 *   - `value.onAuxClickCapture()` is optional and must be a function if provided.
 *   - `value.onClick()` is optional and must be a function if provided.
 *   - `value.onClickCapture()` is optional and must be a function if provided.
 *   - `value.onDoubleClick()` is optional and must be a function if provided.
 *   - `value.onDoubleClickCapture()` is optional and must be a function if provided.
 *   - `value.onMouseDown()` is optional and must be a function if provided.
 *   - `value.onMouseDownCapture()` is optional and must be a function if provided.
 *   - `value.onMouseEnter()` is optional and must be a function if provided.
 *   - `value.onMouseEnterCapture()` is optional and must be a function if provided.
 *   - `value.onMouseLeave()` is optional and must be a function if provided.
 *   - `value.onMouseLeaveCapture()` is optional and must be a function if provided.
 *   - `value.onMouseMove()` is optional and must be a function if provided.
 *   - `value.onMouseMoveCapture()` is optional and must be a function if provided.
 *   - `value.onMouseOut()` is optional and must be a function if provided.
 *   - `value.onMouseOutCapture()` is optional and must be a function if provided.
 *   - `value.onMouseOver()` is optional and must be a function if provided.
 *   - `value.onMouseOverCapture()` is optional and must be a function if provided.
 *   - `value.onMouseUp()` is optional and must be a function if provided.
 *   - `value.onMouseUpCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Mousable}.
 */
export const isMousable = <T = Element>(value: unknown): value is Mousable<T> =>
	/**
	 * value
	 */
	isObject<T>(value) &&
	/**
	 * value.onAuxClick()
	 */
	('onAuxClick' in value ? isFunction(value.onAuxClick) : true) &&
	/**
	 * value.onAuxClickCapture()
	 */
	('onAuxClickCapture' in value ? isFunction(value.onAuxClickCapture) : true) &&
	/**
	 * value.onClick()
	 */
	('onClick' in value ? isFunction(value.onClick) : true) &&
	/**
	 * value.onClickCapture()
	 */
	('onClickCapture' in value ? isFunction(value.onClickCapture) : true) &&
	/**
	 * value.onDoubleClick()
	 */
	('onDoubleClick' in value ? isFunction(value.onDoubleClick) : true) &&
	/**
	 * value.onDoubleClickCapture()
	 */
	('onDoubleClickCapture' in value
		? isFunction(value.onDoubleClickCapture)
		: true) &&
	/**
	 * value.onMouseDown()
	 */
	('onMouseDown' in value ? isFunction(value.onMouseDown) : true) &&
	/**
	 * value.onMouseDownCapture()
	 */
	('onMouseDownCapture' in value
		? isFunction(value.onMouseDownCapture)
		: true) &&
	/**
	 * value.onMouseEnter()
	 */
	('onMouseEnter' in value ? isFunction(value.onMouseEnter) : true) &&
	/**
	 * value.onMouseEnterCapture()
	 */
	('onMouseEnterCapture' in value
		? isFunction(value.onMouseEnterCapture)
		: true) &&
	/**
	 * value.onMouseLeave()
	 */
	('onMouseLeave' in value ? isFunction(value.onMouseLeave) : true) &&
	/**
	 * value.onMouseLeaveCapture()
	 */
	('onMouseLeaveCapture' in value
		? isFunction(value.onMouseLeaveCapture)
		: true) &&
	/**
	 * value.onMouseMove()
	 */
	('onMouseMove' in value ? isFunction(value.onMouseMove) : true) &&
	/**
	 * value.onMouseMoveCapture()
	 */
	('onMouseMoveCapture' in value
		? isFunction(value.onMouseMoveCapture)
		: true) &&
	/**
	 * value.onMouseOut()
	 */
	('onMouseOut' in value ? isFunction(value.onMouseOut) : true) &&
	/**
	 * value.onMouseOutCapture()
	 */
	('onMouseOutCapture' in value ? isFunction(value.onMouseOutCapture) : true) &&
	/**
	 * value.onMouseOver()
	 */
	('onMouseOver' in value ? isFunction(value.onMouseOver) : true) &&
	/**
	 * value.onMouseOverCapture()
	 */
	('onMouseOverCapture' in value
		? isFunction(value.onMouseOverCapture)
		: true) &&
	/**
	 * value.onMouseUp()
	 */
	('onMouseUp' in value ? isFunction(value.onMouseUp) : true) &&
	/**
	 * value.onMouseUpCapture()
	 */
	('onMouseUpCapture' in value ? isFunction(value.onMouseUpCapture) : true);

export default Mousable;
