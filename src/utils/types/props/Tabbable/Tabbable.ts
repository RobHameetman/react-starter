import { isObject } from '@app/utils/functions/check/js/core/isObject';
import {
	TabEventHandler,
	isTabEventHandler,
} from '@app/utils/types/handlers/TabEventHandler';
import {
	TabBackEventHandler,
	isTabBackEventHandler,
} from '@app/utils/types/handlers/TabBackEventHandler';

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
 * export const MyComponent: FC<MyComponentProps> = ({ onTab = noop, text }) => (
 *   <div onKeyDown={onTab}>
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
	readonly onTab?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is pressed during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onTabCapture?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is pressed while holding the
	 * 'Shift' key.
	 * @defaultValue - A no-op function.
	 */
	readonly onTabBack?: TabBackEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is pressed while holding the
	 * 'Shift' key during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onTabBackCapture?: TabBackEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released.
	 * @defaultValue - A no-op function.
	 */
	readonly onTabUp?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onTabUpCapture?: TabEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released while holding the
	 * 'Shift' key.
	 * @defaultValue - A no-op function.
	 */
	readonly onTabBackUp?: TabBackEventHandler<T>;

	/**
	 * [Optional] Handle an event when the 'Tab' key is released while holding the
	 * 'Shift' key during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onTabBackUpCapture?: TabBackEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Tabbable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onTab()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onTabCapture()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onTabBack()` is optional and must be a valid {@link TabBackEventHandler} if provided.
 *   - `value.onTabBackCapture()` is optional and must be a valid {@link TabBackEventHandler} if provided.
 *   - `value.onTabUp()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onTabUpCapture()` is optional and must be a valid {@link TabEventHandler} if provided.
 *   - `value.onTabBackUp()` is optional and must be a valid {@link TabBackEventHandler} if provided.
 *   - `value.onTabBackUpCapture()` is optional and must be a valid {@link TabBackEventHandler} if provided.
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
	 * value.onTab()
	 */
	('onTab' in value ? isTabEventHandler(value.onTab) : true) &&
	/**
	 * value.onTabCapture()
	 */
	('onTabCapture' in value ? isTabEventHandler(value.onTabCapture) : true) &&
	/**
	 * value.onTabBack()
	 */
	('onTabBack' in value ? isTabBackEventHandler(value.onTabBack) : true) &&
	/**
	 * value.onTabBackCapture()
	 */
	('onTabBackCapture' in value
		? isTabBackEventHandler(value.onTabBackCapture)
		: true) &&
	/**
	 * value.onTabUp()
	 */
	('onTabUp' in value ? isTabEventHandler(value.onTabUp) : true) &&
	/**
	 * value.onTabUpCapture()
	 */
	('onTabUpCapture' in value
		? isTabEventHandler(value.onTabUpCapture)
		: true) &&
	/**
	 * value.onTabBackUp()
	 */
	('onTabBackUp' in value ? isTabBackEventHandler(value.onTabBackUp) : true) &&
	/**
	 * value.onTabBackUpCapture()
	 */
	('onTabBackUpCapture' in value
		? isTabBackEventHandler(value.onTabBackUpCapture)
		: true);
