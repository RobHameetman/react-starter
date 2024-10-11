import { faker } from '@faker-js/faker';
import { mockTabEventHandler } from '@/utils/types/handlers/TabEventHandler/__test__';
import { mockTabBackEventHandler } from '@/utils/types/handlers/TabBackEventHandler/__test__';

export const fakeTabbable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const tabbable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		tabbable.onPressTab = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onPressTabCapture = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onPressTabBack = mockTabBackEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onPressTabBackCapture = mockTabBackEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onPressTabUp = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onPressTabUpCapture = mockTabEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onPressTabBackUp = mockTabBackEventHandler();
	});

	faker.helpers.maybe(() => {
		tabbable.onPressTabBackUpCapture = mockTabBackEventHandler();
	});

	return {
		...tabbable,
		...overrideProps,
	};
};
