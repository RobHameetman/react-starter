import { ASCII_WORDS_REGEX } from './ASCII_WORDS_REGEX';

describe('ASCII_WORDS_REGEX', () => {
	it('should be a regular expression', () => {
		expect(ASCII_WORDS_REGEX).toBeInstanceOf(RegExp);
	});
});
