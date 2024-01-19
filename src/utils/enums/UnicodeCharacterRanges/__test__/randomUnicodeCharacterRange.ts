import { faker } from '@faker-js/faker';
import { UNICODE_CHARACTER_RANGES } from '../UnicodeCharacterRanges';

export const randomUnicodeCharacterRange = () =>
	faker.helpers.arrayElement(UNICODE_CHARACTER_RANGES);
