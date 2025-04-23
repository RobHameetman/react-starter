import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A compositional prop type for React components that have a label.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Labelable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ label = '', text }) => (
 *   <div>
 * 	   <label htmlFor="my-checkbox">{label}</label>
 * 	   <input type="checkbox" id="my-checkbox">{text}</input>
 *   </div>
 * );
 * ```
 */
export interface Labelable {
	/**
	 * [Optional] The component label.
	 */
	readonly label?: string;
}

/**
 * Checks that an `unknown` value is {@link Labelable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.name` is optional and must be a string if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Labelable}.
 */
export const isLabelable = (value: unknown): value is Labelable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.label
	 */
	('label' in value ? isString(value.label) : true);

export default Labelable;
