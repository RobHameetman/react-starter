import { faker } from '@faker-js/faker';
import { mockEnterEventHandler } from '@/utils/types/handlers/EnterEventHandler/__test__';

export const fakeEnterable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const enterable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		enterable.onPressEnter = mockEnterEventHandler();
	});

	faker.helpers.maybe(() => {
		enterable.onPressEnterCapture = mockEnterEventHandler();
	});

	faker.helpers.maybe(() => {
		enterable.onReleaseEnter = mockEnterEventHandler();
	});

	faker.helpers.maybe(() => {
		enterable.onReleaseEnterCapture = mockEnterEventHandler();
	});

	return {
		...enterable,
		...overrideProps,
	};
};
