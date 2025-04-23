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
		pressable.onRelease = jest.fn();
	});

	faker.helpers.maybe(() => {
		pressable.onReleaseCapture = jest.fn();
	});

	return {
		...pressable,
		...overrideProps,
	};
};
