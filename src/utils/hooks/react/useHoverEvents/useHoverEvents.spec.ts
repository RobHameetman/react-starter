import { renderHook } from '@testing-library/react';
import { fakeHoverEvent } from '@/utils/types/events/HoverEvent/__test__';
import {
	HoverEventHandler,
	isHoverEventHandler as isHoverHandler,
} from '@/utils/types/handlers/HoverEventHandler';
import { onTest } from '@test/utils/onTest';
import { useHoverEvents } from './useHoverEvents';

describe('useHoverEvents()', () => {
	let capturing: boolean | null = null;
	let error: Error | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let mockOnHover: jest.Mock | null = null;
	let mockOnHoverCapture: jest.Mock | null = null;
	let mockOnHoverStop: jest.Mock | null = null;
	let mockOnHoverStopCapture: jest.Mock | null = null;
	let mockOnMouseEnter: jest.Mock | null = null;
	let mockOnMouseEnterCapture: jest.Mock | null = null;
	let mockOnMouseLeave: jest.Mock | null = null;
	let mockOnMouseLeaveCapture: jest.Mock | null = null;
	let mockOnMouseOut: jest.Mock | null = null;
	let mockOnMouseOutCapture: jest.Mock | null = null;
	let mockOnMouseOver: jest.Mock | null = null;
	let mockOnMouseOverCapture: jest.Mock | null = null;
	let mockOnPointerEnter: jest.Mock | null = null;
	let mockOnPointerEnterCapture: jest.Mock | null = null;
	let mockOnPointerLeave: jest.Mock | null = null;
	let mockOnPointerLeaveCapture: jest.Mock | null = null;
	let mockOnPointerOut: jest.Mock | null = null;
	let mockOnPointerOutCapture: jest.Mock | null = null;
	let mockOnPointerOver: jest.Mock | null = null;
	let mockOnPointerOverCapture: jest.Mock | null = null;
	let onMouseEnter: unknown = null;
	let onMouseEnterCapture: unknown = null;
	let onMouseLeave: unknown = null;
	let onMouseLeaveCapture: unknown = null;
	let onMouseOut: unknown = null;
	let onMouseOutCapture: unknown = null;
	let onMouseOver: unknown = null;
	let onMouseOverCapture: unknown = null;
	let onPointerEnter: unknown = null;
	let onPointerEnterCapture: unknown = null;
	let onPointerLeave: unknown = null;
	let onPointerLeaveCapture: unknown = null;
	let onPointerOut: unknown = null;
	let onPointerOutCapture: unknown = null;
	let onPointerOver: unknown = null;
	let onPointerOverCapture: unknown = null;
	let validEvent: Record<string, unknown> | null = null;
	let result: Record<string, unknown> | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			mockOnHover = jest.fn();
			mockOnHoverCapture = jest.fn();
			mockOnHoverStop = jest.fn();
			mockOnHoverStopCapture = jest.fn();
			mockOnMouseEnter = jest.fn();
			mockOnMouseEnterCapture = jest.fn();
			mockOnMouseLeave = jest.fn();
			mockOnMouseLeaveCapture = jest.fn();
			mockOnMouseOut = jest.fn();
			mockOnMouseOutCapture = jest.fn();
			mockOnMouseOver = jest.fn();
			mockOnMouseOverCapture = jest.fn();
			mockOnPointerEnter = jest.fn();
			mockOnPointerEnterCapture = jest.fn();
			mockOnPointerLeave = jest.fn();
			mockOnPointerLeaveCapture = jest.fn();
			mockOnPointerOut = jest.fn();
			mockOnPointerOutCapture = jest.fn();
			mockOnPointerOver = jest.fn();
			mockOnPointerOverCapture = jest.fn();

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
				6: () => {
					capturing = false;
				},
				7: () => {
					capturing = true;
				},
				8: () => {
					capturing = false;
				},
				9: () => {
					capturing = true;
				},
				10: () => {
					capturing = false;
				},
				11: () => {
					capturing = true;
				},
				12: () => {
					capturing = false;
				},
				13: () => {
					capturing = true;
				},
				14: () => {
					capturing = false;
				},
				15: () => {
					capturing = true;
				},
				16: () => {
					capturing = false;
				},
				17: () => {
					capturing = true;
				},
				18: () => {
					capturing = false;
				},
				19: () => {
					capturing = true;
				},
			});

			validEvent = fakeHoverEvent({ capturing });
			invalidEvent = fakeHoverEvent({ capturing, type: 'pointerup' });

			({
				result: { current: result },
			} = renderHook(() =>
				useHoverEvents({
					onHover: mockOnHover as HoverEventHandler,
					onHoverCapture: mockOnHoverCapture as HoverEventHandler,
					onHoverStop: mockOnHoverStop as HoverEventHandler,
					onHoverStopCapture: mockOnHoverStopCapture as HoverEventHandler,
					onMouseEnter: mockOnMouseEnter as HoverEventHandler,
					onMouseEnterCapture: mockOnMouseEnterCapture as HoverEventHandler,
					onMouseLeave: mockOnMouseLeave as HoverEventHandler,
					onMouseLeaveCapture: mockOnMouseLeaveCapture as HoverEventHandler,
					onMouseOut: mockOnMouseOut as HoverEventHandler,
					onMouseOutCapture: mockOnMouseOutCapture as HoverEventHandler,
					onMouseOver: mockOnMouseOver as HoverEventHandler,
					onMouseOverCapture: mockOnMouseOverCapture as HoverEventHandler,
					onPointerEnter: mockOnPointerEnter as HoverEventHandler,
					onPointerEnterCapture: mockOnPointerEnterCapture as HoverEventHandler,
					onPointerLeave: mockOnPointerLeave as HoverEventHandler,
					onPointerLeaveCapture: mockOnPointerLeaveCapture as HoverEventHandler,
					onPointerOut: mockOnPointerOut as HoverEventHandler,
					onPointerOutCapture: mockOnPointerOutCapture as HoverEventHandler,
					onPointerOver: mockOnPointerOver as HoverEventHandler,
					onPointerOverCapture: mockOnPointerOverCapture as HoverEventHandler,
				}),
			));

			({
				onMouseEnter,
				onMouseEnterCapture,
				onMouseLeave,
				onMouseLeaveCapture,
				onMouseOut,
				onMouseOutCapture,
				onMouseOver,
				onMouseOverCapture,
				onPointerEnter,
				onPointerEnterCapture,
				onPointerLeave,
				onPointerLeaveCapture,
				onPointerOut,
				onPointerOutCapture,
				onPointerOver,
				onPointerOverCapture,
			} = result ?? {});
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
		mockOnHover = null;
		mockOnHoverCapture = null;
		mockOnHoverStop = null;
		mockOnHoverStopCapture = null;
		mockOnMouseEnter = null;
		mockOnMouseEnterCapture = null;
		mockOnMouseLeave = null;
		mockOnMouseLeaveCapture = null;
		mockOnMouseOut = null;
		mockOnMouseOutCapture = null;
		mockOnMouseOver = null;
		mockOnMouseOverCapture = null;
		mockOnPointerEnter = null;
		mockOnPointerEnterCapture = null;
		mockOnPointerLeave = null;
		mockOnPointerLeaveCapture = null;
		mockOnPointerOut = null;
		mockOnPointerOutCapture = null;
		mockOnPointerOver = null;
		mockOnPointerOverCapture = null;
		onMouseEnter = null;
		onMouseEnterCapture = null;
		onMouseLeave = null;
		onMouseLeaveCapture = null;
		onMouseOut = null;
		onMouseOutCapture = null;
		onMouseOver = null;
		onMouseOverCapture = null;
		onPointerEnter = null;
		onPointerEnterCapture = null;
		onPointerLeave = null;
		onPointerLeaveCapture = null;
		onPointerOut = null;
		onPointerOutCapture = null;
		onPointerOver = null;
		onPointerOverCapture = null;
		result = null;
		validEvent = null;
	});

	it('should return an object which can be passed as props to component for handling mouse and pointer events', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(result).toStrictEqual(
			expect.objectContaining({
				onMouseEnter: expect.any(Function),
				onMouseEnterCapture: expect.any(Function),
				onMouseLeave: expect.any(Function),
				onMouseLeaveCapture: expect.any(Function),
				onMouseOut: expect.any(Function),
				onMouseOutCapture: expect.any(Function),
				onMouseOver: expect.any(Function),
				onMouseOverCapture: expect.any(Function),
				onPointerEnter: expect.any(Function),
				onPointerEnterCapture: expect.any(Function),
				onPointerLeave: expect.any(Function),
				onPointerLeaveCapture: expect.any(Function),
				onPointerOut: expect.any(Function),
				onPointerOutCapture: expect.any(Function),
				onPointerOver: expect.any(Function),
				onPointerOverCapture: expect.any(Function),
			}),
		);
	});

	it('should handle hover events correctly', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onPointerEnter, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerEnter, invalidEvent ?? {})).toBe(false);
		expect(isHoverHandler(onPointerLeave, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerLeave, invalidEvent ?? {})).toBe(false);
		expect(mockOnHover).toBeCalledTimes(1);
		expect(mockOnHover).toBeCalledWith(validEvent);
		expect(mockOnHoverStop).toBeCalledTimes(1);
		expect(mockOnHoverStop).toBeCalledWith(validEvent);
	});

	it('should handle hover events correctly during capturing', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onPointerEnterCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerEnterCapture, invalidEvent ?? {})).toBe(
			false,
		);
		expect(isHoverHandler(onPointerLeaveCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerLeaveCapture, invalidEvent ?? {})).toBe(
			false,
		);
		expect(mockOnHoverCapture).toBeCalledTimes(1);
		expect(mockOnHoverCapture).toBeCalledWith(validEvent);
		expect(mockOnHoverStopCapture).toBeCalledTimes(1);
		expect(mockOnHoverStopCapture).toBeCalledWith(validEvent);
	});

	it('should handle "mouseenter" events correctly', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onMouseEnter, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseEnter, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseEnter).toBeCalledTimes(1);
		expect(mockOnMouseEnter).toBeCalledWith(validEvent);
	});

	it('should handle "mouseenter" events correctly during capturing', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onMouseEnterCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseEnterCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseEnterCapture).toBeCalledTimes(1);
		expect(mockOnMouseEnterCapture).toBeCalledWith(validEvent);
	});

	it('should handle "mouseleave" events correctly', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onMouseLeave, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseLeave, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseLeave).toBeCalledTimes(1);
		expect(mockOnMouseLeave).toBeCalledWith(validEvent);
	});

	it('should handle "mouseleave" events correctly during capturing', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onMouseLeaveCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseLeaveCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseLeaveCapture).toBeCalledTimes(1);
		expect(mockOnMouseLeaveCapture).toBeCalledWith(validEvent);
	});

	it('should handle "mouseout" events correctly', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onMouseOut, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseOut, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseOut).toBeCalledTimes(1);
		expect(mockOnMouseOut).toBeCalledWith(validEvent);
	});

	it('should handle "mouseout" events correctly during capturing', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onMouseOutCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseOutCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseOutCapture).toBeCalledTimes(1);
		expect(mockOnMouseOutCapture).toBeCalledWith(validEvent);
	});

	it('should handle "mouseover" events correctly', () => {
		expect(index).toBe(10);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onMouseOver, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseOver, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseOver).toBeCalledTimes(1);
		expect(mockOnMouseOver).toBeCalledWith(validEvent);
	});

	it('should handle "mouseover" events correctly during capturing', () => {
		expect(index).toBe(11);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onMouseOverCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onMouseOverCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnMouseOverCapture).toBeCalledTimes(1);
		expect(mockOnMouseOverCapture).toBeCalledWith(validEvent);
	});

	it('should handle "pointerenter" events correctly', () => {
		expect(index).toBe(12);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onPointerEnter, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerEnter, invalidEvent ?? {})).toBe(false);
		expect(mockOnPointerEnter).toBeCalledTimes(1);
		expect(mockOnPointerEnter).toBeCalledWith(validEvent);
	});

	it('should handle "pointerenter" events correctly during capturing', () => {
		expect(index).toBe(13);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onPointerEnterCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerEnterCapture, invalidEvent ?? {})).toBe(
			false,
		);
		expect(mockOnPointerEnterCapture).toBeCalledTimes(1);
		expect(mockOnPointerEnterCapture).toBeCalledWith(validEvent);
	});

	it('should handle "pointerleave" events correctly', () => {
		expect(index).toBe(14);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onPointerLeave, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerLeave, invalidEvent ?? {})).toBe(false);
		expect(mockOnPointerLeave).toBeCalledTimes(1);
		expect(mockOnPointerLeave).toBeCalledWith(validEvent);
	});

	it('should handle "pointerleave" events correctly during capturing', () => {
		expect(index).toBe(15);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onPointerLeaveCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerLeaveCapture, invalidEvent ?? {})).toBe(
			false,
		);
		expect(mockOnPointerLeaveCapture).toBeCalledTimes(1);
		expect(mockOnPointerLeaveCapture).toBeCalledWith(validEvent);
	});

	it('should handle "pointerout" events correctly', () => {
		expect(index).toBe(16);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onPointerOut, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerOut, invalidEvent ?? {})).toBe(false);
		expect(mockOnPointerOut).toBeCalledTimes(1);
		expect(mockOnPointerOut).toBeCalledWith(validEvent);
	});

	it('should handle "pointerout" events correctly during capturing', () => {
		expect(index).toBe(17);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onPointerOutCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerOutCapture, invalidEvent ?? {})).toBe(false);
		expect(mockOnPointerOutCapture).toBeCalledTimes(1);
		expect(mockOnPointerOutCapture).toBeCalledWith(validEvent);
	});

	it('should handle "pointerover" events correctly', () => {
		expect(index).toBe(18);
		expect(error).toBeNull();
		expect(capturing).toBe(false);

		expect(isHoverHandler(onPointerOver, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerOver, invalidEvent ?? {})).toBe(false);
		expect(mockOnPointerOver).toBeCalledTimes(1);
		expect(mockOnPointerOver).toBeCalledWith(validEvent);
	});

	it('should handle "pointerover" events correctly during capturing', () => {
		expect(index).toBe(19);
		expect(error).toBeNull();
		expect(capturing).toBe(true);

		expect(isHoverHandler(onPointerOverCapture, validEvent ?? {})).toBe(true);
		expect(isHoverHandler(onPointerOverCapture, invalidEvent ?? {})).toBe(
			false,
		);
		expect(mockOnPointerOverCapture).toBeCalledTimes(1);
		expect(mockOnPointerOverCapture).toBeCalledWith(validEvent);
	});
});
