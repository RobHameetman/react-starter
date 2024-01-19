import { faker } from '@faker-js/faker';
import { MutableRefObject } from 'react';
import { ContentRenderFn } from '../ContentRenderFn';

type Ref<T extends HTMLElement = HTMLDivElement> = MutableRefObject<T | null>;

export const fakeContentRenderFn = <
	T extends HTMLElement = HTMLDivElement,
>(): [ContentRenderFn<T>, Ref<T>] => {
	const renderContent = ((content: Ref<T>) =>
		<>{content.current}</>) as ContentRenderFn<T>;

	const content = { current: faker.helpers.arrayElement([<div />, null]) } as Ref<T>;

	return [renderContent, content];
};
