import { isObject } from '@ge/type-guards';
import type { Branded } from '../../types';

/**
 * @TODO
 */
export interface NewBrandedType extends Branded<'NewBrandedType'> {
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
 * Checks that an `unknown` value is a {@link NewBrandedType}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.__type` is required for tests and must be the string "NewBrandedType".
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NewBrandedType}.
 */
export const isNewBrandedType = (value: unknown): value is NewBrandedType => {
  return (
    /**
     * value
     */
    isObject(value) &&
    /**
     * value.__type
     */
    '__type' in value &&
    value.__type === 'NewBrandedType'
  );
};
