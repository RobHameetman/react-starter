import { faker } from '@faker-js/faker';
import { CLIPBOARD_EVENT_TYPES } from '../CssGlobalValue';

export const randomClipboardEventType = () =>
	faker.helpers.arrayElement(CLIPBOARD_EVENT_TYPES);
