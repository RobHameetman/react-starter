import { faker } from '@faker-js/faker';
import { CSS_GLOBAL_VALUES } from '../CssGlobalValue';

export const randomCssGlobalValue = () =>
	faker.helpers.arrayElement(CSS_GLOBAL_VALUES);
