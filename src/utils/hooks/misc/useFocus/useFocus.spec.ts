import { faker } from '@faker-js/faker';
import { renderHook } from '@testing-library/react';
import { mockWindow } from '@test/mocks/misc/mockWindow';
import { useMediaQuery } from './useMediaQuery';

describe('useMediaQuery()', () => {
	let addListenerSpy: jest.Mock | null = null;
	let removeListenerSpy: jest.Mock | null = null;
	let mockHasMediaQuery: jest.Mock | null = null;
	let windowSpy: jest.SpyInstance | null = null;
	let expected: unknown = null;
	let result: unknown = null;

	beforeEach(() => {
		addListenerSpy = jest.fn();
		removeListenerSpy = jest.fn();

		expected = faker.datatype.boolean();

		mockWindow({
			matchMedia: jest.fn().mockImplementation((query: string) => ({
				matches: expected,
				media: query,
				onchange: null,
				addListener: addListenerSpy,
				removeListener: removeListenerSpy,
			})),
		});

		mockHasMediaQuery = jest.fn(() => expected);

		({
			result: { current: result },
		} = renderHook(() =>
			useMediaQuery({
				query: '(prefers-color-scheme: dark)',
				_dependencies: {
					/* @ts-expect-error - ??? */
					hasMediaQuery: mockHasMediaQuery,
				},
			}),
		));
	});

	afterEach(() => {
		jest.restoreAllMocks();

		addListenerSpy = null;
		removeListenerSpy = null;
		mockHasMediaQuery = null;
		windowSpy = null;
		expected = null;
		result = null;
	});

	it('should check that the media query is present', () => {
		expect(mockHasMediaQuery).toBeCalled();
	});

	it('should return a boolean based on whether the media query is present', () => {
		expect(result).toBe(expected);
	});

	it('should listen for changes to the media query', () => {
		expect(addListenerSpy).toBeCalled();
	});
});
