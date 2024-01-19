import { faker } from '@faker-js/faker';
import { HOVER_EVENT_TYPES } from '../HoverEventTypes';

export const randomHoverEventType = () =>
	faker.helpers.arrayElement(HOVER_EVENT_TYPES);
