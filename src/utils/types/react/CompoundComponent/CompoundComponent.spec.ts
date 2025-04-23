import { isCompoundComponent } from './CompoundComponent';
import { fakeCompoundComponent } from './__test__';

describe('isCompoundComponent()', () => {
	it('should return true given a valid CompoundComponent', () =>
		expect(isCompoundComponent(fakeCompoundComponent())).toBe(true);
	});

	it('should return false given an invalid CompoundComponent', () =>
		expect(
			/* eslint-disable-next-line @typescript-eslint/naming-convention */
			isCompoundComponent(fakeCompoundComponent({ On: null, Off: null })),
		).toBe(false);
	});
});
