import { faker } from '@faker-js/faker';
import { TOUCH_EVENT_TYPES } from '../TouchEventTypes';

export const randomTouchEventType = () =>
	faker.helpers.arrayElement(TOUCH_EVENT_TYPES);
