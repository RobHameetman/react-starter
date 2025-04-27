import { faker } from '@faker-js/faker';
import { fakeElementWithRole } from '@/utils/types/accessibility/ElementWithRole/__test__';
import { Link } from '../Link';

export const fakeLink = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const $element = fakeElementWithRole({ role: 'link', ...overrideProps });
	const { href = faker.internet.url(), target = faker.helpers.arrayElement(['_self', '_blank', '_parent', '_top']) } = overrideProps;

	return {
		...$element,
		href,
		target,
	} as Link;
};
