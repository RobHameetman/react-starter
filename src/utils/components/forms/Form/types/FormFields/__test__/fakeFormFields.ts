import { FormFields } from '../FormFields';
import { fakeFormField } from '../../FormField/__test__';

export const fakeFormFields = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		field1: fakeFormField(),
		field2: fakeFormField(),
		...overrideProps,
	} as FormFields);
