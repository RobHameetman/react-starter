import { faker } from '@faker-js/faker';
import { fakeCachedForm } from '../../../types/CachedForm/__test__';

export const fakeFormContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	...fakeCachedForm(),
	editable: faker.datatype.boolean(),
	cacheForm: jest.fn(),
	getCachedForm: jest.fn(),
	initField: jest.fn(),
	resetForm: jest.fn(),
	setFieldValue: jest.fn(),
	setModeRead: jest.fn(),
	setModeWrite: jest.fn(),
	validateField: jest.fn(),
	...overrideProps,
});
