import { faker } from '@faker-js/faker';

export const fakeDOMRect = ({
	...overrideProps
}: Record<string, unknown> = {}): DOMRect => ({
	bottom: faker.number.int({ min: 0, max: 100 }),
	left: faker.number.int({ min: 0, max: 200 }),
	right: faker.number.int({ min: 0, max: 200 }),
	top: faker.number.int({ min: 0, max: 100 }),
	width: faker.number.int({ min: 0, max: 200 }),
	height: faker.number.int({ min: 0, max: 100 }),
	x: faker.number.int({ min: 0, max: 200 }),
	y: faker.number.int({ min: 0, max: 100 }),
	toJSON: jest.fn(),
	...overrideProps,
});
