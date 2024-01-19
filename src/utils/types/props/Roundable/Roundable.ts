import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';

/**
 * A compositional prop type for React components that may or may not have
 * rounded edges.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Roundable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ rounded = false, text }) => (
 *   <div className={rounded ? styles.rounded : ''}>
 *     {text}
 *   </div>
 * );
 * ```
 */
export interface Roundable {
	/**
	 * [Optional] Whether or not the component has round edges.
	 * @defaultValue - `false`
	 */
	readonly rounded?: boolean;
}

/**
 * Checks that an `unknown` value is {@link Roundable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.rounded` is optional and must be a boolean if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Roundable}.
 */
export const isRoundable = (value: unknown): value is Roundable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.rounded
	 */
	('rounded' in value ? isBoolean(value.rounded) : true);
