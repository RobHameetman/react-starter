import { faker } from '@faker-js/faker';
import { randomIntent } from '@/theme/enums/Intents/__test__';

export const fakeIntentable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const intentable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		intentable.intent = randomIntent;
	});

	return {
		...intentable,
		...overrideProps,
	};
};
