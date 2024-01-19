import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';

/**
 * A compositional prop type for React components that may or may not be
 * animated.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Animatable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ animated = true, text }) => {
 *   const css = useAnimatedStyles({ disabled: !animated });
 *
 *   return (
 *     <div className={css}>
 *       {text}
 *     </div>
 *   );
 * };
 * ```
 */
export interface Animatable {
	/**
	 * [Optional] Whether or not the component should be animated.
	 * @defaultValue - `true`
	 */
	readonly animated?: boolean;
}

/**
 * Checks that an `unknown` value is {@link Animatable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.animated` is optional and must be a boolean if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Animatable}.
 */
export const isAnimatable = (value: unknown): value is Animatable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.animated
	 */
	('animated' in value ? isBoolean(value.animated) : true);
