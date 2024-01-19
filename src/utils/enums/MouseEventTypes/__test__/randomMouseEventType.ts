import { faker } from '@faker-js/faker';
import { MOUSE_EVENT_TYPES } from '../MouseEventTypes';

export const randomMouseEventType = () =>
	faker.helpers.arrayElement(MOUSE_EVENT_TYPES);
