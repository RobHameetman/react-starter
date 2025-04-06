import { FocusEventHandler } from 'react';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component gains or loses focus.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Focusable<HTMLDivElement> {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onFocus = noop, text }) => (
 *   <div onFocus={onFocus}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Focusable<T = Element> {
	/**
	 * [Optional] Handle an event when the component loses focus.
	 * @defaultValue - A no-op function.
	 */
	readonly onBlur?: FocusEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component loses focus during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onBlurCapture?: FocusEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component gains focus.
	 * @defaultValue - A no-op function.
	 */
	readonly onFocus?: FocusEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component gains focus during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onFocusCapture?: FocusEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component gains visible focus.
	 * @defaultValue - A no-op function.
	 */
	readonly onFocusVisible?: FocusEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component gains visible focus during
	 * capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onFocusVisibleCapture?: FocusEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Focusable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onBlur()` is optional and must be a function if provided.
 *   - `value.onBlurCapture()` is optional and must be a function if provided.
 *   - `value.onFocus()` is optional and must be a function if provided.
 *   - `value.onFocusCapture()` is optional and must be a function if provided.
 *   - `value.onFocusVisible()` is optional and must be a function if provided.
 *   - `value.onFocusVisibleCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Focusable}.
 */
export const isFocusable = <T = Element>(
	value: unknown,
): value is Focusable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onBlur()
	 */
	('onBlur' in value ? isFunction(value.onBlur) : true) &&
	/**
	 * value.onBlurCapture()
	 */
	('onBlurCapture' in value ? isFunction(value.onBlurCapture) : true) &&
	/**
	 * value.onFocus()
	 */
	('onFocus' in value ? isFunction(value.onFocus) : true) &&
	/**
	 * value.onFocusCapture()
	 */
	('onFocusCapture' in value ? isFunction(value.onFocusCapture) : true) &&
	/**
	 * value.onFocusVisible()
	 */
	('onFocusVisible' in value ? isFunction(value.onFocusVisible) : true) &&
	/**
	 * value.onFocusVisibleCapture()
	 */
	('onFocusVisibleCapture' in value
		? isFunction(value.onFocusVisibleCapture)
		: true);
