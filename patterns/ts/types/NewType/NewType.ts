import { isObject, isString } from '@ge/type-guards';

/**
 * @TODO
 */
export interface NewType {
  /**
   * [Optional] @TODO
   */
  readonly optional?: string;

  /**
   * @TODO
   */
  readonly required: string;

  /**
   * @TODO
   */
  readonly method: () => string;
}

/**
 * Checks that an `unknown` value is a {@link NewType}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.optional` is optional and must be a string if provided.
 *   - `value.required` is required and must be a string.
 *   - `value.method()` is required and must be a function which returns a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NewType}.
 */
export const isNewType = (value: unknown): value is NewType => {
  return (
    /**
     * value
     */
    isObject(value) &&
    /**
     * value.optional
     */
    ('optional' in value ? isString(value.optional) : true) &&
    /**
     * value.required
     */
    'required' in value &&
    isString(value.required) &&
    /**
     * value.method()
     */
    'method' in value &&
    typeof value.method === 'function' &&
    isString(value.method())
  );
};
