import { isBoolean } from '@/utils/functions/check/js/core/isBoolean';
import { isObject } from '@/utils/functions/check/js/core/isObject';

/**
 * A compositional prop type for React components that have a disabled state.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Disablable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ disabled = false, text }) => (
 *   <div className={disabled ? styles.disabled : ''} disabled={disabled}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Disablable {
	/**
	 * [Optional] Whether or not the component is disabled.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 *
	 * @returns
	 */
	readonly onDisable?: () => void;
}

/**
 * Checks that an `unknown` value is {@link Disablable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.disabled` is optional and must be a boolean if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Disablable}.
 */
export const isDisablable = (value: unknown): value is Disablable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.disabled
	 */
	('disabled' in value ? isBoolean(value.disabled) : true);

export default Disablable;
