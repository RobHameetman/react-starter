import { isRadioContext } from './RadioContext';
import { fakeRadioContext } from './__test__';

describe('isRadioContext()', () => {
	it('should return true given a valid RadioContext', () => {
		expect(isRadioContext(fakeRadioContext())).toBe(true);
	});

	it('should return false given an invalid RadioContext', () => {
		expect(isRadioContext(fakeRadioContext({ setGroupValue: null }))).toBe(
			false,
		);
	});
});
