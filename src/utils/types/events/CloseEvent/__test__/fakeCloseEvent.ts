import { faker } from '@faker-js/faker';
import { fakeEscapeEvent } from '@/utils/types/events/EscapeEvent/__test__';
import { fakePressEvent } from '@/utils/types/events/PressEvent/__test__';
import { CloseEvent } from '../CloseEvent';

export const fakeCloseEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	faker.helpers.arrayElement([fakeEscapeEvent, fakePressEvent])({
		...overrideProps,
	}) as CloseEvent<T> & Record<string, unknown>;
