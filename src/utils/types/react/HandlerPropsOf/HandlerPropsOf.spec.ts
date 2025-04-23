import { onTest } from '@@/utils/onTest';
import { handlerPropsOf, isHandlerPropsOf } from './HandlerPropsOf';
import { fakeHandlerPropsOf as fakePropsOf } from './__test__';

describe('handlerPropsOf()', () => {
	let props: unknown = null;
	let index = 1;

	beforeEach(() => {
		props = onTest(index, {
			1: () => fakePropsOf({ renderSomething: jest.fn }),
			2: () => ({ renderSomething: jest.fn }),
		});
	});

	afterEach(() => {
		props = null;

		index++;
	});

	it('should return an object with extracted event handlers given props with event handlers', () => {
		expect(index).toBe(1);

		expect(handlerPropsOf(props)).toStrictEqual(expect.any(Object));
		expect(isHandlerPropsOf(handlerPropsOf(props), props)).toBe(true);
	});

	it('should return an empty object given props without event handlers', () => {
		expect(index).toBe(2);

		expect(handlerPropsOf(props)).toStrictEqual({});
		expect(isHandlerPropsOf(handlerPropsOf(props), props)).toBe(false);
	});
});

describe('isHandlerPropsOf()', () => {
	it('should return true given a valid HandlerPropsOf', () => {
		expect(isHandlerPropsOf(fakePropsOf())).toBe(true);
	});

	it('should return false given an invalid HandlerPropsOf', () => {
		expect(isHandlerPropsOf(fakePropsOf({ doSomething: jest.fn }))).toBe(false);
	});

	it('should return false given an empty object', () => {
		expect(isHandlerPropsOf({})).toBe(false);
	});
});
