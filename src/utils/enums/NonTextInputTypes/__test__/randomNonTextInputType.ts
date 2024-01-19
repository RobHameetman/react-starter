import { faker } from '@faker-js/faker';
import { NON_TEXT_INPUT_TYPES } from '../NonTextInputTypes';

export const randomNonTextInputType = () =>
	faker.helpers.arrayElement(NON_TEXT_INPUT_TYPES);
