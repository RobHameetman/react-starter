import { faker } from '@faker-js/faker';
import { UNICODE_REGEX_INPUTS } from '../UnicodeRegexInputs';

export const randomUnicodeRegexInputs = () =>
	faker.helpers.arrayElement(UNICODE_REGEX_INPUTS);
