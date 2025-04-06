import { renderHook } from '@testing-library/react';
import { fakeEscapeEvent } from '@/utils/types/events/EscapeEvent/__test__';
import {
	EscapeEventHandler,
	isEscapeEventHandler as isEscapeHandler,
} from '@/utils/types/handlers/EscapeEventHandler';
import { onTest } from '@test/utils/onTest';
import { useEscapeEvents } from './useEscapeEvents';

describe('useEscapeEvents()', () => {
	let capturing: boolean | null = null;
	let error: Error | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let mockOnEscape: jest.Mock | null = null;
	let mockOnEscapeCapture: jest.Mock | null = null;
	let mockOnEscapeUp: jest.Mock | null = null;
	let mockOnEscapeUpCapture: jest.Mock | null = null;
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

			mockOnEscape = jest.fn();
			mockOnEscapeCapture = jest.fn();
			mockOnEscapeUp = jest.fn();
			mockOnEscapeUpCapture = jest.fn();

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

			validEvent = fakeEscapeEvent({ capturing });
			invalidEvent = fakeEscapeEvent({ capturing, key: 'a' });

			({
				result: { current: result },
			} = renderHook(() =>
				useEscapeEvents({
					onEscape: mockOnEscape as EscapeEventHandler,
					onEscapeCapture: mockOnEscapeCapture as EscapeEventHandler,
					onEscapeUp: mockOnEscapeUp as EscapeEventHandler,
					onEscapeUpCapture: mockOnEscapeUpCapture as EscapeEventHandler,
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
		mockOnEscape = null;
		mockOnEscapeCapture = null;
		mockOnEscapeUp = null;
		mockOnEscapeUpCapture = null;
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

		expect(isEscapeHandler(onKeyDown, validEvent ?? {})).toBe(true);
		expect(isEscapeHandler(onKeyDown, invalidEvent ?? {})).toBe(false);
		expect(mockOnEscape).toBeCalledTimes(1);
		expect(mockOnEscape).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly during capturing', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isEscapeHandler(onKeyDownCapture, validEvent ?? {})).toBe(true);
		expect(isEscapeHandler(onKeyDownCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnEscapeCapture).toBeCalledTimes(1);
		expect(mockOnEscapeCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isEscapeHandler(onKeyUp, validEvent ?? {})).toBe(true);
		expect(isEscapeHandler(onKeyUp, invalidEvent ?? {})).toBe(false);
		expect(mockOnEscapeUp).toBeCalledTimes(1);
		expect(mockOnEscapeUp).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly during capturing', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isEscapeHandler(onKeyUpCapture, validEvent ?? {})).toBe(true);
		expect(isEscapeHandler(onKeyUpCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnEscapeUpCapture).toBeCalledTimes(1);
		expect(mockOnEscapeUpCapture).toBeCalledWith(validEvent);
	});
});
