import { FormField } from '../../types/FormField';

export const DEFAULT_FIELD: FormField<unknown> = Object.freeze({
	disabled: false,
	error: null,
	initialValue: undefined,
	required: false,
	value: '',
	format: (value: string) => value,
	validateOnBlur: () => true,
	validateOnChange: () => true,
	validateOnFocus: () => true,
	validateOnSubmit: () => true,
});
