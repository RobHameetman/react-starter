import { IS_UNICODE_REGEX } from './IS_UNICODE_REGEX';

describe('IS_UNICODE_REGEX', () => {
	it('should be a regular expression', () => {
		expect(IS_UNICODE_REGEX).toBeInstanceOf(RegExp);
	});
});
