import { MouseEvent, PointerEvent, TouchEvent } from 'react';
import { isPressEventType } from '@app/utils/enums/PressEventTypes';
import { isMouseEvent } from '@app/utils/functions/check/react/isMouseEvent';
import { isPointerEvent } from '@app/utils/functions/check/react/isPointerEvent';
import { isTouchEvent } from '@app/utils/functions/check/react/isTouchEvent';
import { EnterEvent, isEnterEvent } from '@app/utils/types/events/EnterEvent';
import { SpaceEvent, isSpaceEvent } from '@app/utils/types/events/SpaceEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the component is pressed. A component is considered pressed when
 * the user presses the 'Enter' or 'Space' key, clicks the component with a
 * mouse, or taps the component with a touch screen. This allows us to more
 * easily achieve WCAG compliance given the various ways that a user can
 * interact with a component.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link HTMLElement}.
 */
export type PressEvent<T = HTMLElement> =
	| EnterEvent<T>
	| MouseEvent<T>
	| PointerEvent<T>
	| TouchEvent<T>
	| SpaceEvent<T>;

/**
 * Checks that an `unknown` value is a {@link PressEvent}.
 *
 * Requirements:
 *   - `value` must be a valid implementation of one of the following types:
 * 	   - {@link EnterEvent} if the target is not a checkbox or radio button
 * 	   - {@link MouseEvent}
 * 	   - {@link PointerEvent}
 * 	   - {@link TouchEvent}
 * 	   - {@link SpaceEvent}
 *   - `value.type` is required and must be a valid `PressEventType`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link HTMLElement}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link PressEvent}.
 */
export const isPressEvent = <T = HTMLElement>(
	value: unknown,
): value is PressEvent<T> =>
	/**
	 * value
	 */
	(isEnterEvent(value) ||
		isMouseEvent(value) ||
		isPointerEvent(value) ||
		isTouchEvent(value) ||
		isSpaceEvent(value)) &&
	/**
	 * value.type
	 */
	isPressEventType(value.type);
