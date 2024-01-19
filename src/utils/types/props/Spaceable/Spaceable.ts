import { isObject } from '@app/utils/functions/check/js/core/isObject';
import {
	SpaceEventHandler,
	isSpaceEventHandler,
} from '@app/utils/types/handlers/SpaceEventHandler';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user presses the 'Space' key.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Spaceable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onSpace = noop, text }) => (
 *   <div onKeyDown={onSpace}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Spaceable<T = Element> {
	/**
	 * [Optional] Handle an event when the 'Space' key is pressed.
	 * @defaultValue - A no-op function.
	 */
	readonly onSpace?: SpaceEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Space' key is pressed during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onSpaceCapture?: SpaceEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Space' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onSpaceUp?: SpaceEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Space' key is released during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onSpaceUpCapture?: SpaceEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Spaceable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onSpace()` is optional and must be a valid {@link SpaceEventHandler} if provided.
 *   - `value.onSpaceCapture()` is optional and must be a valid {@link SpaceEventHandler} if provided.
 *   - `value.onSpaceUp()` is optional and must be a valid {@link SpaceEventHandler} if provided.
 *   - `value.onSpaceUpCapture()` is optional and must be a valid {@link SpaceEventHandler} if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Spaceable}.
 */
export const isSpaceable = <T = Element>(
	value: unknown,
): value is Spaceable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onSpace()
	 */
	('onSpace' in value ? isSpaceEventHandler(value.onSpace) : true) &&
	/**
	 * value.onSpaceCapture()
	 */
	('onSpaceCapture' in value
		? isSpaceEventHandler(value.onSpaceCapture)
		: true) &&
	/**
	 * value.onSpaceUp()
	 */
	('onSpaceUp' in value ? isSpaceEventHandler(value.onSpaceUp) : true) &&
	/**
	 * value.onSpaceUpCapture()
	 */
	('onSpaceUpCapture' in value
		? isSpaceEventHandler(value.onSpaceUpCapture)
		: true);
