import {
	KeyboardEvent,
	KeyboardEventHandler,
	MouseEvent,
	MouseEventHandler,
	PointerEvent,
	PointerEventHandler,
	useCallback,
} from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { isPressEvent } from '@/utils/types/events/PressEvent';
import type { EnterEventHandler } from '@/utils/types/handlers/EnterEventHandler';
import type { PressEventHandler } from '@/utils/types/handlers/PressEventHandler';
import { useEnterEvents } from '@/utils/hooks/react/useEnterEvents';
import { useSpaceEvents } from '@/utils/hooks/react/useSpaceEvents';
import { isCapturing } from '@/utils/functions/events/phases/isCapturing';

type Keys = 'enter' | 'space';
type RequireFocus = [] | [Keys] | [Keys, Keys];

/**
* When this has a length of 2, the first boolean is used for `EnterEvents` and
* the second is used for `SpaceEvents`.
*/
type Focused = [] | [boolean] | [boolean, boolean]

/**
* @typeParam `T` - [Optional] The type of HTML element that will be the target
* of the event being handled. Defaults to type {@link Element}.
*/
export interface UsePressEventsInput<T = Element> {
	readonly disabled?: boolean
	readonly focused?: Focused
	readonly requireFocus?: RequireFocus
	readonly skip?: ReadonlyArray<string>
	readonly onClick?: MouseEventHandler<T>
	readonly onClickCapture?: MouseEventHandler<T>
	readonly onKeyDown?: KeyboardEventHandler<T>
	readonly onKeyDownCapture?: KeyboardEventHandler<T>
	readonly onMouseDown?: MouseEventHandler<T>
	readonly onMouseDownCapture?: MouseEventHandler<T>
	readonly onPointerDown?: PointerEventHandler<T>
	readonly onPointerDownCapture?: PointerEventHandler<T>
	readonly onPress?: PressEventHandler<T>
	readonly onPressCapture?: PressEventHandler<T>
	readonly onPressEnter?: EnterEventHandler<T>
	readonly onPressEnterCapture?: EnterEventHandler<T>
	readonly onPressSpace?: EnterEventHandler<T>
	readonly onPressSpaceCapture?: EnterEventHandler<T>
}

/**
* Use this hook in components that should allow the user to press a button with
* either a mouse/pen/touch or pressing 'Space' or 'Enter'.
*
* @typeParam `T` - [Optional] The type of HTML element that will be the target
* of the event being handled. Defaults to type {@link Element}.
*
* @param input - {@link UsePressEventsInput}
*
* @returns An array with two items, the first of which are handlers that may
* be passed to a JSX element, the second of which are more specific handlers
* that you can pass into different elements depending on how your component
* works.
*/
export const usePressEvents = <T = Element>({
	disabled = false,
	focused = [],
	requireFocus = ['enter', 'space'],
	skip = [],
	onClick = noop,
	onClickCapture = noop,
	onKeyDown = noop,
	onKeyDownCapture = noop,
	onMouseDown = noop,
	onMouseDownCapture = noop,
	onPointerDown = noop,
	onPointerDownCapture = noop,
	onPress = noop,
	onPressCapture = noop,
	onPressEnter = noop,
	onPressEnterCapture = noop,
	onPressSpace = noop,
	onPressSpaceCapture = noop,
}: UsePressEventsInput<T>) => {
	const areEnter = (type: string) => /^enter$/i.test(type);
	const areSpace = (type: string) => /^space$/i.test(type);

	const defaultEnterKeyFocus = !requireFocus.some(areEnter);
	const defaultSpaceKeyFocus = !requireFocus.some(areSpace);

	const enterKeyEventTriggerFocused = (() =>
			({
					0: () => defaultEnterKeyFocus,
					1: () => focused.at(0),
					2: () => focused.at(0),
			})[focused.length]() || defaultEnterKeyFocus)();

	const spaceKeyEventTriggerFocused = (() =>
			({
					0: () => defaultSpaceKeyFocus,
					1: () => focused.at(0),
					2: () => focused.at(1),
			})[focused.length]() || defaultSpaceKeyFocus)();

	const { onKeyDown: handleEnterKeyDown, onKeyDownCapture: handleEnterKeyDownCapture } = useEnterEvents<T>({
			disabled,
			focused: enterKeyEventTriggerFocused,
			requireFocus: requireFocus.some(areEnter),
			onPressEnter,
			onPressEnterCapture,
			onKeyDown: (e: KeyboardEvent<T>) => {
					if (!skip.includes('enter')) {
							onPress(e);
					}

					onKeyDown(e);
			},
			onKeyDownCapture: (e: KeyboardEvent<T>) => {
					if (!skip.includes('enter')) {
							onPressCapture(e);
					}

					onKeyDownCapture(e);
			},
	});

	const { onKeyDown: handleSpaceKeyDown, onKeyDownCapture: handleSpaceKeyDownCapture } = useSpaceEvents<T>({
			disabled,
			focused: spaceKeyEventTriggerFocused,
			requireFocus: requireFocus.some(areSpace),
			onPressSpace,
			onPressSpaceCapture,
			onKeyDown: (e: KeyboardEvent<T>) => {
					if (!skip.includes('space')) {
							onPress(e);
					}

					onKeyDown(e);
			},
			onKeyDownCapture: (e: KeyboardEvent<T>) => {
					if (!skip.includes('space')) {
							onPressCapture(e);
					}

					onKeyDownCapture(e);
			},
	});

	const handleClick = useCallback(
			<U extends T = T>(event: MouseEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && !isCapturing<U>(event)) {
							if (!skip.includes('click')) {
									onPress(event);
							}

							onClick(event);
					}
			},
			[disabled, skip, onPress, onClick],
	);

	const handleClickCapture = useCallback(
			<U extends T = T>(event: MouseEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && isCapturing<U>(event)) {
							if (!skip.includes('click')) {
									onPressCapture(event);
							}

							onClickCapture(event);
					}
			},
			[disabled, skip, onPressCapture, onClickCapture],
	);

	const handleKeyDown = useCallback(
			<U extends T = T>(event: KeyboardEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && !isCapturing<U>(event)) {
							handleEnterKeyDown(event);
							handleSpaceKeyDown(event);
					}
			},
			[disabled, handleEnterKeyDown, handleSpaceKeyDown],
	);

	const handleKeyDownCapture = useCallback(
			<U extends T = T>(event: KeyboardEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && isCapturing<U>(event)) {
							handleEnterKeyDownCapture(event);
							handleSpaceKeyDownCapture(event);
					}
			},
			[disabled, handleEnterKeyDownCapture, handleSpaceKeyDownCapture],
	);

	const handleMouseDown = useCallback(
			<U extends T = T>(event: MouseEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && !isCapturing<U>(event)) {
							if (!skip.includes('mousedown')) {
									onPress(event);
							}

							onMouseDown(event);
					}
			},
			[disabled, skip, onPress, onMouseDown],
	);

	const handleMouseDownCapture = useCallback(
			<U extends T = T>(event: MouseEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && isCapturing<U>(event)) {
							if (!skip.includes('mousedown')) {
									onPressCapture(event);
							}
							onMouseDownCapture(event);
					}
			},
			[disabled, skip, onPressCapture, onMouseDownCapture],
	);

	const handlePointerDown = useCallback(
			<U extends T = T>(event: PointerEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && !isCapturing<U>(event)) {
							if (!skip.includes('pointerdown')) {
									onPress(event);
							}

							onPointerDown(event);
					}
			},
			[disabled, skip, onPress, onPointerDown],
	);

	const handlePointerDownCapture = useCallback(
			<U extends T = T>(event: PointerEvent<U>) => {
					if (!disabled && isPressEvent<U>(event) && isCapturing<U>(event)) {
							if (!skip.includes('pointerdown')) {
									onPressCapture(event);
							}

							onPointerDownCapture(event);
					}
			},
			[disabled, skip, onPressCapture, onPointerDownCapture],
	);

	return [
			{
					onClick: handleClick,
					onClickCapture: handleClickCapture,
					onKeyDown: handleKeyDown,
					onKeyDownCapture: handleKeyDownCapture,
					onMouseDown: handleMouseDown,
					onMouseDownCapture: handleMouseDownCapture,
					onPointerDown: handlePointerDown,
					onPointerDownCapture: handlePointerDownCapture,
			},
			{
					handleEnterKeyDown,
					handleEnterKeyDownCapture,
					handleSpaceKeyDown,
					handleSpaceKeyDownCapture,
			},
	] as const;
};
