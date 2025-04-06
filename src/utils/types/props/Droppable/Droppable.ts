import { DragEventHandler } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { Draggable } from '@/utils/types/props/Draggable';

/**
 * A type alias for the props that are common to {@link Droppable} and
 * {@link Draggable}.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
type FromDraggable<T = Element> = Pick<
	Draggable<T>,
	| 'onDragEnter'
	| 'onDragEnterCapture'
	| 'onDragLeave'
	| 'onDragLeaveCapture'
	| 'onDragOver'
	| 'onDragOverCapture'
>;

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a component is the drop zone target for a draggable element.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Droppable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onDrop = noop, text }) => (
 *   <div onDrop={onDrop}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Droppable<T = Element> extends FromDraggable<T> {
	/**
	 * [Optional] Handle an event when the user drops an element or text selection
	 * on a valid drop target.
	 * @defaultValue - A no-op function.
	 */
	readonly onDrop?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user drops an element or text selection
	 * on a valid drop target during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDropCapture?: DragEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Droppable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onDragEnter()` is optional and must be a function if provided.
 *   - `value.onDragEnterCapture()` is optional and must be a function if provided.
 *   - `value.onDragLeave()` is optional and must be a function if provided.
 *   - `value.onDragLeaveCapture()` is optional and must be a function if provided.
 *   - `value.onDragOver()` is optional and must be a function if provided.
 *   - `value.onDragOverCapture()` is optional and must be a function if provided.
 *   - `value.onDrop()` is optional and must be a function if provided.
 *   - `value.onDropCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Droppable}.
 */
export const isDroppable = <T = Element>(
	value: unknown,
): value is Droppable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onDragEnter()
	 */
	('onDragEnter' in value ? isFunction(value.onDragEnter) : true) &&
	/**
	 * value.onDragEnterCapture()
	 */
	('onDragEnterCapture' in value
		? isFunction(value.onDragEnterCapture)
		: true) &&
	/**
	 * value.onDragLeave()
	 */
	('onDragLeave' in value ? isFunction(value.onDragLeave) : true) &&
	/**
	 * value.onDragLeaveCapture()
	 */
	('onDragLeaveCapture' in value
		? isFunction(value.onDragLeaveCapture)
		: true) &&
	/**
	 * value.onDragOver()
	 */
	('onDragOver' in value ? isFunction(value.onDragOver) : true) &&
	/**
	 * value.onDragOverCapture()
	 */
	('onDragOverCapture' in value ? isFunction(value.onDragOverCapture) : true) &&
	/**
	 * value.onDrop()
	 */
	('onDrop' in value ? isFunction(value.onDrop) : true) &&
	/**
	 * value.onDropCapture()
	 */
	('onDropCapture' in value ? isFunction(value.onDropCapture) : true);
