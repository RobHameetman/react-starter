import { FormEventHandler } from 'react';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component's value changes.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Changeable<HTMLInputElement> {
 *   readonly label: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ label, value, onChange = noop }) => (
 *   <>
 *     <label for="my-input">{label}</label>
 *     <input name="my-input" value={value} onChange={onChange} />
 *   </>
 * );
 * ```
 */
export interface Changeable<T = Element> {
	/**
	 * [Optional] Handle an event when the component loses focus.
	 * @defaultValue - A no-op function.
	 */
	readonly onChange?: FormEventHandler<T>;

	/**
	 * [Optional] Handle an event when the component loses focus during capturing.
	 * @defaultValue - A no-op function.
	 */
	readonly onChangeCapture?: FormEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Changeable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onChange()` is optional and must be a function if provided.
 *   - `value.onChangeCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Changeable}.
 */
export const isChangeable = <T = Element>(
	value: unknown,
): value is Changeable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onChange()
	 */
	('onChange' in value ? isFunction(value.onChange) : true) &&
	/**
	 * value.onChangeCapture()
	 */
	('onChangeCapture' in value ? isFunction(value.onChangeCapture) : true);
