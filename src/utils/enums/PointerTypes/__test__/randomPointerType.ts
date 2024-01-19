import { faker } from '@faker-js/faker';
import { POINTER_TYPES } from '../PointerTypes';

export const randomPointerType = () =>
	faker.helpers.arrayElement(POINTER_TYPES);
