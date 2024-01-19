import { isLoadable } from './Loadable';
import { fakeLoadable } from './__test__';

describe('isLoadable()', () => {
	it('should return true for a valid set of Loadable props', () => {
		expect(isLoadable(fakeLoadable())).toBe(true);
	});

	it('should return false for an invalid set of Loadable props', () => {
		expect(isLoadable(fakeLoadable({ onLoad: null }))).toBe(false);
	});
});
