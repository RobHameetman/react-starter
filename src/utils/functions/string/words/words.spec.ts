/* eslint-disable prettier/prettier */

import { default as unicodeFixture } from '@test/fixtures/unicodeFixture.json';
import { words } from './words';
import { fakeLargeWord, perf } from './__test__';

describe('words()', () => {
	it('should match words containing Latin unicode letters', () => {
		unicodeFixture.burredLetters.forEach((letter) => {
			expect(words(letter)).toStrictEqual([letter]);
		});
	});

	it('should support a custom pattern', () => {
		expect(words('abcd', /ab|cd/g)).toStrictEqual(['ab', 'cd']);
		expect(Array.from(words('abcd', /ab|cd/))).toStrictEqual(['ab']);
	});

	it('should work with compound words', () => {
		expect(words('12ft')).toStrictEqual(['12', 'ft']);
    expect(words('aeiouAreVowels')).toStrictEqual(['aeiou', 'Are', 'Vowels']);
    expect(words('enable 6h format')).toStrictEqual(['enable', '6', 'h', 'format']);
    expect(words('enable 24H format')).toStrictEqual(['enable', '24', 'H', 'format']);
    expect(words('isISO8601')).toStrictEqual(['is', 'ISO', '8601']);
    expect(words('LETTERSAeiouAreVowels')).toStrictEqual(['LETTERS', 'Aeiou', 'Are', 'Vowels']);
    expect(words('tooLegit2Quit')).toStrictEqual(['too', 'Legit', '2', 'Quit']);
    expect(words('walk500Miles')).toStrictEqual(['walk', '500', 'Miles']);
    expect(words('xhr2Request')).toStrictEqual(['xhr', '2', 'Request']);
    expect(words('XMLHttp')).toStrictEqual(['XML', 'Http']);
    expect(words('XmlHTTP')).toStrictEqual(['Xml', 'HTTP']);
    expect(words('XmlHttp')).toStrictEqual(['Xml', 'Http']);
	});

	it('should work with compound words that have diacritical marks', () => {
		expect(words('LETTERSÆiouAreVowels')).toStrictEqual(['LETTERS', 'Æiou', 'Are', 'Vowels']);
    expect(words('æiouAreVowels')).toStrictEqual(['æiou', 'Are', 'Vowels']);
    expect(words('æiou2Consonants')).toStrictEqual(['æiou', '2', 'Consonants']);
	});

	it('should not treat contractions as separate words', () => {
		unicodeFixture.postfixes.forEach((postfix) => {
			expect(words(`a b${postfix} c`)).toStrictEqual(['a', `b${postfix}`, 'c']);
		});
	});

	it('should not treat ordinal numbers as separate words', () => {
		unicodeFixture.ordinals.forEach((ordinal) => {
			expect(words(`${ordinal} time`)).toStrictEqual([ordinal, 'time']);
		});
	});

	it('should not treat mathematical operators as separate words', () => {
		unicodeFixture.operators.forEach((operator) => {
			expect(words(`1${operator}1`)).toStrictEqual([`1${operator}1`]);
		});
	});

	/**
	 * Skipping this one for now because I need to dive deeper into the
	 * Performance module and how DOMHighResTimeStamp works. The value I get is
	 * ~0.5 and I don't know what this means. Is this in seconds? Milliseconds? Is
	 * it something like Date.now() where it's a timestamp in milliseconds since
	 * the Unix epoch? I need answers.
	 */
	it.skip('should not be vulnerable to Regex Denial of Service (ReDoS) attacks', () => {
		expect(perf(() => words(fakeLargeWord))).toBeLessThan(1000);
	});
});
