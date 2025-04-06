import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { Pointerable } from '@/utils/types/props/Pointerable';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when a user right-clicks the component.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends AuxClickable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ onAuxClick = noop, text }) => (
 *   <div onAuxClick={onAuxClick}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export type AuxClickable<T = Element> = Pick<
	Pointerable<T>,
	'onAuxClick' | 'onAuxClickCapture'
>;

/**
 * Checks that an `unknown` value is {@link AuxClickable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.onAuxClick()` is optional and must be a function if provided.
 *   - `value.onAuxClickCapture()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link AuxClickable}.
 */
export const isAuxClickable = <T = Element>(
	value: unknown,
): value is AuxClickable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.onAuxClick()
	 */
	('onAuxClick' in value ? isFunction(value.onAuxClick) : true) &&
	/**
	 * value.onAuxClickCapture()
	 */
	('onAuxClickCapture' in value ? isFunction(value.onAuxClickCapture) : true);
