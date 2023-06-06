import { APP_BASENAME } from './APP_BASENAME';

describe('APP_BASENAME', (): void => {
	it('should be a string', (): void => {
		expect(typeof APP_BASENAME).toBe('string');
	});
});
