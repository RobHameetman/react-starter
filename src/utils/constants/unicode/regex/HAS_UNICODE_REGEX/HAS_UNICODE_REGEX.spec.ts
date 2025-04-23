import { default as unicodeFixture } from '@@/fixtures/unicodeFixture.json';
import { HAS_UNICODE_REGEX } from './HAS_UNICODE_REGEX';

describe('HAS_UNICODE_REGEX', () => {
	it('should be a regular expression', () => {
		expect(HAS_UNICODE_REGEX).toBeInstanceOf(RegExp);
	});

	it('should match emoji and complex Unicode strings', () => {
		unicodeFixture.mixed.forEach((value) => {
			expect(value.match(HAS_UNICODE_REGEX)).toStrictEqual([value]);
		});
	});

	it('should not match ASCII strings', () => {
		expect('no'.match(HAS_UNICODE_REGEX)).toStrictEqual([null]);
	});
});
