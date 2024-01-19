import {
	CloseEventHandler,
	isCloseEventHandler,
} from '@app/utils/types/handlers/CloseEventHandler';
import { Escapable, isEscapable } from '@app/utils/types/props/Escapable';
import { Pressable, isPressable } from '@app/utils/types/props/Pressable';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component is closed.
 */
type ComposedProps<T = Element> = Escapable<T> & Pressable<T>;

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component is closed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link HTMLElement}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Closeable<HTMLDivElement> {
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
export interface Closeable<T = HTMLElement> extends ComposedProps<T> {
	/**
	 * [Optional] A control prop used to determine whether or not the component
	 * is closed.
	 * @defaultValue - `false`
	 */
	readonly closed?: boolean;

	/**
	 * [Optional] Handle an event when the component is pressed.
	 * @defaultValue - A no-op function.
	 */
	readonly onClose?: CloseEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component is pressed during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onCloseCapture?: CloseEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Closeable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.closed` is optional and must be a boolean if provided.
 *   - `value.onClose()` is optional and must be a valid {@link CloseEventHandler} if provided.
 *   - `value.onCloseCapture()` is optional and must be a valid {@link CloseEventHandler} if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link HTMLElement}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 * @param event - [Optional] An `unknown` value. Expected to be an event.
 *
 * @returns The determination that `value` is or is not {@link Closeable}.
 */
export const isCloseable = <T = HTMLElement>(
	value: unknown,
	event?: Record<string, unknown>,
): value is Closeable<T> =>
	/**
	 * value
	 */
	(isEscapable(value) || isPressable(value, event)) &&
	/**
	 * value.onClose()
	 */
	('onClose' in value ? isCloseEventHandler<T>(value.onClose, event) : true) &&
	/**
	 * value.onCloseCapture()
	 */
	('onCloseCapture' in value
		? isCloseEventHandler<T>(value.onCloseCapture, event)
		: true);
