import { faker } from '@faker-js/faker';
import { ENUM_VALUES } from '../EnumValues';

export const randomEnumValue = () => faker.helpers.arrayElement(ENUM_VALUES);
