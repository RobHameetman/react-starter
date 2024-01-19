import { default as unicodeFixture } from '@test/fixtures/unicodeFixture.json';
import { UNICODE_STRING_REGEX } from './UNICODE_STRING_REGEX';

describe('UNICODE_STRING_REGEX', () => {
	it('should be a regular expression', () => {
		expect(UNICODE_STRING_REGEX).toBeInstanceOf(RegExp);
	});

	it('should match emoji and complex Unicode strings', () => {
		unicodeFixture.mixed.forEach((value) => {
			expect(value.match(UNICODE_STRING_REGEX)).toStrictEqual([value]);
		});
	});

	it('should not match ASCII strings', () => {
		expect('no'.match(UNICODE_STRING_REGEX)).toStrictEqual([null]);
	});
});
