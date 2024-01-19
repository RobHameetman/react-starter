import { faker } from '@faker-js/faker';
import { SIZES } from '../Sizes';

export const randomSize = () => faker.helpers.arrayElement(SIZES);
