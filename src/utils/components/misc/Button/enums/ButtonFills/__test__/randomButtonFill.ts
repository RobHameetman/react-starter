import { faker } from '@faker-js/faker';
import { BUTTON_FILLS } from '../ButtonFills';

export const randomButtonFill = () => faker.helpers.arrayElement(BUTTON_FILLS);
