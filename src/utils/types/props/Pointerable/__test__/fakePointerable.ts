import { faker } from '@faker-js/faker';
import { fakeMousable } from '../../Mousable/__test__';
import { fakeTouchable } from '../../Touchable/__test__';

export const fakePointerable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const pointerable: Record<string, unknown> = {
		...fakeMousable(),
		...fakeTouchable(),
	};

	faker.helpers.maybe(() => {
		pointerable.onGotPointerCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onGotPointerCaptureCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onLostPointerCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onLostPointerCaptureCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerCancel = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerCancelCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerDown = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerDownCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerEnter = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerEnterCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerLeave = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerLeaveCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerMove = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerMoveCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerOut = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerOutCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerOver = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerOverCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerUp = jest.fn();
	});

	faker.helpers.maybe(() => {
		pointerable.onPointerUpCapture = jest.fn();
	});

	return {
		...pointerable,
		...overrideProps,
	};
};
