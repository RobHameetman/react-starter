import { isBoolean } from '@/utils/functions/check/js/core/isBoolean';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';
import { FormFields } from '../FormFields';

export type FormFieldValidationFn<T> = (
	value: T,
	fields: FormFields,
) => boolean;

/**
 * A model for each form field.
 */
export interface FormField<T = unknown> {
	/**
	 * Determines whether or not the field is disabled.
	 */
	readonly disabled: boolean;

	/**
	 * The error message displayed upon validation failure.
	 */
	readonly error: string | null;

	/**
	 * The initial value as supplied by a control prop, used to reset the value
	 * if the user cancels editability.
	 */
	readonly initialValue: T | undefined;

	/**
	 * Determines whether or not the field is required.
	 */
	readonly required: boolean;

	/**
	 * The current value of the field model.
	 */
	readonly value: T;

	/**
	 * [Optional] A formatting function for string values.
	 */
	readonly format?: (value: string) => string;

	/**
	 * [Optional] A validation function for determining error states on
	 * blur/focusout.
	 */
	readonly validateOnBlur?: FormFieldValidationFn<T>;

	/**
	 * [Optional] A validation function for determining error states on change.
	 */
	readonly validateOnChange?: FormFieldValidationFn<T>;

	/**
	 * [Optional] A validation function for determining error states on
	 * focus/focusin.
	 */
	readonly validateOnFocus?: FormFieldValidationFn<T>;

	/**
	 * [Optional] A validation function for determining error states on submit.
	 */
	readonly validateOnSubmit?: FormFieldValidationFn<T>;
}

/**
 * Checks that an `unknown` value is a `FormField`.
 *
 * Requirements:
 *   - `value` must be an `object`.
 *   - `value.disabled` is required and must be a boolean.
 *   - `value.error` is required and must be a non-emptry string or `null`.
 *   - `value.initialValue` is required.
 *   - `value.required` is required and must be a boolean.
 *   - `value.value` is required.
 *   - `value.format()` is optional and must be a function if provided.
 *   - `value.validateOnBlur()` is optional and must be a function if provided.
 *   - `value.validateOnChange()` is optional and must be a function if provided.
 *   - `value.validateOnFocus()` is optional and must be a function if provided.
 *   - `value.validateOnSubmit()` is optional and must be a function if provided.
 *
 * @typeParam T - The type of data in the `value` property.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an `FormField`.
 */
export const isFormField = <T = unknown>(
	value: unknown,
): value is FormField<T> =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.disabled
	 */
	'disabled' in value &&
	isBoolean(value.disabled) &&
	/**
	 * value.error
	 */
	'error' in value &&
	(isNonEmptyString(value.error) || value.error === null) &&
	/**
	 * value.initialValue
	 */
	'initialValue' in value &&
	/**
	 * value.required
	 */
	'required' in value &&
	isBoolean(value.required) &&
	/**
	 * value.value
	 */
	'value' in value &&
	/**
	 * value.format()
	 */
	('format' in value ? isFunction(value.format) : true) &&
	/**
	 * value.validateOnBlur()
	 */
	('validateOnBlur' in value ? isFunction(value.validateOnBlur) : true) &&
	/**
	 * value.validateOnChange()
	 */
	('validateOnChange' in value ? isFunction(value.validateOnChange) : true) &&
	/**
	 * value.validateOnFocus()
	 */
	('validateOnFocus' in value ? isFunction(value.validateOnFocus) : true) &&
	/**
	 * value.validateOnSubmit()
	 */
	('validateOnSubmit' in value ? isFunction(value.validateOnSubmit) : true);
