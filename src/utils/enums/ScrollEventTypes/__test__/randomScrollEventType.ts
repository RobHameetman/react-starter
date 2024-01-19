import { faker } from '@faker-js/faker';
import { SCROLL_EVENT_TYPES } from '../ScrollEventTypes';

export const randomScrollEventType = () =>
	faker.helpers.arrayElement(SCROLL_EVENT_TYPES);
