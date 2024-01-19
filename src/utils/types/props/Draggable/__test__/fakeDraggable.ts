import { faker } from '@faker-js/faker';
import { fakeMousable } from '@app/utils/types/props/Mousable/__test__';

export const fakeDraggable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const draggable: Record<string, unknown> = fakeMousable();

	faker.helpers.maybe(() => {
		draggable.onDrag = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragEnd = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragEndCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragEnter = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragEnterCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragLeave = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragLeaveCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragOver = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragOverCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragStart = jest.fn();
	});

	faker.helpers.maybe(() => {
		draggable.onDragStartCapture = jest.fn();
	});

	return {
		...draggable,
		...overrideProps,
	};
};
