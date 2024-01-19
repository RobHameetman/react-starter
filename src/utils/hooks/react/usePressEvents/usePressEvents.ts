import {
	DragEventHandler,
	EventHandler,
	KeyboardEventHandler,
	MouseEventHandler,
	PointerEventHandler,
	SyntheticEvent,
	useCallback,
	useRef,
} from 'react';
import { isVirtualClick } from '@app/utils/functions/accessibility/isVirtualClick';
import { isAnchorElement } from '@app/utils/functions/check/html/isAnchorElement';
import { isCapturing as _isCapturing } from '@app/utils/functions/events/phases/isCapturing';
import { noop } from '@app/utils/functions/misc/noop';
import { isPressEvent as _isPressEvent } from '@app/utils/types/events/PressEvent';
import type { PressEventHandler } from '@app/utils/types/handlers/PressEventHandler';
import type { Disablable } from '@app/utils/types/props/Disablable';
import type { Keyboardable } from '@app/utils/types/props/Keyboardable';
import type { Pointerable } from '@app/utils/types/props/Pointerable';
import type { Pressable } from '@app/utils/types/props/Pressable';
import { isVirtualPointerEvent } from '@app/utils/types';

/**
 * A type alias used to avoid a line break in the 'extends' clause below.
 */
type ComposeProps<T> = Disablable &
	Keyboardable<T> &
	Pointerable<T> &
	Pressable<T>;

/**
 * Functional dependencies used in the {@link usePressEvents()} hook. This
 * object is provided in tests for mocking and spying.
 */
export interface UsePressEventsDependencies {
	/**
	 * Checks if the provided event is currently in the capturing phase.
	 */
	readonly isCapturing?: typeof _isCapturing;

	/**
	 * Checks that an `unknown` value is an {@link PressEvent}.
	 */
	readonly isPressEvent?: typeof _isPressEvent;
}

/**
 * Destructured arguments provided to the {@link usePressEvents()} hook.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export interface UsePressEventsInput<T = Element> extends ComposeProps<T> {
	/**
	 * [Optional] A list of event types to ignore.
	 * @defaultValue - `[]`
	 */
	readonly ignore?: ReadonlyArray<string>;
	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: UsePressEventsDependencies;
}

/**
 * Use handlers for mouse events, touch events, pointer events, and keyboard
 * events specifically when 'Enter' or 'Space' is pressed. This makes it easier
 * to achieve WCAG compliance given how many different ways there are to
 * interact with a component. It also allows you to handle these events in the
 * capturing phase of the event propagation cycle and avoid bloating component
 * logic with redundant wraparounds to handle disabled or enabled events.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param input - A {@link UsePressEventsInput} object used for destructuring.
 *
 * @returns The element provided to `as` but type cast for use as a JSX element
 * in your component.
 */
export const usePressEvents = <T = Element>({
	disabled = false,
	ignore = [],
	onClick = noop,
	onClickCapture = noop,
	onKeyDown = noop,
	onKeyDownCapture = noop,
	onKeyUp = noop,
	onKeyUpCapture = noop,
	onLongPress = noop,
	onLongPressCapture = noop,
	onMouseDown = noop,
	onMouseDownCapture = noop,
	onMouseUp = noop,
	onMouseUpCapture = noop,
	onPointerDown = noop,
	onPointerDownCapture = noop,
	onPointerUp = noop,
	onPointerUpCapture = noop,
	onPress = noop,
	onPressCapture = noop,
	onPressChange = noop,
	onPressChangeCapture = noop,
	onPressEnd = noop,
	onPressEndCapture = noop,
	onPressStart = noop,
	onPressStartCapture = noop,
	onPressUp = noop,
	onPressUpCapture = noop,
	_dependencies = {},
}: UsePressEventsInput<T>) => {
	const { isCapturing = _isCapturing, isPressEvent = _isPressEvent } =
		_dependencies;

	const pointerEventsSupported = 'PointerEvent' in window;

	const ref = useRef({
		activePointerType: null as null | string,
		aboveTarget: false,
		currentTarget: null as (EventTarget & T) | null,
		ignoreNextClick: false,
		long: false,
		pressing: false,
		timer: null as number | null,
	});

	const _handle = useCallback(
		<T = Element, E extends SyntheticEvent<T> = SyntheticEvent<T>>(
			event: E,
			onEvent: EventHandler<E> = noop,
			onEventCapture: EventHandler<E> = noop,
		) => {
			if (!disabled && !ignore.includes(event.type)) {
				if (isCapturing<T, E>(event)) {
					onEventCapture(event);
				} else {
					onEvent(event);
				}
			}
		},
		[disabled, ignore, isCapturing],
	);

	const _handlePressEvent = useCallback(
		<T = Element, E extends SyntheticEvent<T> = SyntheticEvent<T>>(
			event: E,
			onAnyPress: EventHandler<E> = noop,
			onAnyPressCapture: EventHandler<E> = noop,
		) => {
			if (isPressEvent<T>(event)) {
				_handle<T>(event, onAnyPress, onAnyPressCapture);
			}
		},
		[_handle],
	);

	const _bubblingThroughPortal = <
		T = Element,
		E extends SyntheticEvent<T> = SyntheticEvent<T>,
	>({
		currentTarget,
		target,
	}: /* @ts-expect-error: Property 'contains' does not exist on type 'EventTarget & T'. */
	E) => !currentTarget.contains(target as Element);

	const _onLongPress = useCallback<PressEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.long) {
				_handlePressEvent<T>(e, onLongPress, onLongPressCapture);

				if (state.timer) {
					window.clearTimeout(state.timer);
					state.timer = null;
				}

				state.long = false;
			}
		},
		[_handlePressEvent, onLongPress, onLongPressCapture],
	);

	const _onPress = useCallback<PressEventHandler<T>>(
		(e) => {
			_onLongPress(e);
			_handlePressEvent<T>(e, onPress, onPressCapture);
		},
		[_handlePressEvent, _onLongPress, onPress, onPressCapture],
	);

	/**
	 * 'pressend':
	 *  - sets the `ignoreClickEventAfterPress` state to `true`
	 *  - sets the `didFirePressStart` state to `false`
	 *  - fires a new event if a handler is provided
	 *  - sets the pressed state to `false`
	 *  - potentially fires a 'press' event
	 */
	const _onPressEnd = useCallback<PressEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (!state.pressing) {
				return;
			}

			state.ignoreNextClick = true;
			state.pressing = false;
			state.currentTarget = null;

			_handlePressEvent<T>(e, onPressEnd, onPressEndCapture);
		},
		[_handlePressEvent, onPressEnd, onPressEndCapture],
	);

	/**
	 * 'pressstart':
	 *  - stops propagation
	 *  - fires a new event if a handler is provided
	 *  - sets the pressed state to `true`
	 *  - sets the `didFirePressStart` state to `true`
	 */
	const _onPressStart = useCallback<PressEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.pressing) {
				return;
			}

			// e.stopPropagation();

			state.pressing = true;
			state.currentTarget = e.currentTarget;

			state.timer = window.setTimeout(() => {
				state.long = true;
			}, 1000);

			_handlePressEvent<T>(e, onPressStart, onPressStartCapture);
		},
		[_handlePressEvent, onPressStart, onPressStartCapture],
	);

	/**
	 * 'pressup':
	 *  - fires a new event if a handler is provided
	 */
	const _onPressChange = useCallback<PressEventHandler<T>>(
		(e) => _handlePressEvent<T>(e, onPressChange, onPressChangeCapture),
		[_handlePressEvent, onPressChange, onPressChangeCapture],
	);

	/**
	 * 'pressup':
	 *  - fires a new event if a handler is provided
	 */
	const _onPressUp = useCallback<PressEventHandler<T>>(
		(e) => _handlePressEvent<T>(e, onPressUp, onPressUpCapture),
		[_handlePressEvent, onPressUp, onPressUpCapture],
	);

	const _onPressCancel = useCallback<PressEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.pressing) {
				if (state.aboveTarget) {
					_onPressEnd(e); // doesn't fire a 'press' event
				}

				state.pressing = false;
				state.aboveTarget = false;
				state.activePointerType = null;
				state.currentTarget = null;

				if (state.timer) {
					window.clearTimeout(state.timer);
					state.timer = null;
				}

				state.long = false;

				// remove any global listeners and restore text selection
			}
		},
		[_onPressEnd],
	);

	/**
	 * Press Event Types:
	 * - click
	 * - dragstart
	 * - keydown
	 * - keyup
	 * - pointercancel
	 * - pointerdown
	 * - pointermove
	 * - pointerup
	 * - mousedown
	 * - mouseenter
	 * - mouseleave
	 * - mouseup
	 * - touchcancel
	 * - touchend
	 * - touchmove
	 * - touchstart
	 */
	const handleClick = useCallback<PointerEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (e && _bubblingThroughPortal<T>(e)) {
				return;
			}

			const isVirtual =
				state.activePointerType === 'virtual' ||
				isVirtualClick<T>({ event: e });

			/*
			 * if (isVirtualClick<T>({ event: e })) {
			 * 	state.activePointerType = 'virtual';
			 * }
			 */

			if (!state.ignoreNextClick && isVirtual) {
				_onPressStart(e);
				_onPressUp(e);
				_onPressEnd(e);
				_onPress(e);
			}

			state.ignoreNextClick = false;

			_handle<T>(e, onClick, onClickCapture);
		},
		[
			_handle,
			_onPress,
			_onPressStart,
			_onPressEnd,
			_onPressUp,
			onClick,
			onClickCapture,
		],
	);

	const handleKeyDown = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (!_bubblingThroughPortal<T>(e)) {
				if (!state.pressing && !e.repeat) {
					state.currentTarget = e.currentTarget;
					state.pressing = true;

					_onPressStart(e);

					// addGlobalListener(document, 'keyup', onKeyUp, false);
				}

				_handle<T>(e, onKeyDown, onKeyDownCapture);
			} else if (e.key === 'Enter' && isAnchorElement(e.currentTarget)) {
				e.stopPropagation();
			}
		},
		[
			_handle,
			_onPress,
			_onPressStart,
			_onPressChange,
			onKeyDown,
			onKeyDownCapture,
		],
	);

	const handleKeyUp = useCallback<KeyboardEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.pressing) {
				state.pressing = false;
			}

			if (!e.repeat && !_bubblingThroughPortal<T>(e)) {
				_onPressUp(e);
			}

			_handle<T>(e, onKeyUp, onKeyUpCapture);
		},
		[_handle, _onPressUp, onKeyUp, onKeyUpCapture],
	);

	const handleDragStart = useCallback<DragEventHandler<T>>(
		(e) => {
			if (_bubblingThroughPortal<T>(e)) {
				return;
			}

			_onPressCancel(e);
		},
		[_onPressCancel],
	);

	const handleMouseDown = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (!disabled && isPressEvent<T>(e) && !ignore.includes(e.type)) {
				onPress(e);
				onPressStart(e);
				onPressChange(e);
			}

			if (!disabled) {
				onMouseDown(e);
			}
		},
		[disabled, onPress, onPressStart, onPressChange, onMouseDown],
	);

	const handleMouseDownCapture = useCallback<MouseEventHandler<T>>(
		(e) => {
			if (
				!disabled &&
				isPressEvent<T>(e) &&
				isCapturing<T>(e) &&
				!ignore.includes(e.type)
			) {
				onPressCapture(e);
				onPressStartCapture(e);
				onPressChange(e);
			}

			if (!disabled && isCapturing<T>(e)) {
				onMouseDownCapture(e);
			}
		},
		[
			disabled,
			onPressCapture,
			onPressStartCapture,
			onPressChange,
			onMouseDownCapture,
		],
	);

	const handleMouseUp = useCallback<MouseEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.activePointerType === 'virtual') {
				return;
			}

			if (!disabled && isPressEvent<T>(e) && !ignore.includes(e.type)) {
				onPressUp(e);
				onPressEnd(e);
				onPressChange(e);
			}

			if (!disabled) {
				onMouseUp(e);
			}
		},
		[disabled, onPressUp, onPressEnd, onPressChange, onMouseUp],
	);

	const handleMouseUpCapture = useCallback<MouseEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.activePointerType === 'virtual') {
				return;
			}

			if (
				!disabled &&
				isPressEvent<T>(e) &&
				isCapturing<T>(e) &&
				!ignore.includes(e.type)
			) {
				onPressUpCapture(e);
				onPressEndCapture(e);
				onPressChangeCapture(e);
			}

			if (!disabled && isCapturing<T>(e)) {
				onMouseUpCapture(e);
			}
		},
		[
			disabled,
			onPressUpCapture,
			onPressEndCapture,
			onPressChangeCapture,
			onMouseUpCapture,
		],
	);

	const handlePointerDown = useCallback<PointerEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (_bubblingThroughPortal<T>(e)) {
				return;
			}

			if (isVirtualPointerEvent<T>(e)) {
				state.activePointerType = 'virtual';

				return;
			}

			state.activePointerType = e.pointerType;

			_onPressCancel(e);
		},
		[disabled, onPress, onPressStart, onPressChange, onPointerDown],
	);

	const handlePointerDownCapture = useCallback<PointerEventHandler<T>>(
		(e) => {
			if (
				!disabled &&
				pointerEventsSupported &&
				isPressEvent<T>(e) &&
				isCapturing<T>(e) &&
				!ignore.includes(e.type)
			) {
				onPressCapture(e);
				onPressStartCapture(e);
				onPressChangeCapture(e);
			}

			if (!disabled && pointerEventsSupported && isCapturing<T>(e)) {
				onPointerDownCapture(e);
			}
		},
		[
			disabled,
			onPressCapture,
			onPressStartCapture,
			onPressChangeCapture,
			onPointerDownCapture,
		],
	);

	const handlePointerUp = useCallback<PointerEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.activePointerType === 'virtual') {
				return;
			}

			if (
				!disabled &&
				pointerEventsSupported &&
				isPressEvent<T>(e) &&
				!ignore.includes(e.type)
			) {
				onPressUp(e);
				onPressEnd(e);
				onPressChange(e);
			}

			if (!disabled && pointerEventsSupported) {
				onPointerUp(e);
			}
		},
		[disabled, onPressUp, onPressEnd, onPressChange, onPointerUp],
	);

	const handlePointerUpCapture = useCallback<PointerEventHandler<T>>(
		(e) => {
			const { current: state } = ref;

			if (state.activePointerType === 'virtual') {
				return;
			}

			if (
				!disabled &&
				pointerEventsSupported &&
				isPressEvent<T>(e) &&
				isCapturing<T>(e) &&
				!ignore.includes(e.type)
			) {
				onPressUpCapture(e);
				onPressEndCapture(e);
				onPressChangeCapture(e);
			}

			if (!disabled && pointerEventsSupported && isCapturing<T>(e)) {
				onPointerUpCapture(e);
			}
		},
		[
			disabled,
			onPressUpCapture,
			onPressEndCapture,
			onPressChangeCapture,
			onPointerUpCapture,
		],
	);

	const handlers = {
		onClick: handleClick,
		onClickCapture: handleClick,
		onKeyDown: handleKeyDown,
		onKeyDownCapture: handleKeyDown,
		onKeyUp: handleKeyUp,
		onKeyUpCapture: handleKeyUp,
		onDragStart: handleDragStart,
		onDragStartCapture: handleDragStart,
	};

	if (pointerEventsSupported) {
		return {
			...handlers,
			onPointerDown: handlePointerDown,
			onPointerDownCapture: handlePointerDown,
			onPointerUp: handlePointerUp,
			onPointerUpCapture: handlePointerUp,
			onPointerEnter: handlePointerEnter,
			onPointerEnterCapture: handlePointerEnter,
			onPointerLeave: handlePointerLeave,
			onPointerLeaveCapture: handlePointerLeave,
		};
	}

	return {
		...handlers,
		onMouseDown: handleMouseDown,
		onMouseDownCapture: handleMouseDown,
		onMouseUp: handleMouseUp,
		onMouseUpCapture: handleMouseUp,
		onMouseEnter: handleMouseEnter,
		onMouseEnterCapture: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		onMouseLeaveCapture: handleMouseLeave,
		onTouchStart: handleTouchStart,
		onTouchStartCapture: handleTouchStart,
		onTouchEnd: handleTouchEnd,
		onTouchEndCapture: handleTouchEnd,
		onTouchMove: handleTouchMove,
		onTouchMoveCapture: handleTouchMove,
		onTouchCancel: handleTouchCancel,
		onTouchCancelCapture: handleTouchCancel,
	};
};
