import { faker } from '@faker-js/faker';
import { KBD_MODIFIERS, KbdModifier } from '../KbdModifiers';

export const randomKbdModifier = () =>
	faker.helpers.arrayElement(KBD_MODIFIERS) as KbdModifier;
