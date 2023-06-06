import { useContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { AuthContext, isAuthContext } from './AuthContext';

describe('AuthContext', () => {
	let $context: unknown = null;

	beforeEach(() => {
		({
			result: { current: $context },
		} = renderHook(() => useContext(AuthContext)));
	});

	afterEach(() => {
		$context = null;
	});

	it('should be a valid AuthContext', () => {
		expect(isAuthContext($context)).toBe(true);
	});
});
