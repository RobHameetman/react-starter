import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link ClipboardEventType} values.
 */
export enum ClipboardEventTypes {
	/**
	 * The `copy` event fires when the user initiates a copy action through the
	 * browser's user interface. The event's default action is to copy the
	 * selection (if any) to the clipboard. A handler for this event can modify
	 * the clipboard contents by calling `setData(format, data)` on the event's
	 * `ClipboardEvent.clipboardData` property, and cancelling the event's default
	 * action using `event.preventDefault()`. However, the handler cannot read the
	 * clipboard data. It's possible to construct and dispatch a synthetic `copy`
	 * event, but this will not affect the system clipboard.
	 */
	copy = 'copy',

	/**
	 * The `cut` event is fired when the user has initiated a "cut" action through
	 * the browser's user interface. If the user attempts a cut action on
	 * uneditable content, the `cut` event still fires but the event object
	 * contains no data. The event's default action is to copy the current
	 * selection (if any) to the system clipboard and remove it from the document.
	 * A handler for this event can modify the clipboard contents by calling
	 * `setData(format, data)` on the event's `ClipboardEvent.clipboardData`
	 * property, and cancelling the default action using `event.preventDefault()`.
	 * Note though that cancelling the default action will also prevent the
	 * document from being updated. So an event handler which wants to emulate the
	 * default action for "cut" while modifying the clipboard must also manually
	 * remove the selection from the document. The handler cannot read the
	 * clipboard data. It's possible to construct and dispatch a synthetic `cut`
	 * event, but this will not affect the system clipboard or the document's
	 * contents.
	 */
	cut = 'cut',

	/**
	 * The `paste` event is fired when the user has initiated a "paste" action
	 * through the browser's user interface. If the cursor is in an editable
	 * context (for example, in a `<textarea>` or an element with
	 * `contenteditable` attribute set to `true`) then the default action is to
	 * insert the contents of the clipboard into the document at the cursor
	 * position. A handler for this event can access the clipboard contents by
	 * calling `getData()` on the event's `clipboardData` property. To override
	 * the default behavior (for example to insert some different data or a
	 * transformation of the clipboard contents) an event handler must cancel the
	 * default action using `event.preventDefault()`, and then insert its desired
	 * data manually. It's possible to construct and dispatch a synthetic `paste`
	 * event, but this will not affect the document's contents.
	 */
	paste = 'paste',
}

/**
 * Any one of the above {@link ClipboardEventTypes}.
 */
export type ClipboardEventType = keyof typeof ClipboardEventTypes;

/**
 * A list of all {@link ClipboardEventType} values.
 */
export const CLIPBOARD_EVENT_TYPES = Object.freeze(
	Object.keys(ClipboardEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link ClipboardEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link ClipboardEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ClipboardEventType}.
 */
export const isClipboardEventType = (
	value: unknown,
): value is ClipboardEventType =>
	/**
	 * value
	 */
	isString(value) && CLIPBOARD_EVENT_TYPES.includes(value);
