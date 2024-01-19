import { isFocusEventType } from '@app/utils/enums/FocusEventTypes';
import { isKeyboardEventType } from '@app/utils/enums/KeyboardEventTypes';
import { isMouseEventType } from '@app/utils/enums/MouseEventTypes';
import { isPointerEventType } from '@app/utils/enums/PointerEventTypes';
import { isObject } from '@app/utils/functions/check/js/core/isObject';

/**
 * A native interaction event is an event, either concrete or virtual, which
 * is monitored for specific interaction modalities to determine if an
 * interaction is the result of a user interaction or an automated process, like
 * calling `element.click()`.
 */
export type NativeInteractionEvent =
	| FocusEvent
	| KeyboardEvent
	| MouseEvent
	| PointerEvent;

/**
 * Checks that an `unknown` value is a {@link NativeInteractionEvent}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.type` is required and must be a valid implementation of one of the following types:
 *     - `FocusEventType`
 *     - `KeyboardEventType`
 *     - `MouseEventType`
 *     - `PointerEventType`
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NativeInteractionEvent}.
 */
export const isNativeInteractionEvent = (
	value: unknown,
): value is NativeInteractionEvent =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	(isFocusEventType(value.type) ||
		isKeyboardEventType(value.type) ||
		isMouseEventType(value.type) ||
		isPointerEventType(value.type));
