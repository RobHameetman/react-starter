import type { KeyboardEvent } from 'react';
import { faker } from '@faker-js/faker';
import { fakeUIEvent } from '@app/utils/functions/check/react/isUIEvent/__test__';
import { randomKeyboardEventType } from '@app/utils/enums/KeyboardEventTypes/__test__';

const modifier = (modified = false) =>
	faker.helpers.arrayElement(
		['alt', 'ctrl', 'meta', 'shift', null].filter((m) =>
			modified ? m !== null : m === null,
		),
	);

export const fakeKeyboardEvent = <T = Element>({
	capturing = false,
	modified,
	modifiedBy = modifier(modified as boolean),
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeUIEvent<T>({ capturing }),
		altKey:
			modified !== undefined
				? modified && modifiedBy === 'alt'
				: faker.datatype.boolean(),
		ctrlKey:
			modified !== undefined
				? modified && modifiedBy === 'ctrl'
				: faker.datatype.boolean(),
		code: faker.string.alpha(1),
		key: faker.string.alpha(1),
		metaKey:
			modified !== undefined
				? modified && modifiedBy === 'meta'
				: faker.datatype.boolean(),
		shiftKey:
			modified !== undefined
				? modified && modifiedBy === 'shift'
				: faker.datatype.boolean(),
		type: randomKeyboardEventType(),
		getModifierState: jest.fn(),
		...overrideProps,
	} as unknown as KeyboardEvent<T> &
		globalThis.KeyboardEvent &
		Record<string, unknown>);
