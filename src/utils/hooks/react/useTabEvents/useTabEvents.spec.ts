import { renderHook } from '@testing-library/react';
import { fakeTabEvent } from '@/utils/types/events/TabEvent/__test__';
import {
	TabEventHandler,
	isTabEventHandler as isTabHandler,
} from '@/utils/types/handlers/TabEventHandler';
import {
	TabBackEventHandler,
	isTabBackEventHandler as isTabBackHandler,
} from '@/utils/types/handlers/TabBackEventHandler';
import { onTest } from '@test/utils/onTest';
import { useTabEvents } from './useTabEvents';

describe('useTabEvents()', () => {
	let capturing: boolean | null = null;
	let error: Error | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let mockOnTab: jest.Mock | null = null;
	let mockOnTabCapture: jest.Mock | null = null;
	let mockOnTabBack: jest.Mock | null = null;
	let mockOnTabBackCapture: jest.Mock | null = null;
	let mockOnTabBackUp: jest.Mock | null = null;
	let mockOnTabBackUpCapture: jest.Mock | null = null;
	let mockOnTabUp: jest.Mock | null = null;
	let mockOnTabUpCapture: jest.Mock | null = null;
	let onKeyDown: unknown = null;
	let onKeyDownCapture: unknown = null;
	let onKeyUp: unknown = null;
	let onKeyUpCapture: unknown = null;
	let validEvent: Record<string, unknown> | null = null;
	let shift: boolean | null = null;
	let result: Record<string, unknown> | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			mockOnTab = jest.fn();
			mockOnTabCapture = jest.fn();
			mockOnTabBack = jest.fn();
			mockOnTabBackCapture = jest.fn();
			mockOnTabBackUp = jest.fn();
			mockOnTabBackUpCapture = jest.fn();
			mockOnTabUp = jest.fn();
			mockOnTabUpCapture = jest.fn();

			onTest(index, {
				2: () => {
					capturing = false;
					shift = true;
				},
				3: () => {
					capturing = false;
					shift = false;
				},
				4: () => {
					capturing = true;
					shift = true;
				},
				5: () => {
					capturing = true;
					shift = false;
				},
				6: () => {
					capturing = false;
					shift = true;
				},
				7: () => {
					capturing = false;
					shift = false;
				},
				8: () => {
					capturing = true;
					shift = true;
				},
				9: () => {
					capturing = true;
					shift = false;
				},
			});

			validEvent = fakeTabEvent({
				capturing,
				shiftKey: shift,
			});

			invalidEvent = fakeTabEvent({
				capturing,
				key: 'a',
				shiftKey: shift,
			});

			({
				result: { current: result },
			} = renderHook(() =>
				useTabEvents({
					onTab: mockOnTab as TabEventHandler,
					onTabCapture: mockOnTabCapture as TabEventHandler,
					onTabBack: mockOnTabBack as TabBackEventHandler,
					onTabBackCapture: mockOnTabBackCapture as TabBackEventHandler,
					onTabBackUp: mockOnTabBackUp as TabBackEventHandler,
					onTabBackUpCapture: mockOnTabBackUpCapture as TabBackEventHandler,
					onTabUp: mockOnTabUp as TabEventHandler,
					onTabUpCapture: mockOnTabUpCapture as TabEventHandler,
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
		mockOnTab = null;
		mockOnTabCapture = null;
		mockOnTabBack = null;
		mockOnTabBackCapture = null;
		mockOnTabBackUp = null;
		mockOnTabBackUpCapture = null;
		mockOnTabUp = null;
		mockOnTabUpCapture = null;
		onKeyDown = null;
		onKeyDownCapture = null;
		onKeyUp = null;
		onKeyUpCapture = null;
		shift = null;
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

	it('should handle "keydown" events correctly when shift is pressed', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();
		expect(capturing).toBe(false);
		expect(shift).toBe(true);

		expect(isTabBackHandler(onKeyDown, validEvent ?? {})).toBe(true);
		expect(isTabBackHandler(onKeyDown, invalidEvent ?? {})).toBe(false);
		expect(mockOnTabBack).toBeCalledTimes(1);
		expect(mockOnTabBack).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly when shift is not pressed', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();
		expect(capturing).toBe(false);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyDown, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyDown, invalidEvent ?? {})).toBe(false);
		expect(mockOnTab).toBeCalledTimes(1);
		expect(mockOnTab).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly during capturing when shift is pressed', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(true);

		expect(isTabBackHandler(onKeyDownCapture, validEvent ?? {})).toBe(true);
		expect(isTabBackHandler(onKeyDownCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnTabBackCapture).toBeCalledTimes(1);
		expect(mockOnTabBackCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly during capturing when shift is not pressed', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyDownCapture, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyDownCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnTabCapture).toBeCalledTimes(1);
		expect(mockOnTabCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly when shift is pressed', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();
		expect(capturing).toBe(false);
		expect(shift).toBe(true);

		expect(isTabBackHandler(onKeyUp, validEvent ?? {})).toBe(true);
		expect(isTabBackHandler(onKeyUp, invalidEvent ?? {})).toBe(false);
		expect(mockOnTabBackUp).toBeCalledTimes(1);
		expect(mockOnTabBackUp).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly when shift is not pressed', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();
		expect(capturing).toBe(false);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyUp, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyUp, invalidEvent ?? {})).toBe(false);
		expect(mockOnTabUp).toBeCalledTimes(1);
		expect(mockOnTabUp).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly during capturing when shift is pressed', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(true);

		expect(isTabBackHandler(onKeyUpCapture, validEvent ?? {})).toBe(true);
		expect(isTabBackHandler(onKeyUpCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnTabBackUpCapture).toBeCalledTimes(1);
		expect(mockOnTabBackUpCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly during capturing when shift is not pressed', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyUpCapture, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyUpCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnTabUpCapture).toBeCalledTimes(1);
		expect(mockOnTabUpCapture).toBeCalledWith(validEvent);
	});
});
