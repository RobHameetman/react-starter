import { isObject } from '@/utils/functions/check/js/core/isObject';
import {
	TabEventHandler,
	isTabEventHandler,
} from '@/utils/types/handlers/TabEventHandler';
import {
	TabBackEventHandler,
	isTabBackEventHandler,
} from '@/utils/types/handlers/TabBackEventHandler';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user presses the 'Tab' key.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Tabbable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onPressTab = noop, text }) => (
 *   <div onKeyDown={onPressTab}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Tabbable<T = Element> {
	/**
	 * [Optional] Handle an event when the 'Tab' key is pressed.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTab?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is pressed during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTabCapture?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is pressed while holding the
	 * 'Shift' key.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTabBack?: TabBackEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is pressed while holding the
	 * 'Shift' key during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTabBackCapture?: TabBackEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTabUp?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTabUpCapture?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released while holding the
	 * 'Shift' key.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTabBackUp?: TabBackEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released while holding the
	 * 'Shift' key during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onPressTabBackUpCapture?: TabBackEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Tabbable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onPressTab()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onPressTabCapture()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onPressTabBack()` is optional and must be a valid {@link TabBackEventHandler} if provided.
 *   - `value.onPressTabBackCapture()` is optional and must be a valid {@link TabBackEventHandler} if provided.
 *   - `value.onPressTabUp()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onPressTabUpCapture()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onPressTabBackUp()` is optional and must be a valid {@link TabBackEventHandler} if provided.
 *   - `value.onPressTabBackUpCapture()` is optional and must be a valid {@link TabBackEventHandler} if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Tabbable}.
 */
export const isTabbable = <T = Element>(value: unknown): value is Tabbable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onPressTab()
	 */
	('onPressTab' in value ? isTabEventHandler(value.onPressTab) : true) &&
	/**
	 * value.onPressTabCapture()
	 */
	('onPressTabCapture' in value ? isTabEventHandler(value.onPressTabCapture) : true) &&
	/**
	 * value.onPressTabBack()
	 */
	('onPressTabBack' in value ? isTabBackEventHandler(value.onPressTabBack) : true) &&
	/**
	 * value.onPressTabBackCapture()
	 */
	('onPressTabBackCapture' in value
		? isTabBackEventHandler(value.onPressTabBackCapture)
		: true) &&
	/**
	 * value.onPressTabUp()
	 */
	('onPressTabUp' in value ? isTabEventHandler(value.onPressTabUp) : true) &&
	/**
	 * value.onPressTabUpCapture()
	 */
	('onPressTabUpCapture' in value
		? isTabEventHandler(value.onPressTabUpCapture)
		: true) &&
	/**
	 * value.onPressTabBackUp()
	 */
	('onPressTabBackUp' in value ? isTabBackEventHandler(value.onPressTabBackUp) : true) &&
	/**
	 * value.onPressTabBackUpCapture()
	 */
	('onPressTabBackUpCapture' in value
		? isTabBackEventHandler(value.onPressTabBackUpCapture)
		: true);

export default Tabbable;
