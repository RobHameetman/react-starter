import { faker } from '@faker-js/faker';
import {
	INTERACTION_MODALITIES,
	InteractionModality,
} from '../InteractionModalities';

export const randomInteractionModality = () =>
	faker.helpers.arrayElement(INTERACTION_MODALITIES) as InteractionModality;
