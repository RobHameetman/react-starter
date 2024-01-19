import { noop } from '@app/utils/functions/misc/noop';
import { createContext } from 'react';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';
import { FormModes } from '../../enums';
import { CachedForm, FormField, FormFields, isCachedForm } from '../../types';

/**
 * The {@link FormContext} is a shared state for the `<Form />` compound
 * component. Each `<Form />` wraps its contents in a `<FormProvider />`; child
 * components can access this state with the `useForm()` hook.
 */
export interface FormContext extends CachedForm {
	/**
	 * Set to `false` to make the form read-only.
	 */
	readonly editable: boolean;

	/**
	 * Cache the current form in `LocalStorage`.
	 */
	readonly cacheForm: () => void;

	/**
	 * Retrieve the current form cached in `LocalStorage`.
	 */
	readonly getCachedForm: () => CachedForm | undefined;

	/**
	 * Set the initial state of the field model.
	 */
	readonly initField: (
		name: string,
		_field?: Partial<FormField<unknown>>,
	) => void;

	/**
	 * Restore form field values to their initial value.
	 */
	readonly resetForm: () => void;

	/**
	 * Set the value for a specific field in the form.
	 */
	readonly setFieldValue: (name: string, value: unknown) => FormFields;

	/**
	 * Sets the form in "read" mode, such that the values are not changeable.
	 */
	readonly setModeRead: () => void;

	/**
	 * Sets the form in "write" mode, such that the values are changeable.
	 */
	readonly setModeWrite: () => void;

	/**
	 * Validate the value for a specific field in the form.
	 */
	readonly validateField: (
		fieldName: string,
		field: FormFields,
		type: string,
	) => void;
}

/**
 * Initial {@link FormContext} state.
 */
export const INITIAL_FORM_CONTEXT: FormContext = Object.freeze({
	/**
	 * Default value of {@link FormContext.editable}.
	 */
	editable: true,

	/**
	 * Default value of {@link FormContext.fields}.
	 */
	fields: {},

	/**
	 * Default value of {@link FormContext.mode}.
	 */
	mode: FormModes.Write,

	/**
	 * Default value of {@link FormContext.cacheForm}.
	 */
	cacheForm: noop,

	/**
	 * Default value of {@link FormContext.getCachedForm}.
	 */
	getCachedForm: () => undefined,

	/**
	 * Default value of {@link FormContext.initField}().
	 */
	initField: noop,

	/**
	 * Default value of {@link FormContext.resetForm}().
	 */
	resetForm: noop,

	/**
	 * Default value of {@link FormContext.setFieldValue}().
	 */
	setFieldValue: () => ({}),

	/**
	 * Default value of {@link FormContext.setModeRead}().
	 */
	setModeRead: noop,

	/**
	 * Default value of {@link FormContext.setModeWrite}().
	 */
	setModeWrite: noop,

	/**
	 * Default value of {@link FormContext.validateField}().
	 */
	validateField: noop,
});

/**
 * Creates our `FormContext` as accessible React components.
 */
export const FormContext = createContext<FormContext>({
	...INITIAL_FORM_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link FormContext}.
 *
 * Requirements:
 *   - `value` must be a valid {@link CachedForm}.
 *   - `value.editable` is required and must be a boolean.
 *   - `value.cacheForm()` is required and must be a function.
 *   - `value.getCachedForm()` is required and must be a function.
 *   - `value.initField()` is required and must be a function.
 *   - `value.resetForm()` is required and must be a function.
 *   - `value.setFieldValue()` is required and must be a function.
 *   - `value.setModeRead()` is required and must be a function.
 *   - `value.setModeWrite()` is required and must be a function.
 *   - `value.validateField()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FormContext}.
 */
export const isFormContext = (value: unknown): value is FormContext =>
	/**
	 * value
	 */
	isCachedForm(value) &&
	/**
	 * value.editable
	 */
	'editable' in value &&
	isBoolean(value.editable) &&
	/**
	 * value.cacheForm()
	 */
	'cacheForm' in value &&
	isFunction(value.cacheForm) &&
	/**
	 * value.getCachedForm()
	 */
	'getCachedForm' in value &&
	isFunction(value.getCachedForm) &&
	/**
	 * value.initField()
	 */
	'initField' in value &&
	isFunction(value.initField) &&
	/**
	 * value.resetForm()
	 */
	'resetForm' in value &&
	isFunction(value.resetForm) &&
	/**
	 * value.setFieldValue()
	 */
	'setFieldValue' in value &&
	isFunction(value.setFieldValue) &&
	/**
	 * value.setModeRead()
	 */
	'setModeRead' in value &&
	isFunction(value.setModeRead) &&
	/**
	 * value.setModeWrite()
	 */
	'setModeWrite' in value &&
	isFunction(value.setModeWrite) &&
	/**
	 * value.validateField()
	 */
	'validateField' in value &&
	isFunction(value.validateField);
