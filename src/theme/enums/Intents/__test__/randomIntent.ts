import { faker } from '@faker-js/faker';
import { INTENTS } from '../Intents';

export const randomIntent = () => faker.helpers.arrayElement(INTENTS);
