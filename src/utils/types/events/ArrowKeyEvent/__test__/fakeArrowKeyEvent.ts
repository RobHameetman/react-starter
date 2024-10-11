import { faker } from '@faker-js/faker';
import { fakeArrowDownEvent } from '@/utils/types/events/ArrowDownEvent/__test__';
import { fakeArrowLeftEvent } from '@/utils/types/events/ArrowLeftEvent/__test__';
import { fakeArrowRightEvent } from '@/utils/types/events/ArrowRightEvent/__test__';
import { fakeArrowUpEvent } from '@/utils/types/events/ArrowUpEvent/__test__';

export const fakeArrowKeyEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	faker.helpers.arrayElement([
		fakeArrowDownEvent,
		fakeArrowLeftEvent,
		fakeArrowRightEvent,
		fakeArrowUpEvent,
	])<T>({ ...overrideProps });
