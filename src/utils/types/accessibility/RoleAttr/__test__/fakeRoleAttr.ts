import { faker } from '@faker-js/faker';
import { fakeNode } from '@app/utils/functions/check/dom/isNode/__test__';
import { fakeAttr } from '@app/utils/types/dom/Attr/__test__';
import { RoleAttr } from '../RoleAttr';

export const fakeRoleAttr = <V extends string = string>({
	ssr = typeof window === 'undefined',
	attrValue = faker.lorem.word(),
	...overrideProps
}: Record<string, unknown> = {}) => {
	const roleAttr = fakeAttr({
		ssr,
		attrName: 'role',
		attrValue,
		...overrideProps,
	});

	return roleAttr as RoleAttr<V>;
};
