import { UNICODE_WORDS_REGEX } from './UNICODE_WORDS_REGEX';

describe('UNICODE_WORDS_REGEX', () => {
	it('should be a regular expression', () => {
		expect(UNICODE_WORDS_REGEX).toBeInstanceOf(RegExp);
	});
});
