import { isBoolean } from '@/utils/functions/check/js/core/isBoolean';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to stretch the
 * component to fill the width of its container.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Expansible {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ text, fullWidth = false }) => (
 *   <div style={{ width: fullWidth ? '100%' : 'auto' }}>
 *     {text}
 *   </div>
 * );
 * ```
 */
export interface Expansible {
	/**
	 * [Optional] Whether or not the component should fill the width of its
	 * container.
	 * @defaultValue - `false`
	 */
	readonly fullWidth?: boolean;
}

/**
 * Checks that an `unknown` value is {@link Expansible}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.fullWidth` is optional and must be a boolean if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Expansible}.
 */
export const isExpansible = (value: unknown): value is Expansible =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.fullWidth
	 */
	('fullWidth' in value ? isBoolean(value.fullWidth) : true);

export default Expansible;
