import { faker } from '@faker-js/faker';
import { FOCUS_EVENT_TYPES } from '../FocusEventTypes';

export const randomFocusEventType = () =>
	faker.helpers.arrayElement(FOCUS_EVENT_TYPES);
