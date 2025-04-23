import { DragEventHandler } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { Mousable, isMousable } from '@/utils/types/props/Mousable';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a component is dragged to a `Droppable` target.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Draggable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onDrag = noop, text }) => (
 *   <div onDrag={onDrag}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Draggable<T = Element> extends Mousable {
	/**
	 * [Optional] Handle an event when the user drags and element or text
	 * selection.
	 * @defaultValue - A no-op function.
	 */
	readonly onDrag?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user drags and element or text
	 * selection during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragCapture?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when a drag operation is ended.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragEndCapture?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when a drag operation is ended during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragEndCaptureCapture?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when a dragged element enters a valid drop
	 * target.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragEnter?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when a dragged element enters a valid drop
	 * target during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragEnterCapture?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when a dragged element leaves a valid drop
	 * target.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragLeave?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when a dragged element leaves a valid drop
	 * target during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragLeaveCapture?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when an element or text selection is being
	 * dragged over a valid drop target.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragOver?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when an element or text selection is being
	 * dragged over a valid drop target during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragOverCapture?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user starts dragging an element or text
	 * selection.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragStart?: DragEventHandler<T>;

	/**
	 * [Optional] Handle an event when the user starts dragging an element or text
	 * selection during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onDragStartCapture?: DragEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Draggable}.
 *
 * Requirements:
 *   - `value` must be a valid {@link Mousable} prop type.
 *   - `value.onDrag()` is optional and must be a function if provided.
 *   - `value.onDragCapture()` is optional and must be a function if provided.
 *   - `value.onDragEnd()` is optional and must be a function if provided.
 *   - `value.onDragEndCapture()` is optional and must be a function if provided.
 *   - `value.onDragEnter()` is optional and must be a function if provided.
 *   - `value.onDragEnterCapture()` is optional and must be a function if provided.
 *   - `value.onDragLeave()` is optional and must be a function if provided.
 *   - `value.onDragLeaveCapture()` is optional and must be a function if provided.
 *   - `value.onDragOver()` is optional and must be a function if provided.
 *   - `value.onDragOverCapture()` is optional and must be a function if provided.
 *   - `value.onDragStart()` is optional and must be a function if provided.
 *   - `value.onDragStartCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Draggable}.
 */
export const isDraggable = <T = Element>(
	value: unknown,
): value is Draggable<T> =>
	/**
	 * value
	 */
	isMousable(value) &&
	/**
	 * value.onDrag()
	 */
	('onDrag' in value ? isFunction(value.onDrag) : true) &&
	/**
	 * value.onDragCapture()
	 */
	('onDragCapture' in value ? isFunction(value.onDragCapture) : true) &&
	/**
	 * value.onDragEnd()
	 */
	('onDragEnd' in value ? isFunction(value.onDragEnd) : true) &&
	/**
	 * value.onDragEndCapture()
	 */
	('onDragEndCapture' in value ? isFunction(value.onDragEndCapture) : true) &&
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
	 * value.onDragStart()
	 */
	('onDragStart' in value ? isFunction(value.onDragStart) : true) &&
	/**
	 * value.onDragStartCapture()
	 */
	('onDragStartCapture' in value ? isFunction(value.onDragStartCapture) : true);

export default Draggable;
