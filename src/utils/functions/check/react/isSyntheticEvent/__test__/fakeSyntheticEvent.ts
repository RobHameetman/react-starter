import type { SyntheticEvent } from 'react';
import { faker } from '@faker-js/faker';

export const fakeSyntheticEvent = <T = Element, E = Event>({
	capturing = false,
	virtual = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		nativeEvent: {} as E,
		currentTarget: null as T,
		target: null as T,
		bubbles: faker.datatype.boolean(),
		cancelable: faker.datatype.boolean(),
		defaultPrevented: faker.datatype.boolean(),
		eventPhase: capturing
			? Event.CAPTURING_PHASE
			: faker.helpers.arrayElement([Event.BUBBLING_PHASE, Event.AT_TARGET]),
		isTrusted: Boolean(virtual) || faker.datatype.boolean(),
		timeStamp: Number(faker.date.recent()),
		type: faker.lorem.word(),
		isDefaultPrevented: jest.fn(),
		isPropagationStopped: jest.fn(),
		persist: jest.fn(),
		preventDefault: jest.fn(),
		stopPropagation: jest.fn(),
		...overrideProps,
	} as SyntheticEvent<T, E> & Record<string, unknown>);
