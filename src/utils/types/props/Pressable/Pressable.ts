import {
	PressEventHandler,
	isPressEventHandler,
} from '@/utils/types/handlers/PressEventHandler';
import {
	Keyboardable,
	isKeyboardable,
} from '@/utils/types/props/Keyboardable';
import { Pointerable, isPointerable } from '@/utils/types/props/Pointerable';

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
	 * [Optional] Handle an event when a press interaction is released over the
	 * target, regardless of whether it started on the target or not.
	 * @defaultValue - A no-op function.
	 */
	readonly onRelease?: PressEventHandler<T>;

	/**
	 * [Optional] Handle an event when a press interaction is released over the
	 * target during capturing, regardless of whether it started on the target or
	 * not.
	 * @defaultValue - A no-op function.
	 */
	readonly onReleaseCapture?: PressEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Pressable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onPress()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onPressCapture()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onRelease()` is optional and must be a valid {@link PressEventHandler} if provided.
 *   - `value.onReleaseCapture()` is optional and must be a valid {@link PressEventHandler} if provided.
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
	 * value.onRelease()
	 */
	('onRelease' in value
		? isPressEventHandler<T>(value.onRelease, event)
		: true) &&
	/**
	 * value.onReleaseCapture()
	 */
	('onReleaseCapture' in value
		? isPressEventHandler<T>(value.onReleaseCapture, event)
		: true);

export default Pressable;
