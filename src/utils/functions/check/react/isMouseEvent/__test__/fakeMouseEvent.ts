import type { MouseEvent } from 'react';
import { faker } from '@faker-js/faker';
import { fakeUIEvent } from '@app/utils/functions/check/react/isUIEvent/__test__';
import { randomMouseEventType } from '@app/utils/enums/MouseEventTypes/__test__';
import { randomMozInputSource } from '@app/utils/enums/MozInputSources/__test__';

export const fakeMouseEvent = <T = Element>({
	capturing = false,
	virtual = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeUIEvent<T>({ capturing, virtual }),
		altKey: faker.datatype.boolean(),
		button: faker.number.int(),
		buttons: faker.number.int(),
		clientX: faker.number.int({ min: 0, max: 1000 }),
		clientY: faker.number.int({ min: 0, max: 1000 }),
		ctrlKey: faker.datatype.boolean(),
		metaKey: faker.datatype.boolean(),
		movementX: faker.number.int({ min: 0, max: 500 }),
		movementY: faker.number.int({ min: 0, max: 500 }),
		mozInputSource: virtual ? 0 : randomMozInputSource({ min: 1 }),
		pageX: faker.number.int({ min: 0, max: 1000 }),
		pageY: faker.number.int({ min: 0, max: 1000 }),
		relatedTarget: null,
		shiftKey: faker.datatype.boolean(),
		screenX: faker.number.int({ min: 0, max: 1000 }),
		screenY: faker.number.int({ min: 0, max: 1000 }),
		type: randomMouseEventType(),
		getModifierState: jest.fn(),
		...overrideProps,
	} as unknown as MouseEvent<T> &
		globalThis.MouseEvent &
		Record<string, unknown>);
