import { MouseEventHandler, PointerEventHandler, useCallback } from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { isCapturing as _isCapturing } from '@/utils/functions/events/phases/isCapturing';
import { isHoverEvent as _isHoverEvent } from '@/utils/types/events/HoverEvent';
import type { Disablable } from '@/utils/types/props/Disablable';
import type { Hoverable } from '@/utils/types/props/Hoverable';

/**
 * A type alias used to avoid a line break in the 'extends' clause below.
 */
type ComposeProps<T> = Disablable & Hoverable<T>;

/**
 * Functional dependencies used in the {@link useHoverEvents()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UseHoverEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks that an `unknown` value is an {@link HoverEvent}.
	 */
	readonly isHoverEvent?: typeof _isHoverEvent;
}

/**
 * Destructured arguments provided to the {@link useHoverEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UseHoverEventsInput<T = Element> extends ComposeProps<T> {
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UseHoverEventsDependencies;
}

/**
 * Use a handler for hover events on an element. This hook allows you to easily
 * handle hover events on an element without having to worry about the
 * differences between mouse and pointer events. It also allows you to handle
 * hover events in the capturing phase of the event and avoid bloating component
 * logic with redundant wraparounds to handle disabled or enabled events.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UseHoverEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const useHoverEvents = <T = Element>({
	disabled = false,
	onHover = noop,
	onHoverCapture = noop,
	onHoverStop = noop,
	onHoverStopCapture = noop,
	onMouseEnter = noop,
	onMouseEnterCapture = noop,
	onMouseLeave = noop,
	onMouseLeaveCapture = noop,
	onMouseOut = noop,
	onMouseOutCapture = noop,
	onMouseOver = noop,
	onMouseOverCapture = noop,
	onPointerEnter = noop,
	onPointerEnterCapture = noop,
	onPointerLeave = noop,
	onPointerLeaveCapture = noop,
	onPointerOut = noop,
	onPointerOutCapture = noop,
	onPointerOver = noop,
	onPointerOverCapture = noop,
	_dependencies = {},
}: UseHoverEventsInput<T>) => {
	const { isCapturing = _isCapturing, isHoverEvent = _isHoverEvent } =
		_dependencies;

	const handleMouseEnter = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onMouseEnter(e);
			}
		},
		[disabled, onMouseEnter],
	);

	const handleMouseLeave = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onMouseLeave(e);
			}
		},
		[disabled, onMouseLeave],
	);

	const handleMouseOut = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onMouseOut(e);
			}
		},
		[disabled, onMouseOut],
	);

	const handleMouseOutCapture = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && isCapturing<T>(e)) {
				onMouseOutCapture(e);
			}
		},
		[disabled, onMouseOutCapture],
	);

	const handleMouseOver = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onMouseOver(e);
			}
		},
		[disabled, onMouseOver],
	);

	const handleMouseOverCapture = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && isCapturing<T>(e)) {
				onMouseOverCapture(e);
			}
		},
		[disabled, onMouseEnterCapture],
	);

	const handlePointerEnter = useCallback<PointerEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onPointerEnter(e);
				onHover(e);
			}
		},
		[disabled, onHover, onPointerEnter],
	);

	const handlePointerLeave = useCallback<PointerEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onPointerLeave(e);
				onHoverStop(e);
			}
		},
		[disabled, onHoverStop, onPointerLeave],
	);

	const handlePointerOut = useCallback<PointerEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onPointerOut(e);
			}
		},
		[disabled, onPointerOut],
	);

	const handlePointerOutCapture = useCallback<PointerEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && isCapturing<T>(e)) {
				onPointerOutCapture(e);
			}
		},
		[disabled, onPointerOutCapture],
	);

	const handlePointerOver = useCallback<PointerEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && !isCapturing<T>(e)) {
				onPointerOver(e);
			}
		},
		[disabled, onPointerOver],
	);

	const handlePointerOverCapture = useCallback<PointerEventHandler<T>>(
		(e) => {
			if (!disabled && isHoverEvent<T>(e) && isCapturing<T>(e)) {
				onPointerOverCapture(e);
			}
		},
		[disabled, onPointerOverCapture],
	);

	return {
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		onMouseOut: handleMouseOut,
		onMouseOutCapture: handleMouseOutCapture,
		onMouseOver: handleMouseOver,
		onMouseOverCapture: handleMouseOverCapture,
		onPointerEnter: handlePointerEnter,
		onPointerLeave: handlePointerLeave,
		onPointerOut: handlePointerOut,
		onPointerOutCapture: handlePointerOutCapture,
		onPointerOver: handlePointerOver,
		onPointerOverCapture: handlePointerOverCapture,
	};
};
