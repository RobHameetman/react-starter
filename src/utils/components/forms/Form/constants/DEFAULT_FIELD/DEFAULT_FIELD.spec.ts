import { DEFAULT_FIELD } from './DEFAULT_FIELD';
import { isFormField } from '../../types/FormField';

describe('DEFAULT_FIELD', () => {
	it('should be a valid FormField', () => {
		expect(isFormField(DEFAULT_FIELD)).toBe(true);
	});
});
