import { faker } from '@faker-js/faker';
import { SORT_ORDERS } from '../SortOrder';

export const randomSortOrder = () => faker.helpers.arrayElement(SORT_ORDERS);
