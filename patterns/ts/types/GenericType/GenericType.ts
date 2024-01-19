import { isObject } from '@ge/type-guards';

/**
 * @TODO
 *
 * @typeParam `T` - @TODO
 *
 * @typeParam `U` - @TODO
 */
export interface GenericType<T, U = unknown> {
  /**
   * [Optional] @TODO
   */
  readonly optional?: T | null;

  /**
   * @TODO
   */
  readonly required: T;

  /**
   * @TODO
   */
  readonly method: () => U;
}

/**
 * Checks that an `unknown` value is a {@link GenericType}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.optional` is optional and must be a valid implementation of type `T` if provided.
 *   - `value.required` is required and must be a valid implementation of type `T`.
 *   - `value.method()` is required and must be a function which returns a valid implementation of type `U`.
 *
 * @typeParam `T` - @TODO
 *
 * @typeParam `U` - @TODO
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link GenericType}.
 */
export const isGenericType = <T, U = unknown>(
  value: unknown,
  isT = (_value: unknown): _value is T => true,
  isU = (_value: unknown): _value is U => true
): value is GenericType<T, U> => {
  return (
    /**
     * value
     */
    isObject(value) &&
    /**
     * value.optional
     */
    ('optional' in value ? isT(value.optional) || value.optional === null : true) &&
    /**
     * value.required
     */
    'required' in value &&
    isT(value.required) &&
    /**
     * value.method()
     */
    'method' in value &&
    typeof value.method === 'function' &&
    isU(value.method())
  );
};