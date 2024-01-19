import { fakeSpaceEvent } from '@app/utils/types/events/SpaceEvent/__test__';
import { isSpaceEventHandler } from './SpaceEventHandler';
import { mockSpaceEventHandler } from './__test__';

const e = fakeSpaceEvent();

describe('isSpaceEventHandler()', () => {
	it('should return true given a valid SpaceEventHandler', () => {
		expect(isSpaceEventHandler(mockSpaceEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid SpaceEventHandler', () => {
		expect(isSpaceEventHandler((() => null)(), e)).toBe(false);
	});
});
