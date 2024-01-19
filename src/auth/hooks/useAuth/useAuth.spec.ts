import { renderHook } from '@testing-library/react';
import { useAuth } from './useAuth';

describe('useAuth()', () => {
	let mockInit: jest.Mock | null = null;

	beforeEach(() => {
		mockInit = jest.fn();

		renderHook(() => {
			useAuth();
		});
	});

	afterEach(() => {
		mockInit = null;
	});

	it('should...', () => {
		expect(mockInit).toBeCalled();
	});
});
