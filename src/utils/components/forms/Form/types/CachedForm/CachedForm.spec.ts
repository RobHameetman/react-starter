import { isCachedForm } from './CachedForm';
import { fakeCachedForm } from './__test__';

describe('isCachedForm()', () => {
	it('should return true given a valid CachedForm', () => {
		expect(isCachedForm(fakeCachedForm())).toBe(true);
	});

	it('should return false given an invalid CachedForm', () => {
		expect(isCachedForm(fakeCachedForm({ mode: null }))).toBe(false);
	});
});
