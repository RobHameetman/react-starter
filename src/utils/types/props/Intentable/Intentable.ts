import { Intents, Intent, isIntent } from '@/theme/enums/Intents';
import { isObject } from '@/utils/functions/check/js/core/isObject';

/**
 * A compositional prop type for React components that may have a specific intent
 * depending on how they're interacted with.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Intentable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({
 *   intent = Intents.success,
 *   text,
 * }) => (
 *   <div className={`${styles.myComponent}${styles[intent]}`}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Intentable {
	/**
	 * [Optional] The component's interaction intent.
	 * @defaultValue - {@link Indent.none}
	 */
	readonly intent?: Intents | Intent;
}

/**
 * Checks that an `unknown` value is {@link Intentable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.intent` is optional and must be a valid {@link Intent} if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Intentable}.
 */
export const isIntentable = (value: unknown): value is Intentable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.intent
	 */
	('intent' in value ? isIntent(value.intent) : true);
