import { faker } from '@faker-js/faker';
import { mockSpaceEventHandler } from '@app/utils/types/handlers/SpaceEventHandler/__test__';

export const fakeSpaceable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const spaceable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		spaceable.onSpace = mockSpaceEventHandler();
	});

	faker.helpers.maybe(() => {
		spaceable.onSpaceCapture = mockSpaceEventHandler();
	});

	faker.helpers.maybe(() => {
		spaceable.onSpaceUp = mockSpaceEventHandler();
	});

	faker.helpers.maybe(() => {
		spaceable.onSpaceUpCapture = mockSpaceEventHandler();
	});

	return {
		...spaceable,
		...overrideProps,
	};
};
