import { isObject } from '@/utils/functions/check/js/core/isObject';
import {
	EscapeEventHandler,
	isEscapeEventHandler,
} from '@/utils/types/handlers/EscapeEventHandler';

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
 * export const MyComponent: FC<MyComponentProps> = ({ onPressEscape = noop, text }) => (
 *   <div onKeyDown={onPressEscape}>
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
	readonly onPressEscape?: EscapeEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Escape' key is pressed during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEscapeCapture?: EscapeEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Escape' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEscapeUp?: EscapeEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Escape' key is released during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressEscapeUpCapture?: EscapeEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Escapable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onPressEscape()` is optional and must be a valid {@link EscapeEventHandler} if provided.
 *   - `value.onPressEscapeCapture()` is optional and must be a valid {@link EscapeEventHandler} if provided.
 *   - `value.onPressEscapeUp()` is optional and must be a valid {@link EscapeEventHandler} if provided.
 *   - `value.onPressEscapeUpCapture()` is optional and must be a valid {@link EscapeEventHandler} if provided.
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
	 * value.onPressEscape()
	 */
	('onPressEscape' in value ? isEscapeEventHandler(value.onPressEscape) : true) &&
	/**
	 * value.onPressEscapeCapture()
	 */
	('onPressEscapeCapture' in value
		? isEscapeEventHandler(value.onPressEscapeCapture)
		: true) &&
	/**
	 * value.onPressEscapeUp()
	 */
	('onPressEscapeUp' in value ? isEscapeEventHandler(value.onPressEscapeUp) : true) &&
	/**
	 * value.onPressEscapeUpCapture()
	 */
	('onPressEscapeUpCapture' in value
		? isEscapeEventHandler(value.onPressEscapeUpCapture)
		: true);
