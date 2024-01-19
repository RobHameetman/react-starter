import { faker } from '@faker-js/faker';
import { SORT_TYPES } from '../SortType';

export const randomSortType = () => faker.helpers.arrayElement(SORT_TYPES);
