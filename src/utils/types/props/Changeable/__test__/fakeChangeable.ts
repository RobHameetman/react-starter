import { faker } from '@faker-js/faker';

export const fakeChangeable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const changeable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		changeable.onChange = jest.fn();
	});

	faker.helpers.maybe(() => {
		changeable.onChangeCapture = jest.fn();
	});

	return {
		...changeable,
		...overrideProps,
	};
};
