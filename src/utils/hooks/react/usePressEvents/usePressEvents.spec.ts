import { renderHook } from '@testing-library/react';
import { fakePressEvent } from '@/utils/types/events/PressEvent/__test__';
import { isPressEventHandler } from '@/utils/types/handlers/PressEventHandler';
import { usePressEvents } from './usePressEvents';

describe('usePressEvents()', () => {
	let mockOnPress: jest.Mock | null = null;
	let invalidEvent: Record<string, unknown> | null = null;
	let validEvent: Record<string, unknown> | null = null;
	let result: unknown = null;

	beforeEach(() => {
		mockOnPress = jest.fn();

		validEvent = fakePressEvent();
		invalidEvent = fakePressEvent({ key: 'a', pointerType: null });

		({
			result: { current: result },
		} = renderHook(() =>
			/* @ts-expect-error - Type signatures don't match */
			usePressEvents({ onPress: mockOnPress }),
		));
	});

	afterEach(() => {
		result = null;
		validEvent = null;
		invalidEvent = null;
		mockOnPress = null;
	});

	it('should return a valid PressEventHandler', () => {
		expect(isPressEventHandler(result, validEvent ?? {})).toBe(true);
		expect(isPressEventHandler(result, invalidEvent ?? {})).toBe(false);
		expect(mockOnPress).toBeCalledTimes(1);
		expect(mockOnPress).toBeCalledWith(validEvent);
	});
});
