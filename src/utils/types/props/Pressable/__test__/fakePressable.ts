import { faker } from '@faker-js/faker';

export const fakePressable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const pressable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		pressable.onPress = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressChange = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressChangeCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressEnd = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressEndCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressStart = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressStartCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressUp = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onPressUpCapture = jest.fn();
	});

	return {
		...pressable,
		...overrideProps,
	};
};
