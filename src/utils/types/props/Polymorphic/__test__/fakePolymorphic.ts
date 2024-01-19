import { FC } from 'react';
import { faker } from '@faker-js/faker';
import { fakeReactElement } from '@app/utils/functions/check/react/isReactElement/__test__';

export const fakePolymorphic = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	as: faker.helpers.arrayElement([fakeReactElement, faker.string.sample])(),
	...overrideProps,
});
