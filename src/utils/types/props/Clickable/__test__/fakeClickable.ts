import { faker } from '@faker-js/faker';

export const fakeClickable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const clickable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		clickable.onClick = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onClickCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onMouseDown = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onMouseDownCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onMouseUp = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onMouseUpCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onPointerDown = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onPointerDownCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onPointerUp = jest.fn();
	});

	faker.helpers.maybe(() => {
		clickable.onPointerUpCapture = jest.fn();
	});

	return {
		...clickable,
		...overrideProps,
	};
};
