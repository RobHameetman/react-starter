import type { TouchEvent } from 'react';
import { faker } from '@faker-js/faker';
import { fakeUIEvent } from '@/utils/functions/check/react/isUIEvent/__test__';
import { randomTouchEventType } from '@/utils/enums/TouchEventTypes/__test__';

export const fakeTouch = ({ ...overrideProps }: Record<string, unknown> = {}) =>
	({
		clientX: faker.number.int({ min: 0, max: 400 }),
		clientY: faker.number.int({ min: 0, max: 400 }),
		force: faker.number.int({ min: 0, max: 400 }),
		identifier: faker.number.int({ min: 0, max: 400 }),
		pageX: faker.number.int({ min: 0, max: 400 }),
		pageY: faker.number.int({ min: 0, max: 400 }),
		radiusX: faker.number.int({ min: 0, max: 400 }),
		radiusY: faker.number.int({ min: 0, max: 400 }),
		rotationAngle: faker.number.int({ min: 0, max: 360 }),
		screenX: faker.number.int({ min: 0, max: 400 }),
		screenY: faker.number.int({ min: 0, max: 400 }),
		target: document.createElement('div'),
		...overrideProps,
	} as Touch);

export const fakeTouchList = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const list = Array.from(
		{ length: faker.number.int({ min: 1, max: 3 }) },
		() => fakeTouch(),
	);

	return {
		...list,
		item: jest.fn((index: number) => list[index] || null),
		...overrideProps,
	} as TouchList;
};

export const fakeTouchEvent = <T = Element>({
	capturing = false,
	virtual = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeUIEvent<T>({ capturing, virtual }),
		altKey: faker.datatype.boolean(),
		changeTouches: fakeTouchList(),
		ctrlKey: faker.datatype.boolean(),
		metaKey: faker.datatype.boolean(),
		shiftKey: faker.datatype.boolean(),
		type: randomTouchEventType(),
		getModifierState: jest.fn(),
		targetTouches: fakeTouchList(),
		touches: fakeTouchList(),
		...overrideProps,
	} as unknown as TouchEvent<T> &
		globalThis.TouchEvent &
		Record<string, unknown>);
