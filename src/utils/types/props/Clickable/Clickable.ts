import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { Pointerable } from '@/utils/types/props/Pointerable';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user clicks the component. This prop type also allows you to
 * handle 'mousedown' and 'mouseup' events to address use-cases which involve
 * partial 'click' events.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Clickable {
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
export type Clickable<T = Element> = Pick<
	Pointerable<T>,
	| 'onClick'
	| 'onClickCapture'
	| 'onMouseDown'
	| 'onMouseDownCapture'
	| 'onMouseUp'
	| 'onMouseUpCapture'
	| 'onPointerDown'
	| 'onPointerDownCapture'
	| 'onPointerUp'
	| 'onPointerUpCapture'
>;

/**
 * Checks that an `unknown` value is {@link Clickable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onClick()` is optional and must be a function if provided.
 *   - `value.onClickCapture()` is optional and must be a function if provided.
 *   - `value.onMouseDown()` is optional and must be a function if provided.
 *   - `value.onMouseDownCapture()` is optional and must be a function if provided.
 *   - `value.onMouseUp()` is optional and must be a function if provided.
 *   - `value.onMouseUpCapture()` is optional and must be a function if provided.
 *   - `value.onPointerDown()` is optional and must be a function if provided.
 *   - `value.onPointerDownCapture()` is optional and must be a function if provided.
 *   - `value.onPointerUp()` is optional and must be a function if provided.
 *   - `value.onPointerUpCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Clickable}.
 */
export const isClickable = <T = Element>(
	value: unknown,
): value is Clickable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onClick()
	 */
	('onClick' in value ? isFunction(value.onClick) : true) &&
	/**
	 * value.onClickCapture()
	 */
	('onClickCapture' in value ? isFunction(value.onClickCapture) : true) &&
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
	 * value.onMouseUp()
	 */
	('onMouseUp' in value ? isFunction(value.onMouseUp) : true) &&
	/**
	 * value.onMouseUpCapture()
	 */
	('onMouseUpCapture' in value ? isFunction(value.onMouseUpCapture) : true) &&
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
	 * value.onPointerUp()
	 */
	('onPointerUp' in value ? isFunction(value.onPointerUp) : true) &&
	/**
	 * value.onPointerUpCapture()
	 */
	('onPointerUpCapture' in value ? isFunction(value.onPointerUpCapture) : true);
