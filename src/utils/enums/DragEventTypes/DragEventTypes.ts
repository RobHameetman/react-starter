import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link DragEventType} values.
 */
export enum DragEventTypes {
	/**
	 * The `drag` event is fired every few hundred milliseconds as an
	 * {@link Element} or text selection is being dragged by the user.
	 */
	drag = 'drag',

	/**
	 * The `dragend` event is fired when a drag operation is being ended (by
	 * releasing a mouse button or hitting the escape key).
	 */
	dragend = 'dragend',

	/**
	 * The `dragenter` event is fired when a dragged {@link Element} or text
	 * selection enters a valid drop target. The target object is the immediate
	 * user selection (the element directly indicated by the user as the drop
	 * target), or the `<body>` element.
	 */
	dragenter = 'dragenter',

	/**
	 * The `dragleave` event is fired when a dragged {@link Element} or text
	 * selection leaves a valid drop target. This event is not cancelable.
	 */
	dragleave = 'dragleave',

	/**
	 * The `dragover` event is fired when an {@link Element} or text selection is
	 * being dragged over a valid drop target (every few hundred milliseconds).
	 * The event is fired on the drop target(s).
	 */
	dragover = 'dragover',

	/**
	 * The `dragstart` event is fired when the user starts dragging an
	 * {@link Element} or text selection.
	 */
	dragstart = 'dragstart',

	/**
	 * The `drop` event is fired when an {@link Element} or text selection is
	 * dropped on a valid drop target. To ensure that the `drop` event always fires
	 * as expected, you should always include a `preventDefault()` call in the
	 * part of your code which handles the `dragover` event.
	 */
	drop = 'drop',
}

/**
 * Any one of the above {@link DragEventTypes}.
 */
export type DragEventType = keyof typeof DragEventTypes;

/**
 * A list of all {@link DragEventType} values.
 */
export const DRAG_EVENT_TYPES = Object.freeze(
	Object.keys(DragEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link DragEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link DragEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link DragEventType}.
 */
export const isDragEventType = (value: unknown): value is DragEventType =>
	/**
	 * value
	 */
	isString(value) && DRAG_EVENT_TYPES.includes(value);
