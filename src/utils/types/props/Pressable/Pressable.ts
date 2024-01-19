import {
	PressEventHandler,
	isPressEventHandler,
} from '@app/utils/types/handlers/PressEventHandler';
import {
	Keyboardable,
	isKeyboardable,
} from '@app/utils/types/props/Keyboardable';
import { Pointerable, isPointerable } from '@app/utils/types/props/Pointerable';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component is pressed. This type is used for easier WCAG
 * compliance and handles mouse, keyboard, and pointer events. Use this with the
 * `usePressEvents()` hook to access the correct handlers.
 */
type ComposedProps<T = Element> = Keyboardable<T> &
	Pick<
		Pointerable<T>,
		| 'onClick'
		| 'onClickCapture'
		| 'onMouseDown'
		| 'onMouseDownCapture'
		| 'onMouseUp'
		| 'onMouseUpCapture'
		| 'onPointerDown'
		| 'onPointerDownCapture'
		| 'onPointerUp'
		| 'onPointerUpCapture'
	>;

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component is pressed. This type is used for easier WCAG
 * compliance and handles mouse, keyboard, and pointer events. Use this with the
 * `usePressEvents()` hook to access the correct handlers.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Pressable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onPress = noop, text }) => (
 *   <div onClick={onPress} onKeyDown={onPress} onPointer={onPress}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Pressable<T = Element> extends ComposedProps<T> {
	/**
	 * [Optional] Handle an event when the component is pressed and held before
	 * release.
	 * @defaultValue - A no-op function.
	 */
	readonly onLongPress?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is pressed and held before
	 * release during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onLongPressCapture?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is pressed.
	 * @defaultValue - A no-op function.
	 */
	readonly onPress?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is pressed during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressCapture?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when the press state changes.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressChange?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when the press state changes during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressChangeCapture?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when a press interaction ends, either over the
	 * target or when the pointer leaves the target.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEnd?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when a press interaction ends during capturing,
	 * either over the target or when the pointer leaves the target.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEndCapture?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when a press interaction starts.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressStart?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when a press interaction starts during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressStartCapture?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when a press interaction is released over the
	 * target, regardless of whether it started on the target or not.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressUp?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when a press interaction is released over the
	 * target during capturing, regardless of whether it started on the target or
	 * not.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressUpCapture?: PressEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Pressable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onPress()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressCapture()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressChange()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressChangeCapture()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressEnd()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressEndCapture()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressStart()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressStartCapture()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressUp()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressUpCapture()` is optional and must be a valid {@link PressEventHandler} if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not {@link Pressable}.
 */
export const isPressable = <T = Element>(
	value: unknown,
	event?: Record<string, unknown>,
): value is Pressable<T> =>
	/**
	 * value
	 */
	isKeyboardable(value) &&
	isPointerable(value) &&
	/**
	 * value.onPress()
	 */
	('onPress' in value ? isPressEventHandler<T>(value.onPress, event) : true) &&
	/**
	 * value.onPressCapture()
	 */
	('onPressCapture' in value
		? isPressEventHandler<T>(value.onPressCapture, event)
		: true) &&
	/**
	 * value.onPressChange()
	 */
	('onPressChange' in value
		? isPressEventHandler<T>(value.onPressChange, event)
		: true) &&
	/**
	 * value.onPressChangeCapture()
	 */
	('onPressChangeCapture' in value
		? isPressEventHandler<T>(value.onPressChangeCapture, event)
		: true) &&
	/**
	 * value.onPressEnd()
	 */
	('onPressEnd' in value
		? isPressEventHandler<T>(value.onPressEnd, event)
		: true) &&
	/**
	 * value.onPressEndCapture()
	 */
	('onPressEndCapture' in value
		? isPressEventHandler<T>(value.onPressEndCapture, event)
		: true) &&
	/**
	 * value.onPressStart()
	 */
	('onPressStart' in value
		? isPressEventHandler<T>(value.onPressStart, event)
		: true) &&
	/**
	 * value.onPressStartCapture()
	 */
	('onPressStartCapture' in value
		? isPressEventHandler<T>(value.onPressStartCapture, event)
		: true) &&
	/**
	 * value.onPressUp()
	 */
	('onPressUp' in value
		? isPressEventHandler<T>(value.onPressUp, event)
		: true) &&
	/**
	 * value.onPressUpCapture()
	 */
	('onPressUpCapture' in value
		? isPressEventHandler<T>(value.onPressUpCapture, event)
		: true);
