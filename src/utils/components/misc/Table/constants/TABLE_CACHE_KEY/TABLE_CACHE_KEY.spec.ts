import { isString } from '@/utils/functions/check/js/core/isString';
import { TABLE_CACHE_KEY } from './TABLE_CACHE_KEY';

describe('TABLE_CACHE_KEY', () => {
	it('should be a string', () => {
		expect(isString(TABLE_CACHE_KEY)).toBe(true);
	});
});
