import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A compositional prop type for React components that have a name. This name
 * should be passed to the root node in the underlying DOM.
 *
 * @typeParam T - [Optional] The type of value. Defaults to type `string`.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Valuable {
 *   readonly placeholder: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ placeholder = 'Enter text...', value }) => (
 *   <input placeholder={placeholder} value={value} />
 * );
 * ```
 */
export interface Valuable<T = string> {
	/**
	 * [Optional] A control prop for the component's current value.
	 */
	readonly value?: T;
}

/**
 * Checks that an `unknown` value is {@link Valuable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.value` is optional and must be of type `T` if provided.
 *
 * @typeParam T - [Optional] The type of value. Defaults to type `string`.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to a React component.
 * @param isT() - [Optional] An additional type-guard to check whether the values in the object are of type `T`.
 *
 * @returns The determination that `value` is or is not {@link Valuable}.
 */
export const isValuable = <T = string>(
	value: unknown,
	isT = isString,
): value is Valuable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.value
	 */
	('value' in value ? isT(value.value) : true);
