import { faker } from '@faker-js/faker';
import { isString } from '@/utils/functions/check/js/core/isString';

export enum RenderStates {
	Disabled = 'disabled',
	Discrete = 'discrete',
	Grouped = 'grouped',
	Readonly = 'readonly',
}

export type RenderState = `${RenderStates}`;

export const randomState = () =>
	faker.helpers.arrayElement(Object.values(RenderStates).filter(isString));

export const enabledState = () =>
	faker.helpers.arrayElement([RenderStates.Discrete, RenderStates.Grouped]);

export const disabledOrReadonly = () =>
	faker.helpers.arrayElement([RenderStates.Disabled, RenderStates.Readonly]);
