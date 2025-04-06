import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isNumber } from '@/utils/functions/check/js/core/isNumber';

/**
 * A compositional prop type for React components that allow you to position the
 * component within its parent. These are typically used for animation
 * components.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Positionable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ text, x = 0, y = 0 }) => (
 *   <div style={{ top: `${y}px`, left: `${x}px` }}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Positionable {
	/**
	 * [Optional] Handle an event when an element captures a pointer.
	 * @defaultValue - `0`
	 */
	readonly x?: number;

	/**
	 * [Optional] Handle an event when an element captures a pointer during
	 * capturing.
	 * @defaultValue - `0`
	 */
	readonly y?: number;
}

/**
 * Checks that an `unknown` value is {@link Positionable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.x` is optional and must be a number if provided.
 *   - `value.y` is optional and must be a number if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Positionable}.
 */
export const isPositionable = (value: unknown): value is Positionable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.x
	 */
	('x' in value ? isNumber(value.x) : true) &&
	/**
	 * value.y
	 */
	('y' in value ? isNumber(value.y) : true);
