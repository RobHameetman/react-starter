import { isFormContext } from './FormContext';
import { fakeFormContext } from './__test__';

describe('isFormContext()', () => {
	it('should return true given a valid FormContext', () => {
		expect(isFormContext(fakeFormContext())).toBe(true);
	});

	it('should return false given an invalid FormContext', () => {
		expect(isFormContext(fakeFormContext({ editable: null }))).toBe(false);
	});
});
