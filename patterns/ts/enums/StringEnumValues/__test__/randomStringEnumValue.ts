import { faker } from '@faker-js/faker';
import { STRING_ENUM_VALUES } from '../StringEnumValues';

export const randomStringEnumValue = () => faker.helpers.arrayElement(STRING_ENUM_VALUES);
