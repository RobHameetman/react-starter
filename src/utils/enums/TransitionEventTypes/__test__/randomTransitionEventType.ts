import { faker } from '@faker-js/faker';
import { TRANSITION_EVENT_TYPES } from '../TransitionEventTypes';

export const randomTransitionEventType = () =>
	faker.helpers.arrayElement(TRANSITION_EVENT_TYPES);
