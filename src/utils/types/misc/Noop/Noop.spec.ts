import { isNoop } from './Noop';
import { randomNoop } from './__test__';

describe('isNoop()', () => {
	it('should return true given a valid Noop', () => {
		expect(isNoop(randomNoop())).toBe(true);
	});

	it('should return false given an invalid Noop', () => {
		expect(isNoop((() => {})())).toBe(false);
	});
});
