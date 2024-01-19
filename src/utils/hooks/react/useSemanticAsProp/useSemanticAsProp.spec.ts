import { renderHook } from '@testing-library/react';
import { useSemanticAsProp } from './useSemanticAsProp';

describe('useSemanticAsProp()', () => {
	let mockAs: jest.Mock | string | null = null;
	let result: unknown = null;

	beforeEach(() => {
		mockAs = 'main';

		({
			result: { current: result },
		} = renderHook(() =>
			/* @ts-expect-error - Type signatures don't match */
			useSemanticAsProp({ as: mockAs }),
		));
	});

	afterEach(() => {
		result = null;
		mockAs = null;
	});

	it('should return the value of "as" type-casted for use as a JSX Element', () => {
		expect(result).toBe(mockAs);
	});
});
