import { FocusEventHandler } from 'react';
import { renderHook } from '@testing-library/react';
import { fakeFocusEvent } from '@/utils/functions/check/react/isFocusEvent/__test__';
import { isFocusEventHandler as isFocusHandler } from '@/utils/functions/check/react/isFocusEventHandler';
import { onTest } from '@@/utils/onTest';
import { useInteractionModality } from './useInteractionModality';

describe('useInteractionModality()', () => {
	let capturing: boolean | null = null;
	let error: Error | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let onBlur: unknown = null;
	let onBlurCapture: unknown = null;
	let onFocus: unknown = null;
	let onFocusCapture: unknown = null;
	let validEvent: Record<string, unknown> | null = null;
	let result: unknown = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				2: () => {
					capturing = false;
				},
				3: () => {
					capturing = true;
				},
				4: () => {
					capturing = false;
				},
				5: () => {
					capturing = true;
				},
			});

			validEvent = fakeFocusEvent({ capturing });
			invalidEvent = fakeFocusEvent({ capturing, type: 'pointerup' });

			({
				result: { current: result },
			} = renderHook(() =>
				useInteractionModality(),
			));
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		capturing = null;
		error = null;
		invalidEvent = null;
		onBlur = null;
		onBlurCapture = null;
		onFocus = null;
		onFocusCapture = null;
		result = null;
		validEvent = null;
	});

	it('should return an object which can be passed as props to component for handling keyboard events', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(result).toStrictEqual(
			expect.objectContaining({
				onBlur: expect.any(Function),
				onBlurCapture: expect.any(Function),
				onFocus: expect.any(Function),
				onFocusCapture: expect.any(Function),
			}),
		);
	});

	it('should handle "blur" events correctly', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isFocusHandler(onBlur, validEvent ?? {})).toBe(true);
		expect(isFocusHandler(onBlur, invalidEvent ?? {})).toBe(false);
	});

	it('should handle "blur" events correctly during capturing', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isFocusHandler(onBlurCapture, validEvent ?? {})).toBe(true);
		expect(isFocusHandler(onBlurCapture, invalidEvent ?? {})).toBe(false);
	});

	it('should handle "focus" events correctly', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isFocusHandler(onFocus, validEvent ?? {})).toBe(true);
		expect(isFocusHandler(onFocus, invalidEvent ?? {})).toBe(false);
	});

	it('should handle "focus" events correctly during capturing', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isFocusHandler(onFocusCapture, validEvent ?? {})).toBe(true);
		expect(isFocusHandler(onFocusCapture, invalidEvent ?? {})).toBe(false);
	});
});
