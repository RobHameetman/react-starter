import { isInputElement } from './isInputElement';

describe('isInputElement()', () => {
	it('should return true given an HTML <input /> element', () => {
		expect(isInputElement(document.createElement('input'))).toBe(true);
	});

	it('should return true given an HTML element which is not <input />', () => {
		expect(isInputElement(document.createElement('div'))).toBe(false);
	});
});
