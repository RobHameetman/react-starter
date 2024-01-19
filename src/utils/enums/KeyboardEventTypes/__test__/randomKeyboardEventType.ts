import { faker } from '@faker-js/faker';
import { KEYBOARD_EVENT_TYPES } from '../KeyboardEventTypes';

export const randomKeyboardEventType = () =>
	faker.helpers.arrayElement(KEYBOARD_EVENT_TYPES);
