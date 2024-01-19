import { faker } from '@faker-js/faker';

export const fakeDroppable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const droppable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		droppable.onDragOver = jest.fn();
	});

	faker.helpers.maybe(() => {
		droppable.onDragOverCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		droppable.onDrop = jest.fn();
	});

	faker.helpers.maybe(() => {
		droppable.onDropCapture = jest.fn();
	});

	return {
		...droppable,
		...overrideProps,
	};
};
