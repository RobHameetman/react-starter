import { isHandlerPropName } from './HandlerPropName';
import { fakeHandlerPropName as fakePropName } from './__test__';

describe('isHandlerPropName()', () => {
	it('should return true given a valid HandlerPropName', () => {
		expect(isHandlerPropName(fakePropName())).toBe(true);
	});

	it('should return false given an invalid HandlerPropName', () => {
		expect(isHandlerPropName(fakePropName({ invalid: true }))).toBe(false);
	});
});
