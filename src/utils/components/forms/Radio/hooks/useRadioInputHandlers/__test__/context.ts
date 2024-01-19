import type { RenderState } from './randomState';

export const context = (state: RenderState) => ({
	addToGroupValue: jest.fn(() => 'foo,bar,baz'),
	groupValueIncludes: jest.fn((value: string) => value === 'foo'),
	getGroupValue: jest.fn(() => (state === 'grouped' ? '' : null)),
	removeFromGroupValue: jest.fn(() => 'bar,baz'),
	setGroupValue: jest.fn(),
});
