/* eslint-disable prettier/prettier */

import { act, fireEvent, renderHook } from '@testing-library/react';
import { useGlobalDragEvents } from './useGlobalDragEvents';

describe('useGlobalDragEvents()', () => {
	let handleGlobalDragEvents: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeAll(() => {
		jest.spyOn(window, 'addEventListener');
		jest.spyOn(window, 'removeEventListener');
	});

	beforeEach(() => {
		try {
			handleGlobalDragEvents = jest.fn();

			const render = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalDragEventsInput'. */
				useGlobalDragEvents({ _dependencies: { handleGlobalDragEvents } }),
			);

			const anotherRender = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalDragEventsInput'. */
				useGlobalDragEvents({ _dependencies: { handleGlobalDragEvents } }),
			);

			({
				result: { current: result },
			} = render);

			act(() => {
				render.rerender();

				fireEvent.drag(window);
				fireEvent.dragEnd(window);
				fireEvent.dragEnter(window);
				fireEvent.dragLeave(window);
				fireEvent.dragOver(window);
				fireEvent.dragStart(window);
				fireEvent.drop(window);

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

		handleGlobalDragEvents = null;
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

	it('should add a listener for drag events to the `window` object', () => {
		expect(addEventListener).toBeCalledWith('drag', handleGlobalDragEvents, true);
		expect(addEventListener).toBeCalledWith('dragend', handleGlobalDragEvents, true);
		expect(addEventListener).toBeCalledWith('dragenter', handleGlobalDragEvents, true);
		expect(addEventListener).toBeCalledWith('dragleave', handleGlobalDragEvents, true);
		expect(addEventListener).toBeCalledWith('dragover', handleGlobalDragEvents, true);
		expect(addEventListener).toBeCalledWith('dragstart', handleGlobalDragEvents, true);
		expect(addEventListener).toBeCalledWith('drop', handleGlobalDragEvents, true);
	});

	it('should only add listeners on the initial render', () => {
		expect(addEventListener).toBeCalledTimes(7);
	});

	it('should handle drag events dispatched to the `window` object', () => {
		expect(handleGlobalDragEvents).toBeCalledTimes(7);
		expect(handleGlobalDragEvents).toBeCalledWith(expect.objectContaining({ type: 'drag' }));
		expect(handleGlobalDragEvents).toBeCalledWith(expect.objectContaining({ type: 'dragend' }));
		expect(handleGlobalDragEvents).toBeCalledWith(expect.objectContaining({ type: 'dragenter' }));
		expect(handleGlobalDragEvents).toBeCalledWith(expect.objectContaining({ type: 'dragleave' }));
		expect(handleGlobalDragEvents).toBeCalledWith(expect.objectContaining({ type: 'dragover' }));
		expect(handleGlobalDragEvents).toBeCalledWith(expect.objectContaining({ type: 'dragstart' }));
		expect(handleGlobalDragEvents).toBeCalledWith(expect.objectContaining({ type: 'drop' }));
	});

	it('should remove added listeners when the hook is unmounted', () => {
		expect(removeEventListener).toBeCalledTimes(7);
		expect(removeEventListener).toBeCalledWith('drag', handleGlobalDragEvents);
		expect(removeEventListener).toBeCalledWith('dragend', handleGlobalDragEvents);
		expect(removeEventListener).toBeCalledWith('dragenter', handleGlobalDragEvents);
		expect(removeEventListener).toBeCalledWith('dragleave', handleGlobalDragEvents);
		expect(removeEventListener).toBeCalledWith('dragover', handleGlobalDragEvents);
		expect(removeEventListener).toBeCalledWith('dragstart', handleGlobalDragEvents);
		expect(removeEventListener).toBeCalledWith('drop', handleGlobalDragEvents);
	});
});
