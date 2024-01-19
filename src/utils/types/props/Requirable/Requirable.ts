import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component's value changes.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Requirable {
 *   readonly label: string;
 *   readonly value: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ label, required = false, value }) => (
 *   <>
 *     <label for="my-input">{label}</label>
 *     <input name="my-input" value={value} required={required} />
 *   </>
 * );
 * ```
 */
export interface Requirable {
	/**
	 * [Optional] Whether or not the component is required to have a value.
	 * @defaultValue - `false`
	 */
	readonly required?: boolean;
}

/**
 * Checks that an `unknown` value is {@link Requirable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.required` is optional and must be a boolean if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Requirable}.
 */
export const isRequirable = (value: unknown): value is Requirable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.required
	 */
	('required' in value ? isBoolean(value.required) : true);
