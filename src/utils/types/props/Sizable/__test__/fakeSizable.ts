import { faker } from '@faker-js/faker';
import { randomSize } from '@app/theme/enums/Sizes/__test__';

export const fakeSizable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const sizable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		sizable.size = randomSize;
	});

	return {
		...sizable,
		...overrideProps,
	};
};
