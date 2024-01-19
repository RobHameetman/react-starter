import { faker } from '@faker-js/faker';
import { CARD_VARIANTS } from '../CardVariants';

export const randomCardVariant = () =>
	faker.helpers.arrayElement(CARD_VARIANTS);
