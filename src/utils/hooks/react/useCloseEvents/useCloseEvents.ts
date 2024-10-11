import {
	KeyboardEvent,
	KeyboardEventHandler,
	MouseEventHandler,
	PointerEventHandler,
	SyntheticEvent,
	useCallback,
} from 'react';
import noop from 'lodash/noop';
import { isCloseEvent } from '@/utils/types/events/CloseEvent';
import { CloseEventHandler } from '@/utils/types/handlers/CloseEventHandler';
import { EnterEventHandler } from '@/utils/types/handlers/EnterEventHandler';
import { EscapeEventHandler } from '@/utils/types/handlers/EscapeEventHandler';
import { PressEventHandler } from '@/utils/types/handlers/PressEventHandler';
import { SpaceEventHandler } from '@/utils/types/handlers/SpaceEventHandler';
import { UseEscapeEventsInput, useEscapeEvents } from '@/utils/hooks/react/useEscapeEvents';
import { UsePressEventsInput, usePressEvents } from '@/utils/hooks/react/usePressEvents';
import { isCapturing } from '@/utils/functions/events/phases/isCapturing';

type Keys = 'enter' | 'escape' | 'space';
type RequireFocus = [] | [Keys] | [Keys, Keys] | [Keys, Keys, Keys];

/**
* When this has a length of 2, the first boolean is used for `EscapeEvents` and
* the second is used for both `EnterEvents` and `SpaceEvents`. When the length
* is 3, the order of event triggers in focus is:
* `EscapeEvents`, `EnterEvents`, `SpaceEvents`
*
* @example
* This means that a value of `[false, true]` represents a state where the
* element using the `onKeyDown()` to handle `EscapeEvents` is not in focus,
* while the element(s) using it to handle `EnterEvents` and `SpaceEvents` are
* currently in focus. Assuming that focus is required in this way, a matching
* 'enter' or 'space' keystroke would trigger an `onKeyDown()` call with an
* `EnterEvent` or `SpaceEvent` respectively.
*/
type Focused = [] | [boolean] | [boolean, boolean] | [boolean, boolean, boolean];

/**
* @typeParam `T` - [Optional] The type of HTML element that will be the target
* of the event being handled. Defaults to type {@link Element}.
*/
export interface UseCloseEventsInput<T = Element> {
	readonly disabled?: boolean
	readonly focused?: Focused
	readonly requireFocus?: RequireFocus
	readonly skip?: ReadonlyArray<string>
	readonly onClick?: MouseEventHandler<T>
	readonly onClickCapture?: MouseEventHandler<T>
	readonly onClose?: CloseEventHandler<T>
	readonly onCloseCapture?: CloseEventHandler<T>
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
	readonly onPressEscape?: EscapeEventHandler<T>
	readonly onPressEscapeCapture?: EscapeEventHandler<T>
	readonly onPressSpace?: SpaceEventHandler<T>
	readonly onPressSpaceCapture?: SpaceEventHandler<T>
}

/**
* Use this hook in components that may accept `onClose()` and
* `onCloseCapture()` callbacks as props.
*
* @typeParam `T` - [Optional] The type of HTML element that will be the target
* of the event being handled. Defaults to type {@link Element}.
*
* @param input - {@link UseCloseEventsInput}
*
* @returns An array with two items, the first of which are handlers that may
* be passed to a JSX element, the second of which are more specific handlers
* that you can pass into different elements depending on how your component
* works.
*/
export const useCloseEvents = <T = Element>({
	disabled = false,
	focused = [],
	requireFocus = [],
	skip = [],
	onClick = noop,
	onClickCapture = noop,
	onClose = noop,
	onCloseCapture = noop,
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
	onPressEscape = noop,
	onPressEscapeCapture = noop,
	onPressSpace = noop,
	onPressSpaceCapture = noop,
}: UseCloseEventsInput<T>) => {
	const areEscape = (type: string) => /^esc(ape)?$/i.test(type);
	const areEnter = (type: string) => /^enter$/i.test(type);
	const areSpace = (type: string) => /^space$/i.test(type);
	const areEnterOrSpace = (type: string) => /^(enter|space)$/i.test(type);

	const requireEnterTriggerFocus = requireFocus.some(areEnter);
	const requireEscapeTriggerFocus = requireFocus.some(areEscape);
	const requireSpaceTriggerFocus = requireFocus.some(areSpace);
	const requireEnterAndSpaceTriggerFocus = requireFocus.filter(areEnterOrSpace);

	const defaultEnterAndSpaceFocus = [!requireEnterTriggerFocus, !requireSpaceTriggerFocus];
	const defaultEscapeFocus = !requireEscapeTriggerFocus;

	const escapeFocused = (() =>
		({
			0: () => defaultEscapeFocus,
			1: () => focused.at(0),
			2: () => focused.at(0),
			3: () => focused.at(0),
		})[focused.length]() || defaultEscapeFocus)() as UseEscapeEventsInput['focused'];

	const enterAndSpaceFocused = (() =>
		({
			0: () => defaultEnterAndSpaceFocus,
			1: () => [focused.at(0)],
			2: () => [focused.at(1)],
			3: () => [focused.at(1), focused.at(2)],
		})[focused.length]() || defaultEnterAndSpaceFocus)() as UsePressEventsInput['focused'];

	const { onKeyDown: handleEscapeKeyDown, onKeyDownCapture: handleEscapeKeyDownCapture } = useEscapeEvents({
		disabled,
		focused: escapeFocused,
		requireFocus: requireSpaceTriggerFocus,
		onKeyDown: (e) => {
			if (!skip.includes('escape')) {
				onClose(e);
			}

			onKeyDown(e);
		},
		onKeyDownCapture: (e) => {
			if (!skip.includes('escape')) {
				onCloseCapture(e);
			}

			onKeyDownCapture(e);
		},
		onPressEscape,
		onPressEscapeCapture,
	});

	const [
		{
			onClick: handleClick,
			onClickCapture: handleClickCapture,
			onKeyDown: handleEnterOrSpaceKeyDown,
			onKeyDownCapture: handleEnterOrSpaceKeyDownCapture,
			onMouseDown: handleMouseDown,
			onMouseDownCapture: handleMouseDownCapture,
			onPointerDown: handlePointerDown,
			onPointerDownCapture: handlePointerDownCapture,
		},
		{ handleEnterKeyDown, handleEnterKeyDownCapture, handleSpaceKeyDown, handleSpaceKeyDownCapture },
	] = usePressEvents({
		disabled,
		skip,
		focused: enterAndSpaceFocused,
		requireFocus: requireEnterAndSpaceTriggerFocus as UsePressEventsInput['requireFocus'],
		onClick,
		onClickCapture,
		onKeyDown,
		onKeyDownCapture,
		onMouseDown,
		onMouseDownCapture,
		onPointerDown,
		onPointerDownCapture,
		onPress: (e) => {
			if (!skip.includes('press')) {
				onClose(e);
			}

			onPress(e);
		},
		onPressCapture: (e) => {
			if (!skip.includes('press')) {
				onCloseCapture(e);
			}

			onPressCapture(e);
		},
		onPressEnter,
		onPressEnterCapture,
		onPressSpace,
		onPressSpaceCapture,
	});

	const handleKeyDown = useCallback(
		<U extends T = T>(event: KeyboardEvent<U>) => {
			if (!disabled && isCloseEvent<U>(event) && !isCapturing<U>(event)) {
				handleEnterOrSpaceKeyDown(event);
				handleEscapeKeyDown(event);
			}
		},
		[disabled, handleEscapeKeyDown, handleEnterOrSpaceKeyDown],
	);

	const handleKeyDownCapture = useCallback(
		<U extends T = T>(event: KeyboardEvent<U>) => {
			if (!disabled && isCloseEvent<U>(event) && isCapturing<U>(event)) {
				handleEscapeKeyDownCapture(event);
				handleEnterOrSpaceKeyDownCapture(event);
			}
		},
		[disabled, handleEscapeKeyDownCapture, handleEnterOrSpaceKeyDownCapture],
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
			handleEscapeKeyDown,
			handleEscapeKeyDownCapture,
			handleSpaceKeyDown,
			handleSpaceKeyDownCapture,
		},
	] as const;
};
