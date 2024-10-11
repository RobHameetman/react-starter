import { faker } from '@faker-js/faker';
import { mockSpaceEventHandler } from '@/utils/types/handlers/SpaceEventHandler/__test__';

export const fakeSpaceable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const spaceable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		spaceable.onPressSpace = mockSpaceEventHandler();
	});

	faker.helpers.maybe(() => {
		spaceable.onPressSpaceCapture = mockSpaceEventHandler();
	});

	faker.helpers.maybe(() => {
		spaceable.onPressSpaceUp = mockSpaceEventHandler();
	});

	faker.helpers.maybe(() => {
		spaceable.onPressSpaceUpCapture = mockSpaceEventHandler();
	});

	return {
		...spaceable,
		...overrideProps,
	};
};
