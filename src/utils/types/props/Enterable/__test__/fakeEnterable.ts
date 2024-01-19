import { faker } from '@faker-js/faker';
import { mockEnterEventHandler } from '@app/utils/types/handlers/EnterEventHandler/__test__';

export const fakeEnterable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const enterable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		enterable.onEnter = mockEnterEventHandler();
	});

	faker.helpers.maybe(() => {
		enterable.onEnterCapture = mockEnterEventHandler();
	});

	faker.helpers.maybe(() => {
		enterable.onEnterUp = mockEnterEventHandler();
	});

	faker.helpers.maybe(() => {
		enterable.onEnterUpCapture = mockEnterEventHandler();
	});

	return {
		...enterable,
		...overrideProps,
	};
};
