import { faker } from '@faker-js/faker';

export const fakeKeyboardable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const keyboardable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		keyboardable.onKeyDown = jest.fn();
	});

	faker.helpers.maybe(() => {
		keyboardable.onKeyDownCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		keyboardable.onKeyUp = jest.fn();
	});

	faker.helpers.maybe(() => {
		keyboardable.onKeyUpCapture = jest.fn();
	});

	return {
		...keyboardable,
		...overrideProps,
	};
};
