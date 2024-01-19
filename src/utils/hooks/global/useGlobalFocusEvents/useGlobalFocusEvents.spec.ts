/* eslint-disable prettier/prettier */

import { act, fireEvent, renderHook } from '@testing-library/react';
import { useGlobalFocusEvents } from './useGlobalFocusEvents';

describe('useGlobalFocusEvents()', () => {
	let handleGlobalFocusEvents: jest.Mock | null = null;
	let overrideNativeFocus: jest.Mock | null = null;
	let restoreNativeFocus: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeAll(() => {
		jest.spyOn(HTMLElement.prototype, 'focus');
		jest.spyOn(window, 'addEventListener');
		jest.spyOn(window, 'removeEventListener');
	});

	beforeEach(() => {
		try {
			handleGlobalFocusEvents = jest.fn();
			restoreNativeFocus = jest.fn();
			overrideNativeFocus = jest.fn(() => restoreNativeFocus);

			const render = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalFocusEventsInput'. */
				useGlobalFocusEvents({ _dependencies: { handleGlobalFocusEvents, overrideNativeFocus } }),
			);

			const anotherRender = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseGlobalFocusEventsInput'. */
				useGlobalFocusEvents({ _dependencies: { handleGlobalFocusEvents, overrideNativeFocus } }),
			);

			({
				result: { current: result },
			} = render);

			act(() => {
				render.rerender();

				/* Fires `focusout` event before `blur` */
				fireEvent.blur(window);

				/* Fires `focusin` event before `focus` */
				fireEvent.focus(window);

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

		error = null;
		handleGlobalFocusEvents = null;
		overrideNativeFocus = null;
		restoreNativeFocus = null;
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
		expect(addEventListener).toBeCalledWith('blur', handleGlobalFocusEvents, true);
		expect(addEventListener).toBeCalledWith('focus', handleGlobalFocusEvents, true);
		expect(addEventListener).toBeCalledWith('focusin', handleGlobalFocusEvents, true);
		expect(addEventListener).toBeCalledWith('focusout', handleGlobalFocusEvents, true);
	});

	it('should only add listeners on the initial render', () => {
		expect(addEventListener).toBeCalledTimes(4);
	});

	it('should handle focus events dispatched to the `window` object', () => {
		expect(handleGlobalFocusEvents).toBeCalledTimes(4);
		expect(handleGlobalFocusEvents).toBeCalledWith(expect.objectContaining({ type: 'blur' }));
		expect(handleGlobalFocusEvents).toBeCalledWith(expect.objectContaining({ type: 'focus' }));
		expect(handleGlobalFocusEvents).toBeCalledWith(expect.objectContaining({ type: 'focusin' }));
		expect(handleGlobalFocusEvents).toBeCalledWith(expect.objectContaining({ type: 'focusout' }));
	});

	it('should remove added listeners when the hook is unmounted', () => {
		expect(removeEventListener).toBeCalledTimes(4);
		expect(removeEventListener).toBeCalledWith('blur', handleGlobalFocusEvents);
		expect(removeEventListener).toBeCalledWith('focus', handleGlobalFocusEvents);
		expect(removeEventListener).toBeCalledWith('focusin', handleGlobalFocusEvents);
		expect(removeEventListener).toBeCalledWith('focusout', handleGlobalFocusEvents);
	});

	it('should override the native focus() method on the HTMLElement prototype when the hook is mounted', () => {
		expect(overrideNativeFocus).toBeCalled();
	});

	it('should only override the native focus() method on the initial render', () => {
		expect(overrideNativeFocus).toBeCalledTimes(1);
	});

	it('should restore the native focus() method on the HTMLElement prototype when the hook is unmounted', () => {
		expect(restoreNativeFocus).toBeCalled();
	});

	it('should only restore the native focus() method on the initial dismount', () => {
		expect(overrideNativeFocus).toBeCalledTimes(1);
	});
});
