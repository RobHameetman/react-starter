import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';
import { FormFields, isFormFields } from '../FormFields';
import { FormModes, isFormModes } from '../../enums';

/**
 * A model for each form field used in local storage. This object is stripped of
 * any methods or irrelevant state before being cached.
 */
export interface CachedForm {
	/**
	 * A collection of models for each field.
	 */
	readonly fields: FormFields;

	/**
	 * If editable, controls whether the form is readable or writable.
	 */
	readonly mode: FormModes;
}

/**
 * Checks that an `unknown` value is a {@link CachedForm}.
 *
 * Requirements:
 *   - `value` must be a non-empty {@link object}.
 *   - `value.fields` is required and must a valid set of {@link FormFields}.
 *   - `value.mode` is required and must a valid {@link FormModes} value.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CachedForm}.
 */
export const isCachedForm = (value: unknown): value is CachedForm =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.fields
	 */
	'fields' in value &&
	isFormFields(value.fields) &&
	/**
	 * value.mode
	 */
	'mode' in value &&
	isFormModes(value.mode);
