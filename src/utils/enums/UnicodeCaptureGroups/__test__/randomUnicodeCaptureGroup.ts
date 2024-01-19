import { faker } from '@faker-js/faker';
import { UNICODE_CAPTURE_GROUPS } from '../UnicodeCaptureGroups';

export const randomUnicodeCaptureGroup = () =>
	faker.helpers.arrayElement(UNICODE_CAPTURE_GROUPS);
