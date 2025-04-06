import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isBoolean } from '@/utils/functions/check/js/core/isBoolean';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A compositional prop type for React components that allow you to trigger an
 * action when the component's value changes.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Loadable<HTMLInputElement> {
 *   readonly label: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ label, value, onChange = noop }) => (
 *   <>
 *     <label for="my-input">{label}</label>
 *     <input name="my-input" value={value} onChange={onChange} />
 *   </>
 * );
 * ```
 */
export interface Loadable<T = Element> {
	/**
	 * [Optional] Whether or not the component is in a loading state.
	 * @defaultValue - `false`
	 */
	readonly loading?: boolean;

	/**
	 * [Optional] Handle an event when the component is loaded.
	 * @defaultValue - A no-op function.
	 */
	readonly onLoad?: () => void;
}

/**
 * Checks that an `unknown` value is {@link Loadable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.loading` is optional and must be a boolean if provided.
 *   - `value.onError()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Loadable}.
 */
export const isLoadable = <T = Element>(value: unknown): value is Loadable<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.loading
	 */
	('loading' in value ? isBoolean(value.loading) : true) &&
	/**
	 * value.onError()
	 */
	('onError' in value ? isFunction(value.onError) : true);
