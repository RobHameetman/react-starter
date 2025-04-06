import { renderHook } from '@testing-library/react';
import { fakeSpaceEvent } from '@/utils/types/events/SpaceEvent/__test__';
import {
	SpaceEventHandler,
	isSpaceEventHandler as isSpaceHandler,
} from '@/utils/types/handlers/SpaceEventHandler';
import { onTest } from '@test/utils/onTest';
import { useSpaceEvents } from './useSpaceEvents';

describe('useSpaceEvents()', () => {
	let capturing: boolean | null = null;
	let error: Error | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let mockOnSpace: jest.Mock | null = null;
	let mockOnSpaceCapture: jest.Mock | null = null;
	let mockOnSpaceUp: jest.Mock | null = null;
	let mockOnSpaceUpCapture: jest.Mock | null = null;
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

			mockOnSpace = jest.fn();
			mockOnSpaceCapture = jest.fn();
			mockOnSpaceUp = jest.fn();
			mockOnSpaceUpCapture = jest.fn();

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

			validEvent = fakeSpaceEvent({ capturing });
			invalidEvent = fakeSpaceEvent({ capturing, key: 'a' });

			({
				result: { current: result },
			} = renderHook(() =>
				useSpaceEvents({
					onSpace: mockOnSpace as SpaceEventHandler,
					onSpaceCapture: mockOnSpaceCapture as SpaceEventHandler,
					onSpaceUp: mockOnSpaceUp as SpaceEventHandler,
					onSpaceUpCapture: mockOnSpaceUpCapture as SpaceEventHandler,
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
		mockOnSpace = null;
		mockOnSpaceCapture = null;
		mockOnSpaceUp = null;
		mockOnSpaceUpCapture = null;
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

		expect(isSpaceHandler(onKeyDown, validEvent ?? {})).toBe(true);
		expect(isSpaceHandler(onKeyDown, invalidEvent ?? {})).toBe(false);
		expect(mockOnSpace).toBeCalledTimes(1);
		expect(mockOnSpace).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly during capturing', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isSpaceHandler(onKeyDownCapture, validEvent ?? {})).toBe(true);
		expect(isSpaceHandler(onKeyDownCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnSpaceCapture).toBeCalledTimes(1);
		expect(mockOnSpaceCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isSpaceHandler(onKeyUp, validEvent ?? {})).toBe(true);
		expect(isSpaceHandler(onKeyUp, invalidEvent ?? {})).toBe(false);
		expect(mockOnSpaceUp).toBeCalledTimes(1);
		expect(mockOnSpaceUp).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly during capturing', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isSpaceHandler(onKeyUpCapture, validEvent ?? {})).toBe(true);
		expect(isSpaceHandler(onKeyUpCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnSpaceUpCapture).toBeCalledTimes(1);
		expect(mockOnSpaceUpCapture).toBeCalledWith(validEvent);
	});
});
