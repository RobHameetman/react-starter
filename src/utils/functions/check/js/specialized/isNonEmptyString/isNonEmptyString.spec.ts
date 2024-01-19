import { faker } from '@faker-js/faker';
import { isNonEmptyString } from './isNonEmptyString';

describe('isNonEmptyString()', () => {
	it('should return true given a non-empty string', () => {
		expect(isNonEmptyString(faker.string.sample())).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isNonEmptyString('')).toBe(false);
	});
});
