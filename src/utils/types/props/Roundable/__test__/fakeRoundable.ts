import { faker } from '@faker-js/faker';

export const fakeRoundable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const roundable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		roundable.rounded = faker.datatype.boolean();
	});

	return {
		...roundable,
		...overrideProps,
	};
};
