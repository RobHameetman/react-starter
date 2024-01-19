import { Size, isSize } from '@app/theme/enums/Sizes';
import { isObject } from '@app/utils/functions/check/js/core/isObject';

/**
 * A compositional prop type for React components that have an ID.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Sizable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ size = Sizes.md, text }) => (
 *   <div className={`${styles.myComponent}${styles[size]}`}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Sizable {
	/**
	 * [Optional] The component's size.
	 * @defaultValue - {@link Size.Medium}
	 */
	readonly size?: Size;
}

/**
 * Checks that an `unknown` value is {@link Sizable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.size` is optional and must be a valid {@link Size} if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Sizable}.
 */
export const isSizable = (value: unknown): value is Sizable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.size
	 */
	('size' in value ? isSize(value.size) : true);
