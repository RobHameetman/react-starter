import { faker } from '@faker-js/faker';

export const fakeRequirable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const requirable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		requirable.required = faker.datatype.boolean();
	});

	return {
		...requirable,
		...overrideProps,
	};
};
