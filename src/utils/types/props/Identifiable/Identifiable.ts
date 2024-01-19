import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A compositional prop type for React components that have an ID.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Identifiable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ id = 'my-component', text }) => (
 *   <div id={id}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Identifiable {
	/**
	 * [Optional] The component ID. This value must be unique to the entire DOM.
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
	 */
	readonly id?: string;
}

/**
 * Checks that an `unknown` value is {@link Identifiable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.id` is optional and must be a string if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Identifiable}.
 */
export const isIdentifiable = (value: unknown): value is Identifiable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.id
	 */
	('id' in value ? isString(value.id) : true);
