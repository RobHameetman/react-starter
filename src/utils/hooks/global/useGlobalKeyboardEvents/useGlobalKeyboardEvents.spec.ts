/* eslint-disable prettier/prettier */

import { act, fireEvent, renderHook } from '@testing-library/react';
import { useGlobalKeyboardEvents } from './useGlobalKeyboardEvents';

describe('useGlobalKeyboardEvents()', () => {
	let handleGlobalKeyboardEvents: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeAll(() => {
		jest.spyOn(window, 'addEventListener');
		jest.spyOn(window, 'removeEventListener');
	});

	beforeEach(() => {
		try {
			handleGlobalKeyboardEvents = jest.fn();

			const render = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalKeyboardEventsInput'. */
				useGlobalKeyboardEvents({ _dependencies: { handleGlobalKeyboardEvents } }),
			);

			const anotherRender = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalKeyboardEventsInput'. */
				useGlobalKeyboardEvents({ _dependencies: { handleGlobalKeyboardEvents } }),
			);

			({
				result: { current: result },
			} = render);

			act(() => {
				render.rerender();

				fireEvent.keyDown(window);
				fireEvent.keyPress(window);
				fireEvent.keyUp(window);

				render.unmount();
				anotherRender.unmount();
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		handleGlobalKeyboardEvents = null;
		error = null;
		result = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should not return a value', () => {
		expect(result).toBeUndefined();
		expect(error).toBeNull();
	});

	it('should add a listener for keyboard events to the `window` object', () => {
		expect(addEventListener).toBeCalledWith('keydown', handleGlobalKeyboardEvents, true);
		expect(addEventListener).toBeCalledWith('keyup', handleGlobalKeyboardEvents, true);
	});

	it('should not add a listener for deprecated keyboard events to the `window` object', () => {
		expect(addEventListener).not.toBeCalledWith('keypress', handleGlobalKeyboardEvents, true);
	});

	it('should only add listeners on the initial render', () => {
		expect(addEventListener).toBeCalledTimes(2);
	});

	it('should handle keyboard events dispatched to the `window` object', () => {
		expect(handleGlobalKeyboardEvents).toBeCalledTimes(2);
		expect(handleGlobalKeyboardEvents).toBeCalledWith(expect.objectContaining({ type: 'keydown' }));
		expect(handleGlobalKeyboardEvents).toBeCalledWith(expect.objectContaining({ type: 'keyup' }));
	});

	it('should not handle deprecated keyboard events dispatched to the `window` object', () => {
		expect(handleGlobalKeyboardEvents).not.toBeCalledWith(expect.objectContaining({ type: 'keypress' }));
	});

	it('should remove added listeners when the hook is unmounted', () => {
		expect(removeEventListener).toBeCalledTimes(2);
		expect(removeEventListener).toBeCalledWith('keydown', handleGlobalKeyboardEvents);
		expect(removeEventListener).toBeCalledWith('keyup', handleGlobalKeyboardEvents);
		expect(removeEventListener).not.toBeCalledWith('keypress', handleGlobalKeyboardEvents);
	});
});
