import { isFormFields } from './FormFields';
import { fakeFormFields } from './__test__';

describe('isFormFields()', () => {
	it('should return true given a valid FormFields', () => {
		expect(isFormFields(fakeFormFields())).toBe(true);
	});

	it('should return false given an invalid FormFields', () => {
		expect(isFormFields(fakeFormFields({ field1: {} }))).toBe(false);
	});
});
