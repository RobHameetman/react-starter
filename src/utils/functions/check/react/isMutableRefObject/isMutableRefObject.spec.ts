import { isMutableRefObject } from './isMutableRefObject';
import { fakeMutableRefObject } from './__test__';

describe('isMutableRefObject()', () => {
	it('should return true given a valid MutableRefObject with current value', () => {
		expect(
			isMutableRefObject(fakeMutableRefObject(document.createElement('div'))),
		).toBe(true);
	});

	it('should return true given a valid MutableRefObject without current value', () => {
		expect(isMutableRefObject(fakeMutableRefObject())).toBe(true);
	});

	it('should return false given an empty object', () => {
		expect(isMutableRefObject({})).toBe(false);
	});

	it('should return false given an invalid MutableRefObject', () => {
		expect(isMutableRefObject({ prop1: 'data' })).toBe(false);
	});
});
