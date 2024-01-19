import { faker } from '@faker-js/faker';

export const fakeAnimatable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const animatable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		animatable.animated = faker.datatype.boolean();
	});

	return {
		...animatable,
		...overrideProps,
	};
};
