import { faker } from '@faker-js/faker';
import { PRESS_EVENT_TYPES } from '../PressEventTypes';

export const randomPressEventTypes = () =>
	faker.helpers.arrayElement(PRESS_EVENT_TYPES);
