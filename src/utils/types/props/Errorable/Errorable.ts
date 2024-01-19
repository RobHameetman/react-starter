import { ReactEventHandler } from 'react';
import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to handle an
 * error state and trigger an action when this state occurs.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Errorable<HTMLInputElement> {
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
export interface Errorable<T = Error> {
	/**
	 * [Optional] Whether or not the component is in an error state.
	 * @defaultValue - `false`
	 */
	readonly error?: boolean;

	/**
	 * [Optional] Handle an event when the component receives an error.
	 * @defaultValue - A no-op function.
	 */
	readonly onError?: ReactEventHandler<T>;
}

/**
 * Checks that an `unknown` value is {@link Errorable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.error` is optional and must be a boolean if provided.
 *   - `value.onError()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Errorable}.
 */
export const isErrorable = <T = Element>(
	value: unknown,
): value is Errorable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.error
	 */
	('error' in value ? isBoolean(value.error) : true) &&
	/**
	 * value.onError()
	 */
	('onError' in value ? isFunction(value.onError) : true);
