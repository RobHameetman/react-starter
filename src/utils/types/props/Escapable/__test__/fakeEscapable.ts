import { faker } from '@faker-js/faker';
import { mockEscapeEventHandler } from '@app/utils/types/handlers/EscapeEventHandler/__test__';

export const fakeEscapable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const escapable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		escapable.onEscape = mockEscapeEventHandler();
	});

	faker.helpers.maybe(() => {
		escapable.onEscapeCapture = mockEscapeEventHandler();
	});

	faker.helpers.maybe(() => {
		escapable.onEscapeUp = mockEscapeEventHandler();
	});

	faker.helpers.maybe(() => {
		escapable.onEscapeUpCapture = mockEscapeEventHandler();
	});

	return {
		...escapable,
		...overrideProps,
	};
};
