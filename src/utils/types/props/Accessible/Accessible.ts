import { isNumber } from '@/utils/functions/check/js/core/isNumber';
import { isObject } from '@/utils/functions/check/js/core/isObject';

/**
 * A compositional prop type for React components with a common set of
 * accessibility props.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Accessible {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ tabIndex = 0, text }) => (
 *   <div tabIndex={tabIndex < 0 ? -1 : tabIndex}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Accessible {
	/**
	 * [Optional] Set to `-1` to forcibly exclude the component from the tab order.
	 * @defaultValue - `0`
	 */
	readonly tabIndex?: number;
}

/**
 * Checks that an `unknown` value is {@link Accessible}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.tabIndex` is optional and must be a number if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Accessible}.
 */
export const isAccessible = (value: unknown): value is Accessible =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.tabIndex
	 */
	('tabIndex' in value ? isNumber(value.tabIndex) : true);

export default Accessible;
