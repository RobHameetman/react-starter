import { CompoundComponentContext, isCompoundComponentContext } from './CompoundComponentContext';
import { fakeCompoundComponentContext } from './__test__';

describe('isCompoundComponentContext()', () => {
	it('should return true given a valid CompoundComponentContext', () => {
		expect(isCompoundComponentContext(fakeCompoundComponentContext())).toBe(true);
	});

	it('should return false given an invalid CompoundComponentContext', () => {
		expect(isCompoundComponentContext(fakeCompoundComponentContext({ theme: undefined }))).toBe(false);
	});
});
