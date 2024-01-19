/* eslint-disable prettier/prettier */

import { act, fireEvent, renderHook } from '@testing-library/react';
import { useGlobalScrollEvents } from './useGlobalScrollEvents';

describe('useGlobalScrollEvents()', () => {
	let handleGlobalScrollEvents: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeAll(() => {
		jest.spyOn(window, 'addEventListener');
		jest.spyOn(window, 'removeEventListener');
	});

	beforeEach(() => {
		try {
			handleGlobalScrollEvents = jest.fn();

			const render = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalScrollEventsInput'. */
				useGlobalScrollEvents({ _dependencies: { handleGlobalScrollEvents } }),
			);

			const anotherRender = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalScrollEventsInput'. */
				useGlobalScrollEvents({ _dependencies: { handleGlobalScrollEvents } }),
			);

			({
				result: { current: result },
			} = render);

			act(() => {
				render.rerender();

				fireEvent.scroll(window);
				fireEvent(window, new Event('scrollend'));

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

		handleGlobalScrollEvents = null;
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

	it('should add a listener for scroll events to the `window` object', () => {
		expect(addEventListener).toBeCalledWith('scroll', handleGlobalScrollEvents, true);
		expect(addEventListener).toBeCalledWith('scrollend', handleGlobalScrollEvents, true);
	});

	it('should only add listeners on the initial render', () => {
		expect(addEventListener).toBeCalledTimes(2);
	});

	it('should handle scroll events dispatched to the `window` object', () => {
		expect(handleGlobalScrollEvents).toBeCalledTimes(2);
		expect(handleGlobalScrollEvents).toBeCalledWith(expect.objectContaining({ type: 'scroll' }));
		expect(handleGlobalScrollEvents).toBeCalledWith(expect.objectContaining({ type: 'scrollend' }));
	});

	it('should remove added listeners when the hook is unmounted', () => {
		expect(removeEventListener).toBeCalledTimes(2);
		expect(removeEventListener).toBeCalledWith('scroll', handleGlobalScrollEvents);
		expect(removeEventListener).toBeCalledWith('scrollend', handleGlobalScrollEvents);
	});
});
