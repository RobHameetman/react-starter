import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A compositional prop type for React components that can be styled with CSS.
 *
 * @example
 * ```TSX
 * export interface MyComponentProps extends Testable {
 *   readonly text: string;
 * }
 *
 * export const MyComponent: FC<MyComponentProps> = ({ testId = 'my-component', text }) => (
 *   <div data-test-id={testId}>
 * 	   {text}
 *   </div>
 * );
 * ```
 */
export interface Testable {
	/**
	 * [Optional] A string that can be used to identify the component in a test.
	 */
	readonly testId?: string;
}

/**
 * Checks that an `unknown` value is {@link Testable}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.testId` is optional and must be a string if provided.
 *
 * @param value - An `unknown` value. Expected to be a set of props provided to
 * a React component.
 *
 * @returns The determination that `value` is or is not {@link Testable}.
 */
export const isTestable = (value: unknown): value is Testable =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.testId
	 */
	('testId' in value ? isString(value.testId) : true);

export default Testable;
