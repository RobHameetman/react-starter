import { isSyntheticEvent } from './isSyntheticEvent';
import { fakeSyntheticEvent } from './__test__';

describe('isSyntheticEvent()', () => {
	it('should return true given a valid SyntheticEvent', () => {
		expect(isSyntheticEvent(fakeSyntheticEvent())).toBe(true);
	});

	it('should return false given an invalid SyntheticEvent', () => {
		expect(isSyntheticEvent(fakeSyntheticEvent({ type: null }))).toBe(false);
	});
});
