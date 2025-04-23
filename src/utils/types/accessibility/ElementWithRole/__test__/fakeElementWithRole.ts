import { faker } from '@faker-js/faker';
import { fakeHtmlElement } from '@/utils/functions/check/html/isHtmlElement/__test__';
import { fakeAttributes } from '@/utils/types/dom/Attributes/__test__';
import { ElementWithRole } from '../ElementWithRole';

export const fakeElementWithRole = <R extends string>({
	ssr = typeof window === 'undefined',
	role = faker.lorem.word(),
	...overrideProps
}: Record<string, unknown> = {}) => {
	const elementWithRole = fakeHtmlElement({
		ssr,
		attributes: fakeAttributes({ attrName: 'role', attrValue: role }),
		role,
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(elementWithRole, key) || {
			writable: false,
		};

		Object.defineProperty(elementWithRole, key, {
			...prop,
			value,
		});
	});

	return elementWithRole as unknown as ElementWithRole<R>;
};
