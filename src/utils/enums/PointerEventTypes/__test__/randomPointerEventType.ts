import { faker } from '@faker-js/faker';
import { POINTER_EVENT_TYPES } from '../PointerEventTypes';

export const randomPointerEventType = () =>
	faker.helpers.arrayElement(POINTER_EVENT_TYPES);
