import { faker } from '@faker-js/faker';
import { mockEscapeEventHandler } from '@/utils/types/handlers/EscapeEventHandler/__test__';

export const fakeEscapable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const escapable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		escapable.onPressEscape = mockEscapeEventHandler();
	});

	faker.helpers.maybe(() => {
		escapable.onPressEscapeCapture = mockEscapeEventHandler();
	});

	faker.helpers.maybe(() => {
		escapable.onPressEscapeUp = mockEscapeEventHandler();
	});

	faker.helpers.maybe(() => {
		escapable.onPressEscapeUpCapture = mockEscapeEventHandler();
	});

	return {
		...escapable,
		...overrideProps,
	};
};
