import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A compositional prop type for React components that have a name. This name
 * should be passed to the root node in the underlying DOM.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Nameable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ name = 'my-component', text }) => (
 *   <div name={name}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Nameable {
	/**
	 * [Optional] The component name.
	 */
	readonly name?: string;
}

/**
 * Checks that an `unknown` value is {@link Nameable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.name` is optional and must be a string if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Nameable}.
 */
export const isNameable = (value: unknown): value is Nameable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.name
	 */
	('name' in value ? isString(value.name) : true);

export default Nameable;
