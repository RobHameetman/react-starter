import { faker } from '@faker-js/faker';

export const fakeTouchable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const isTouchable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		isTouchable.onTouchCancel = jest.fn();
	});

	faker.helpers.maybe(() => {
		isTouchable.onTouchCancelCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		isTouchable.onTouchEnd = jest.fn();
	});

	faker.helpers.maybe(() => {
		isTouchable.onTouchEndCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		isTouchable.onTouchMove = jest.fn();
	});

	faker.helpers.maybe(() => {
		isTouchable.onTouchMoveCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		isTouchable.onTouchStart = jest.fn();
	});

	faker.helpers.maybe(() => {
		isTouchable.onTouchStartCapture = jest.fn();
	});

	return {
		...isTouchable,
		...overrideProps,
	};
};
