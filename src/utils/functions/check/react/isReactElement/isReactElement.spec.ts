import { isReactElement } from './isReactElement';
import { fakeReactElement } from './__test__';

describe('isReactElement()', () => {
	it('should return true given a valid ReactElement', () => {
		expect(isReactElement(fakeReactElement())).toBe(true);
	});

	it('should return false given an invalid ReactElement', () => {
		expect(isReactElement(fakeReactElement({ invalid: true }))).toBe(false);
	});
});
