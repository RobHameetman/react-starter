import { isCheckboxContext } from './CheckboxContext';
import { fakeCheckboxContext } from './__test__';

describe('isCheckboxContext()', () => {
	it('should return true given a valid CheckboxContext', () => {
		expect(isCheckboxContext(fakeCheckboxContext())).toBe(true);
	});

	it('should return false given an invalid CheckboxContext', () => {
		expect(
			isCheckboxContext(fakeCheckboxContext({ setGroupValue: null })),
		).toBe(false);
	});
});
