import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { HoverEventHandler } from '@app/utils/types/handlers/HoverEventHandler';
import { Mousable } from '@app/utils/types/props/Mousable';
import { Pointerable } from '@app/utils/types/props/Pointerable';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user starts or stops hovering their pointer over the component.
 */
type ComposedProps<T = Element> = Pick<
	Mousable<T>,
	| 'onMouseEnter'
	| 'onMouseEnterCapture'
	| 'onMouseLeave'
	| 'onMouseLeaveCapture'
	| 'onMouseOut'
	| 'onMouseOutCapture'
	| 'onMouseOver'
	| 'onMouseOverCapture'
> &
	Pick<
		Pointerable<T>,
		| 'onPointerEnter'
		| 'onPointerEnterCapture'
		| 'onPointerLeave'
		| 'onPointerLeaveCapture'
		| 'onPointerOut'
		| 'onPointerOutCapture'
		| 'onPointerOver'
		| 'onPointerOverCapture'
	>;

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user starts or stops hovering their pointer over the component.
 * The component will receive a 'mouseover' event when the pointer enters the
 * visual space of the element and any of its children. The 'mouseenter' event
 * is only triggered when the pointer enters the visual space of the element
 * itself. This distinction is useful in cases where you want to trigger an
 * action around an element but not inside of it, such as when a modal is
 * displayed with an overlay.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Hoverable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onMouseOver = noop, text }) => (
 *   <div onMouseOver={onMouseOver}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Hoverable<T = Element> extends ComposedProps<T> {
	readonly onHover?: HoverEventHandler<T>;
	readonly onHoverCapture?: HoverEventHandler<T>;
	readonly onHoverStop?: HoverEventHandler<T>;
	readonly onHoverStopCapture?: HoverEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Hoverable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onHover()` is optional and must be a function if provided.
 *   - `value.onHoverCapture()` is optional and must be a function if provided.
 *   - `value.onHoverStop()` is optional and must be a function if provided.
 *   - `value.onHoverStopCapture()` is optional and must be a function if provided.
 *   - `value.onMouseEnter()` is optional and must be a function if provided.
 *   - `value.onMouseEnterCapture()` is optional and must be a function if provided.
 *   - `value.onMouseLeave()` is optional and must be a function if provided.
 *   - `value.onMouseLeaveCapture()` is optional and must be a function if provided.
 *   - `value.onMouseOut()` is optional and must be a function if provided.
 *   - `value.onMouseOutCapture()` is optional and must be a function if provided.
 *   - `value.onMouseOver()` is optional and must be a function if provided.
 *   - `value.onMouseOverCapture()` is optional and must be a function if provided.
 *   - `value.onPointerEnter()` is optional and must be a function if provided.
 *   - `value.onPointerEnterCapture()` is optional and must be a function if provided.
 *   - `value.onPointerLeave()` is optional and must be a function if provided.
 *   - `value.onPointerLeaveCapture()` is optional and must be a function if provided.
 *   - `value.onPointerOut()` is optional and must be a function if provided.
 *   - `value.onPointerOutCapture()` is optional and must be a function if provided.
 *   - `value.onPointerOver()` is optional and must be a function if provided.
 *   - `value.onPointerOverCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Hoverable}.
 */
export const isHoverable = <T = Element>(
	value: unknown,
): value is Hoverable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onHover()
	 */
	('onHover' in value ? isFunction(value.onHover) : true) &&
	/**
	 * value.onHoverCapture()
	 */
	('onHoverCapture' in value ? isFunction(value.onHoverCapture) : true) &&
	/**
	 * value.onHoverStop()
	 */
	('onHoverStop' in value ? isFunction(value.onHoverStop) : true) &&
	/**
	 * value.onHoverStopCapture()
	 */
	('onHoverStopCapture' in value
		? isFunction(value.onHoverStopCapture)
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
		: true);
