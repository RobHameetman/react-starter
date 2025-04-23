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
import { onTest } from '@@/utils/onTest';
import { useTabEvents } from './useTabEvents';

describe('useTabEvents()', () => {
	let capturing: boolean | null = null;
	let error: Error | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let mockOnPressTab: jest.Mock | null = null;
	let mockOnPressTabCapture: jest.Mock | null = null;
	let mockOnPressTabBack: jest.Mock | null = null;
	let mockOnPressTabBackCapture: jest.Mock | null = null;
	let mockOnPressTabBackUp: jest.Mock | null = null;
	let mockOnPressTabBackUpCapture: jest.Mock | null = null;
	let mockOnPressTabUp: jest.Mock | null = null;
	let mockOnPressTabUpCapture: jest.Mock | null = null;
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

			mockOnPressTab = jest.fn();
			mockOnPressTabCapture = jest.fn();
			mockOnPressTabBack = jest.fn();
			mockOnPressTabBackCapture = jest.fn();
			mockOnPressTabBackUp = jest.fn();
			mockOnPressTabBackUpCapture = jest.fn();
			mockOnPressTabUp = jest.fn();
			mockOnPressTabUpCapture = jest.fn();

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
					onPressTab: mockOnPressTab as TabEventHandler,
					onPressTabCapture: mockOnPressTabCapture as TabEventHandler,
					onPressTabBack: mockOnPressTabBack as TabBackEventHandler,
					onPressTabBackCapture: mockOnPressTabBackCapture as TabBackEventHandler,
					onPressTabBackUp: mockOnPressTabBackUp as TabBackEventHandler,
					onPressTabBackUpCapture: mockOnPressTabBackUpCapture as TabBackEventHandler,
					onPressTabUp: mockOnPressTabUp as TabEventHandler,
					onPressTabUpCapture: mockOnPressTabUpCapture as TabEventHandler,
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
		mockOnPressTab = null;
		mockOnPressTabCapture = null;
		mockOnPressTabBack = null;
		mockOnPressTabBackCapture = null;
		mockOnPressTabBackUp = null;
		mockOnPressTabBackUpCapture = null;
		mockOnPressTabUp = null;
		mockOnPressTabUpCapture = null;
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
		expect(mockOnPressTabBack).toBeCalledTimes(1);
		expect(mockOnPressTabBack).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly when shift is not pressed', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();
		expect(capturing).toBe(false);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyDown, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyDown, invalidEvent ?? {})).toBe(false);
		expect(mockOnPressTab).toBeCalledTimes(1);
		expect(mockOnPressTab).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly during capturing when shift is pressed', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(true);

		expect(isTabBackHandler(onKeyDownCapture, validEvent ?? {})).toBe(true);
		expect(isTabBackHandler(onKeyDownCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnPressTabBackCapture).toBeCalledTimes(1);
		expect(mockOnPressTabBackCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keydown" events correctly during capturing when shift is not pressed', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyDownCapture, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyDownCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnPressTabCapture).toBeCalledTimes(1);
		expect(mockOnPressTabCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly when shift is pressed', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();
		expect(capturing).toBe(false);
		expect(shift).toBe(true);

		expect(isTabBackHandler(onKeyUp, validEvent ?? {})).toBe(true);
		expect(isTabBackHandler(onKeyUp, invalidEvent ?? {})).toBe(false);
		expect(mockOnPressTabBackUp).toBeCalledTimes(1);
		expect(mockOnPressTabBackUp).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly when shift is not pressed', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();
		expect(capturing).toBe(false);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyUp, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyUp, invalidEvent ?? {})).toBe(false);
		expect(mockOnPressTabUp).toBeCalledTimes(1);
		expect(mockOnPressTabUp).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly during capturing when shift is pressed', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(true);

		expect(isTabBackHandler(onKeyUpCapture, validEvent ?? {})).toBe(true);
		expect(isTabBackHandler(onKeyUpCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnPressTabBackUpCapture).toBeCalledTimes(1);
		expect(mockOnPressTabBackUpCapture).toBeCalledWith(validEvent);
	});

	it('should handle "keyup" events correctly during capturing when shift is not pressed', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();
		expect(capturing).toBe(true);
		expect(shift).toBe(false);

		expect(isTabHandler(onKeyUpCapture, validEvent ?? {})).toBe(true);
		expect(isTabHandler(onKeyUpCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnPressTabUpCapture).toBeCalledTimes(1);
		expect(mockOnPressTabUpCapture).toBeCalledWith(validEvent);
	});
});
