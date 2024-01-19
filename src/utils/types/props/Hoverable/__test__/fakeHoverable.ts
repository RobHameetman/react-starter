import { faker } from '@faker-js/faker';

export const fakeHoverable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const hoverable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		hoverable.onHover = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onHoverCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onHoverStop = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onHoverStopCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseEnter = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseEnterCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseLeave = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseLeaveCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseOut = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseOutCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseOver = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onMouseOverCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerEnter = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerEnterCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerLeave = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerLeaveCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerOut = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerOutCapture = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerOver = jest.fn();
	});

	faker.helpers.maybe(() => {
		hoverable.onPointerOverCapture = jest.fn();
	});

	return {
		...hoverable,
		...overrideProps,
	};
};
