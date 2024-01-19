/* eslint-disable prettier/prettier */

import { act, fireEvent, renderHook } from '@testing-library/react';
import { useGlobalPointerEvents } from './useGlobalPointerEvents';

describe('useGlobalPointerEvents()', () => {
	let handleGlobalPointerEvents: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeAll(() => {
		jest.spyOn(window, 'addEventListener');
		jest.spyOn(window, 'removeEventListener');
	});

	beforeEach(() => {
		try {
			handleGlobalPointerEvents = jest.fn();

			const render = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalPointerEventsInput'. */
				useGlobalPointerEvents({ _dependencies: { handleGlobalPointerEvents } }),
			);

			const anotherRender = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalPointerEventsInput'. */
				useGlobalPointerEvents({ _dependencies: { handleGlobalPointerEvents } }),
			);

			({
				result: { current: result },
			} = render);

			act(() => {
				render.rerender();

				fireEvent.pointerCancel(window);
				fireEvent.pointerDown(window);

				/* Fires `pointerover` event after `pointerenter` */
				fireEvent.pointerEnter(window);

				/* Fires `pointerout` event after `pointerleave` */
				fireEvent.pointerLeave(window);

				fireEvent.pointerMove(window);
				fireEvent.pointerUp(window);

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

		handleGlobalPointerEvents = null;
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

	it('should add a listener for pointer events to the `window` object', () => {
		expect(addEventListener).toBeCalledWith('pointercancel', handleGlobalPointerEvents, true);
		expect(addEventListener).toBeCalledWith('pointerdown', handleGlobalPointerEvents, true);
		expect(addEventListener).toBeCalledWith('pointerenter', handleGlobalPointerEvents, true);
		expect(addEventListener).toBeCalledWith('pointerleave', handleGlobalPointerEvents, true);
		expect(addEventListener).toBeCalledWith('pointermove', handleGlobalPointerEvents, true);
		expect(addEventListener).toBeCalledWith('pointerout', handleGlobalPointerEvents, true);
		expect(addEventListener).toBeCalledWith('pointerover', handleGlobalPointerEvents, true);
		expect(addEventListener).toBeCalledWith('pointerup', handleGlobalPointerEvents, true);
	});

	it('should only add listeners on the initial render', () => {
		expect(addEventListener).toBeCalledTimes(8);
	});

	it('should handle pointer events dispatched to the `window` object', () => {
		expect(handleGlobalPointerEvents).toBeCalledTimes(8);
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointercancel' }));
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointerdown' }));
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointerenter' }));
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointerleave' }));
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointermove' }));
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointerout' }));
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointerover' }));
		expect(handleGlobalPointerEvents).toBeCalledWith(expect.objectContaining({ type: 'pointerup' }));
	});

	it('should remove added listeners when the hook is unmounted', () => {
		expect(removeEventListener).toBeCalledTimes(8);
		expect(removeEventListener).toBeCalledWith('pointercancel', handleGlobalPointerEvents);
		expect(removeEventListener).toBeCalledWith('pointerdown', handleGlobalPointerEvents);
		expect(removeEventListener).toBeCalledWith('pointerenter', handleGlobalPointerEvents);
		expect(removeEventListener).toBeCalledWith('pointerleave', handleGlobalPointerEvents);
		expect(removeEventListener).toBeCalledWith('pointermove', handleGlobalPointerEvents);
		expect(removeEventListener).toBeCalledWith('pointerout', handleGlobalPointerEvents);
		expect(removeEventListener).toBeCalledWith('pointerover', handleGlobalPointerEvents);
		expect(removeEventListener).toBeCalledWith('pointerup', handleGlobalPointerEvents);
	});
});
