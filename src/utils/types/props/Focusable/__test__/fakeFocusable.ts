import { faker } from '@faker-js/faker';

export const fakeFocusable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const focusable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		focusable.onBlur = jest.fn();
	});

	faker.helpers.maybe(() => {
		focusable.onBlurCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		focusable.onFocus = jest.fn();
	});

	faker.helpers.maybe(() => {
		focusable.onFocusCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		focusable.onFocusVisible = jest.fn();
	});

	faker.helpers.maybe(() => {
		focusable.onFocusVisibleCapture = jest.fn();
	});

	return {
		...focusable,
		...overrideProps,
	};
};
