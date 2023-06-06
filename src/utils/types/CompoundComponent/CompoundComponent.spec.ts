import { isCompoundComponent } from './CompoundComponent';
import { fakeCompoundComponent } from './__test__';

describe('isCompoundComponent()', (): void => {
	it('should return true given a valid CompoundComponent', (): void => {
		expect(isCompoundComponent(fakeCompoundComponent())).toBe(true);
	});

	it('should return false given an invalid CompoundComponent', (): void => {
		expect(
			/* eslint-disable-next-line @typescript-eslint/naming-convention */
			isCompoundComponent(fakeCompoundComponent({ On: null, Off: null })),
		).toBe(false);
	});
});
