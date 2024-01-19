import { isCC } from './CC';
import { fakeCC } from './__test__';

describe('isCC()', (): void => {
	it('should return true given a valid CC', (): void => {
		expect(isCC(fakeCC())).toBe(true);
	});

	it('should return false given an invalid CC', (): void => {
		/* eslint-disable-next-line @typescript-eslint/naming-convention */
		expect(isCC(fakeCC({ On: null, Off: null }))).toBe(false);
	});
});
