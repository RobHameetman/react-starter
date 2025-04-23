import { renderHook } from '@testing-library/react';
import { useBreakpoints } from './useBreakpoints';

describe('useBreakpoints()', () => {
	beforeEach(() => {
		renderHook(() => {
			useBreakpoints();
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it.todo('should ...');
});
