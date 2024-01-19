import { faker } from '@faker-js/faker';
import { DRAG_EVENT_TYPES } from '../DragEventTypes';

export const randomDragEventType = () =>
	faker.helpers.arrayElement(DRAG_EVENT_TYPES);
