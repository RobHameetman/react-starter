import { areErrors } from './Errors';
import { fakeErrors } from './__test__';

describe('areErrors()', () => {
	it('should return true given a valid Errors', () => {
		expect(areErrors(fakeErrors())).toBe(true);
	});

	it('should return false given an invalid Errors', () => {
		expect(areErrors(fakeErrors({ invalid: true }))).toBe(false);
	});

	it('should return false given null', () => {
		expect(areErrors(null)).toBe(false);
	});
});
