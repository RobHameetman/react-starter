import { faker } from '@faker-js/faker';
import { FormModes } from '../FormModes';

export const randomFormMode = () =>
	faker.helpers.arrayElement([FormModes.Read, FormModes.Write]);
