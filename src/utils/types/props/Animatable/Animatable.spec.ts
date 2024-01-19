import { isAnimatable } from './Animatable';
import { fakeAnimatable } from './__test__';

describe('isAnimatable()', () => {
	it('should return true for a valid set of Animatable props', () => {
		expect(isAnimatable(fakeAnimatable())).toBe(true);
	});

	it('should return false for an invalid set of Animatable props', () => {
		expect(isAnimatable(fakeAnimatable({ animated: null }))).toBe(false);
	});
});
