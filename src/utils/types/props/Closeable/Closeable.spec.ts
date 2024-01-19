import { isCloseable } from './Closeable';
import { fakeCloseable } from './__test__';

describe('isCloseable()', () => {
	it('should return true for a valid set of Closeable props', () => {
		expect(isCloseable(fakeCloseable())).toBe(true);
	});

	it('should return false for an invalid set of Closeable props', () => {
		expect(isCloseable(fakeCloseable({ onClose: null }))).toBe(false);
	});
});
