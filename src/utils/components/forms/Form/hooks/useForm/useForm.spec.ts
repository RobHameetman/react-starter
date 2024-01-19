import { renderHook } from '@testing-library/react';
import { isFormContext } from '../../contexts/FormContext';
import { useForm } from './useForm';

describe('useForm()', () => {
	let $context: unknown = null;

	beforeEach(() => {
		({
			result: { current: $context },
		} = renderHook(() => useForm()));
	});

	afterEach(() => {
		$context = null;
	});

	it('should return a valid FormContext', () => {
		expect(isFormContext($context)).toBe(true);
	});
});
