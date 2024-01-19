import { isLabelable } from './Labelable';
import { fakeLabelable } from './__test__';

describe('isLabelable()', () => {
	it('should return true for a valid set of Labelable props', () => {
		expect(isLabelable(fakeLabelable())).toBe(true);
	});

	it('should return false for an invalid set of Labelable props', () => {
		expect(isLabelable(fakeLabelable({ name: null }))).toBe(false);
	});
});
