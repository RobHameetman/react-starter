/* eslint-disable prettier/prettier */

import { act, fireEvent, renderHook } from '@testing-library/react';
import { useGlobalMouseEvents } from './useGlobalMouseEvents';

describe('useGlobalMouseEvents()', () => {
	let handleGlobalMouseEvents: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeAll(() => {
		jest.spyOn(window, 'addEventListener');
		jest.spyOn(window, 'removeEventListener');
	});

	beforeEach(() => {
		try {
			handleGlobalMouseEvents = jest.fn();

			const render = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalMouseEventsInput'. */
				useGlobalMouseEvents({ _dependencies: { handleGlobalMouseEvents } }),
			);

			const anotherRender = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalMouseEventsInput'. */
				useGlobalMouseEvents({ _dependencies: { handleGlobalMouseEvents } }),
			);

			({
				result: { current: result },
			} = render);

			act(() => {
				render.rerender();

				fireEvent(window, new Event('auxclick'));
				fireEvent.contextMenu(window);
				fireEvent.click(window);
				fireEvent.doubleClick(window);
				fireEvent.mouseDown(window);

				/* Fires `mouseover` event after `mouseenter` */
				fireEvent.mouseEnter(window);

				/* Fires `mouseout` event after `mouseleave` */
				fireEvent.mouseLeave(window);

				fireEvent.mouseMove(window);
				fireEvent.mouseUp(window);

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

		handleGlobalMouseEvents = null;
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

	it('should add a listener for mouse events to the `window` object', () => {
		expect(addEventListener).toBeCalledWith('auxclick', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('contextmenu', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('click', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('dblclick', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('mousedown', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('mouseenter', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('mouseleave', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('mousemove', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('mouseout', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('mouseover', handleGlobalMouseEvents, true);
		expect(addEventListener).toBeCalledWith('mouseup', handleGlobalMouseEvents, true);
	});

	it('should only add listeners on the initial render', () => {
		expect(addEventListener).toBeCalledTimes(11);
	});

	it('should handle mouse events dispatched to the `window` object', () => {
		expect(handleGlobalMouseEvents).toBeCalledTimes(11);
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'auxclick' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'contextmenu' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'click' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'dblclick' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'mousedown' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'mouseenter' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'mouseleave' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'mousemove' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'mouseout' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'mouseover' }));
		expect(handleGlobalMouseEvents).toBeCalledWith(expect.objectContaining({ type: 'mouseup' }));
	});

	it('should remove added listeners when the hook is unmounted', () => {
		expect(removeEventListener).toBeCalledTimes(11);
		expect(removeEventListener).toBeCalledWith('auxclick', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('contextmenu', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('click', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('dblclick', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('mousedown', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('mouseenter', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('mouseleave', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('mousemove', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('mouseout', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('mouseover', handleGlobalMouseEvents);
		expect(removeEventListener).toBeCalledWith('mouseup', handleGlobalMouseEvents);
	});
});
