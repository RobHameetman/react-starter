import { isObject } from '@/utils/functions/check/js/core/isObject';
import {
	SpaceEventHandler,
	isSpaceEventHandler,
} from '@/utils/types/handlers/SpaceEventHandler';

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
 * export const MyComponent: FC<MyComponentProps> = ({ onPressSpace = noop, text }) => (
 *   <div onKeyDown={onPressSpace}>
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
	readonly onPressSpace?: SpaceEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Space' key is pressed during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressSpaceCapture?: SpaceEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Space' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressSpaceUp?: SpaceEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Space' key is released during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressSpaceUpCapture?: SpaceEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Spaceable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onPressSpace()` is optional and must be a valid {@link SpaceEventHandler} if provided.
 *   - `value.onPressSpaceCapture()` is optional and must be a valid {@link SpaceEventHandler} if provided.
 *   - `value.onPressSpaceUp()` is optional and must be a valid {@link SpaceEventHandler} if provided.
 *   - `value.onPressSpaceUpCapture()` is optional and must be a valid {@link SpaceEventHandler} if provided.
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
	 * value.onPressSpace()
	 */
	('onPressSpace' in value ? isSpaceEventHandler(value.onPressSpace) : true) &&
	/**
	 * value.onPressSpaceCapture()
	 */
	('onPressSpaceCapture' in value
		? isSpaceEventHandler(value.onPressSpaceCapture)
		: true) &&
	/**
	 * value.onPressSpaceUp()
	 */
	('onPressSpaceUp' in value ? isSpaceEventHandler(value.onPressSpaceUp) : true) &&
	/**
	 * value.onPressSpaceUpCapture()
	 */
	('onPressSpaceUpCapture' in value
		? isSpaceEventHandler(value.onPressSpaceUpCapture)
		: true);
