import { isObject } from '@app/utils/functions/check/js/core/isObject';
import {
	EscapeEventHandler,
	isEscapeEventHandler,
} from '@app/utils/types/handlers/EscapeEventHandler';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user presses the 'Escape' key.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Escapable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onEscape = noop, text }) => (
 *   <div onKeyDown={onEscape}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Escapable<T = Element> {
	/**
	 * [Optional] Handle an event when the 'Escape' key is pressed.
	 * @defaultValue - A no-op function.
	 */
	readonly onEscape?: EscapeEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Escape' key is pressed during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onEscapeCapture?: EscapeEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Escape' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onEscapeUp?: EscapeEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Escape' key is released during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onEscapeUpCapture?: EscapeEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Escapable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onEscape()` is optional and must be a valid {@link EscapeEventHandler} if provided.
 *   - `value.onEscapeCapture()` is optional and must be a valid {@link EscapeEventHandler} if provided.
 *   - `value.onEscapeUp()` is optional and must be a valid {@link EscapeEventHandler} if provided.
 *   - `value.onEscapeUpCapture()` is optional and must be a valid {@link EscapeEventHandler} if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Escapable}.
 */
export const isEscapable = <T = Element>(
	value: unknown,
): value is Escapable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onEscape()
	 */
	('onEscape' in value ? isEscapeEventHandler(value.onEscape) : true) &&
	/**
	 * value.onEscapeCapture()
	 */
	('onEscapeCapture' in value
		? isEscapeEventHandler(value.onEscapeCapture)
		: true) &&
	/**
	 * value.onEscapeUp()
	 */
	('onEscapeUp' in value ? isEscapeEventHandler(value.onEscapeUp) : true) &&
	/**
	 * value.onEscapeUpCapture()
	 */
	('onEscapeUpCapture' in value
		? isEscapeEventHandler(value.onEscapeUpCapture)
		: true);
