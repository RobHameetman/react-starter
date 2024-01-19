import { UNIQUE_ID_PREFIX } from './UNIQUE_ID_PREFIX';

describe('UNIQUE_ID_PREFIX', () => {
	it('should be a string', () => {
		expect(UNIQUE_ID_PREFIX).toBe(expect.any(String));
	});
});
