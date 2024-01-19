import type { PointerEvent } from 'react';
import { faker } from '@faker-js/faker';
import { randomPointerType } from '@app/utils/enums/PointerTypes/__test__';
import { randomPointerEventType } from '@app/utils/enums/PointerEventTypes/__test__';
import { fakeMouseEvent } from '@app/utils/functions/check/react/isMouseEvent/__test__';

export const fakePointerEvent = <T = Element>({
	capturing = false,
	virtual = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeMouseEvent<T>({ capturing, virtual }),
		pointerId: faker.number.int(),
		pressure: faker.number.int(),
		tangentialPressure: faker.number.int(),
		tiltX: faker.number.int(),
		tiltY: faker.number.int(),
		twist: faker.number.int(),
		width: faker.number.int(),
		height: faker.number.int(),
		pointerType: randomPointerType(),
		isPrimary: faker.datatype.boolean(),
		type: randomPointerEventType(),
		...overrideProps,
	} as PointerEvent<T> & globalThis.PointerEvent & Record<string, unknown>);
