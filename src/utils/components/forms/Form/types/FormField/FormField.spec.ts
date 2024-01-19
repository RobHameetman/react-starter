import { isFormField } from './FormField';
import { fakeFormField } from './__test__';

describe('isFormField()', () => {
	it('should return true given a valid FormField', () => {
		expect(isFormField(fakeFormField())).toBe(true);
	});

	it('should return false given an invalid FormField', () => {
		expect(isFormField(fakeFormField({ error: false }))).toBe(false);
	});
});
