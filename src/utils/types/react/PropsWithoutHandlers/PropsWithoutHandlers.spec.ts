import { onTest } from '@test/utils/onTest';
import {
	propsWithoutHandlers,
	isPropsWithoutHandlers,
} from './PropsWithoutHandlers';
import { fakePropsWithoutHandlers as fakeProps } from './__test__';

describe('propsWithoutHandlers()', () => {
	let props: unknown = null;
	let index = 1;

	beforeEach(() => {
		props = onTest(index, {
			1: () => fakeProps({ onClick: jest.fn }),
			2: () => ({ onClick: jest.fn }),
		});
	});

	afterEach(() => {
		props = null;

		index++;
	});

	it('should return an object without event handlers given props with event handlers', () => {
		expect(index).toBe(1);

		expect(propsWithoutHandlers(props)).toStrictEqual(
			expect.objectContaining({
				doSomething: expect.any(Function),
			}),
		);

		expect(isPropsWithoutHandlers(propsWithoutHandlers(props), props)).toBe(
			true,
		);
	});

	it('should return an empty object given props with only event handlers', () => {
		expect(index).toBe(2);

		expect(propsWithoutHandlers(props)).toStrictEqual({});
		expect(isPropsWithoutHandlers(propsWithoutHandlers(props), props)).toBe(
			true,
		);
	});
});

describe('isPropsWithoutHandlers()', () => {
	it('should return true given a valid PropsWithoutHandlers', () => {
		expect(isPropsWithoutHandlers(fakeProps())).toBe(true);
	});

	it('should return true given an empty object', () => {
		expect(isPropsWithoutHandlers({})).toBe(true);
	});

	it('should return false given an invalid PropsWithoutHandlers', () => {
		expect(isPropsWithoutHandlers(fakeProps({ onClick: jest.fn }))).toBe(false);
	});
});
