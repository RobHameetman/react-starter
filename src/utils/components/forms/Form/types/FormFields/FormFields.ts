import { isObject } from '@/utils/functions/check/js/core/isObject';
import { FormField, isFormField } from '../FormField';

/**
 * A collection of models for each form field.
 */
export type FormFields<T = unknown> = Record<string, FormField<T>>;

/**
 * Checks that an `unknown` value is a {@link FormFields}.
 *
 * Requirements:
 *   - `value` must be an object with a string index of `FormField` values.
 *
 * @typeParam T - The type of data in the `value` property.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FormFields}.
 */
export const isFormFields = <T = unknown>(
	value: unknown,
): value is FormField<T> =>
	isObject(value) && Object.values(value).every(isFormField);
