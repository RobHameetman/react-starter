import { renderHook } from '@testing-library/react';
import { fakeEnterEvent } from '@/utils/types/events/EnterEvent/__test__';
import {
	EnterEventHandler,
	isEnterEventHandler as isEnterHandler,
} from '@/utils/types/handlers/EnterEventHandler';
import { onTest } from '@@/utils/onTest';
import { useEnterEvents } from './useEnterEvents';

describe('useEnterEvents()', () => {
	let capturing: boolean | null = null;
	let error: Error | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let mockOnEnter: jest.Mock | null = null;
	let mockOnEnterCapture: jest.Mock | null = null;
	let mockOnEnterUp: jest.Mock | null = null;
	let mockOnEnterUpCapture: jest.Mock | null = null;
	let onKeyDown: unknown = null;
	let onKeyDownCapture: unknown = null;
	let onKeyUp: unknown = null;
	let onKeyUpCapture: unknown = null;
	let validEvent: Record<string, unknown> | null = null;
	let result: Record<string, unknown> | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			mockOnEnter = jest.fn();
			mockOnEnterCapture = jest.fn();
			mockOnEnterUp = jest.fn();
			mockOnEnterUpCapture = jest.fn();

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

			validEvent = fakeEnterEvent({ capturing });
			invalidEvent = fakeEnterEvent({ capturing, key: 'a' });

			({
				result: { current: result },
			} = renderHook(() =>
				useEnterEvents({
					onEnter: mockOnEnter as EnterEventHandler,
					onEnterCapture: mockOnEnterCapture as EnterEventHandler,
					onEnterUp: mockOnEnterUp as EnterEventHandler,
					onEnterUpCapture: mockOnEnterUpCapture as EnterEventHandler,
				}),
			));

			({ onKeyDown, onKeyDownCapture, onKeyUp, onKeyUpCapture } = result ?? {});
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
		mockOnEnter = null;
		mockOnEnterCapture = null;
		mockOnEnterUp = null;
		mockOnEnterUpCapture = null;
		onKeyDown = null;
		onKeyDownCapture = null;
		onKeyUp = null;
		onKeyUpCapture = null;
		result = null;
		validEvent = null;
	});

	it('should return an object which can be passed as props to component for handling keyboard events', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(result).toStrictEqual(
			expect.objectContaining({
				onKeyDown: expect.any(Function),
				onKeyDownCapture: expect.any(Function),
				onKeyUp: expect.any(Function),
				onKeyUpCapture: expect.any(Function),
			}),
		);
	});

	it('should handle "keydown" events correctly', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isEnterHandler(onKeyDown, validEvent ?? {})).toBe(true);
		expect(isEnterHandler(onKeyDown, invalidEvent ?? {})).toBe(false);
		expect(mockOnEnter).toBeCalledTimes(1);
		expect(mockOnEnter).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly during capturing', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isEnterHandler(onKeyDownCapture, validEvent ?? {})).toBe(true);
		expect(isEnterHandler(onKeyDownCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnEnterCapture).toBeCalledTimes(1);
		expect(mockOnEnterCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isEnterHandler(onKeyUp, validEvent ?? {})).toBe(true);
		expect(isEnterHandler(onKeyUp, invalidEvent ?? {})).toBe(false);
		expect(mockOnEnterUp).toBeCalledTimes(1);
		expect(mockOnEnterUp).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly during capturing', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isEnterHandler(onKeyUpCapture, validEvent ?? {})).toBe(true);
		expect(isEnterHandler(onKeyUpCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnEnterUpCapture).toBeCalledTimes(1);
		expect(mockOnEnterUpCapture).toBeCalledWith(validEvent);
	});
});
