import { areAttributes } from './Attributes';
import { fakeAttributes } from './__test__';

describe('areAttributes()', () => {
	it('should return true given a valid CloseEvent', () => {
		expect(areAttributes(fakeAttributes())).toBe(true);
	});

	it('should return false given an invalid CloseEvent', () => {
		expect(areAttributes(fakeAttributes({ type: 'drag' }))).toBe(false);
	});
});
