import { fakeSyntheticEvent as fakeEvent } from '@app/utils/functions/check/react/isSyntheticEvent/__test__';
import { isCapturing } from './isCapturing';

const {
	AT_TARGET,
	BUBBLING_PHASE: BUBBLING,
	CAPTURING_PHASE: CAPTURING,
	NONE,
} = Event;

describe('isCapturing()', () => {
	it('should return true given an event in the capturing phase', () => {
		expect(isCapturing(fakeEvent({ eventPhase: CAPTURING }))).toBe(true);
	});

	it('should return false given an event in the bubbling phase', () => {
		expect(isCapturing(fakeEvent({ eventPhase: BUBBLING }))).toBe(false);
	});

	it('should return false given an event at the target', () => {
		expect(isCapturing(fakeEvent({ eventPhase: AT_TARGET }))).toBe(false);
	});

	it('should return false given an event which is not being processed', () => {
		expect(isCapturing(fakeEvent({ eventPhase: NONE }))).toBe(false);
	});
});
