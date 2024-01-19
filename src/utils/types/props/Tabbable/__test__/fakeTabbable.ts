import { faker } from '@faker-js/faker';
import { mockTabEventHandler } from '@app/utils/types/handlers/TabEventHandler/__test__';
import { mockTabBackEventHandler } from '@app/utils/types/handlers/TabBackEventHandler/__test__';

export const fakeTabbable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const tabbable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		tabbable.onTab = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onTabCapture = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onTabBack = mockTabBackEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onTabBackCapture = mockTabBackEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onTabUp = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onTabUpCapture = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onTabBackUp = mockTabBackEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onTabBackUpCapture = mockTabBackEventHandler();
	});

	return {
		...tabbable,
		...overrideProps,
	};
};
