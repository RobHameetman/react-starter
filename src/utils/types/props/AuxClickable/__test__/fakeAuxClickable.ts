import { faker } from '@faker-js/faker';

export const fakeAuxClickable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const auxClickable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		auxClickable.onAuxClick = jest.fn();
	});

	faker.helpers.maybe(() => {
		auxClickable.onAuxClickCapture = jest.fn();
	});

	return {
		...auxClickable,
		...overrideProps,
	};
};
