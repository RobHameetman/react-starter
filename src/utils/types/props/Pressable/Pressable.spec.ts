import { isPressable } from './Pressable';
import { fakePressable } from './__test__';

describe('isPressable()', () => {
	it('should return true for a valid set of Pressable props', () => {
		expect(isPressable(fakePressable())).toBe(true);
	});

	it('should return false for an invalid set of Pressable props', () => {
		expect(isPressable(fakePressable({ onPress: null }))).toBe(false);
	});
});
