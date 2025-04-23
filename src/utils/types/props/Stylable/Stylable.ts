import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A compositional prop type for React components that can be styled with CSS.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Stylable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ className, text }) => (
 *   <div className={className}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Stylable {
	/**
	 * [Optional] The class name(s) to apply to the component.
	 * @defaultValue - `''`
	 */
	readonly className?: string;
}

/**
 * Checks that an `unknown` value is {@link Stylable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.className` is optional and must be a string if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Stylable}.
 */
export const isStylable = (value: unknown): value is Stylable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.className
	 */
	('className' in value ? isString(value.className) : true);

export default Stylable;
