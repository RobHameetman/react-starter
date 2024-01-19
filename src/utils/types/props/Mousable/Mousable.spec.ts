import { isMousable } from './Mousable';
import { fakeMousable } from './__test__';

describe('isMousable()', () => {
	it('should return true for a valid set of Mousable props', () => {
		expect(isMousable(fakeMousable())).toBe(true);
	});

	it('should return false for an invalid set of Mousable props', () => {
		expect(isMousable(fakeMousable({ onClick: null }))).toBe(false);
	});
});
