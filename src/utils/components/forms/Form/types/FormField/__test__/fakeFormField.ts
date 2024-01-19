import { faker } from '@faker-js/faker';
import { FormField } from '../FormField';

export const fakeFormField = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		disabled: faker.datatype.boolean(),
		error: faker.string.sample(),
		initialValue: '',
		required: faker.datatype.boolean(),
		value: faker.string.sample(),
		format: jest.fn((value: string) => value),
		validateOnBlur: jest.fn((value: string) => typeof value === 'string'),
		validateOnChange: jest.fn((value: string) => typeof value === 'string'),
		validateOnFocus: jest.fn((value: string) => typeof value === 'string'),
		validateOnSubmit: jest.fn((value: string) => typeof value === 'string'),
		...overrideProps,
	} as FormField);
