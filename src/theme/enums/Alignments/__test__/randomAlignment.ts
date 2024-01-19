import { faker } from '@faker-js/faker';
import { ALIGNMENTS } from '../Alignments';

export const randomAlignment = faker.helpers.arrayElement(ALIGNMENTS);
