import { faker } from '@faker-js/faker';

export const fakeMousable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const mousable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		mousable.onDrag = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragEnd = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragEndCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragEnter = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragEnterCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragExit = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragExitCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragLeave = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragLeaveCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragOver = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragOverCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragStart = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDragStartCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDrop = jest.fn();
	});

	faker.helpers.maybe(() => {
		mousable.onDropCapture = jest.fn();
	});

	return {
		...mousable,
		...overrideProps,
	};
};
