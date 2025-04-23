import { RenderHookResult, act, renderHook } from '@testing-library/react';
import { UseControlledSuspenseInput, useControlledSuspense } from './useControlledSuspense';
import noop from 'lodash/noop';

type Result = ReturnType<typeof useControlledSuspense>;
type Props = UseControlledSuspenseInput;

describe('useControlledSuspense()', () => {
	let mockOnLoad: jest.Mock | null = null;
	let mockOnSuspend: jest.Mock | null = null;
	let suspend: jest.Mock | null = null;
	let error: Error | null = null;
	let result: RenderHookResult<Result, Props>['result'] | null = null;
	let rerender: RenderHookResult<Result, Props>['rerender'] | null = null;

	beforeAll(() => {
		mockOnLoad = jest.fn();
		mockOnSuspend = jest.fn();

		suspend = jest.fn()
			.mockReturnValueOnce(false)
			.mockReturnValueOnce(false)
			.mockReturnValueOnce(false)
			.mockReturnValueOnce(false)
			.mockReturnValueOnce(true)
			.mockReturnValueOnce(true)
			.mockReturnValueOnce(true)
			.mockReturnValueOnce(true)
			.mockReturnValueOnce(true)
			.mockReturnValueOnce(true)
			.mockReturnValue(false);
	});

	beforeEach(() => {
		try {
			({
				result,
				rerender,
			} = renderHook((props) =>
				useControlledSuspense(props), {
					initialProps: {
						suspend: suspend?.(),
						onLoad: mockOnLoad ?? jest.fn(),
						onSuspend: mockOnSuspend ?? jest.fn(),
					} as Props
				}
			));

			// const setSuspended = result?.current[2] ?? noop;

			// rerender({ suspend: !initiallySuspended });
			// setSuspended(initiallySuspended as boolean);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.clearAllMocks();

		error = null;
		result = null;
		rerender = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();

		mockOnLoad = null;
		mockOnSuspend = null;
		suspend = null;
	});

	it('should return an array with the promise to throw, the current loading state, and a setter', () => {
		expect(error).toBeNull();
		expect(result?.current).toBeInstanceOf(Array);
		expect(result?.current).toHaveLength(3);
		expect(result?.current.at(0)).toBeInstanceOf(Promise);
		expect(result?.current.at(1)).toEqual(expect.any(Boolean));
		expect(result?.current.at(2)).toEqual(expect.any(Function));
	});

	describe('when initialized in the default suspend state', () => {
		it('should return isLoading as false', () => {
			expect(error).toBeNull();
			expect(result?.current.at(1)).toBe(false);
		});

		it('should call onLoad()', () => {
			expect(error).toBeNull();
			expect(mockOnLoad).toHaveBeenCalledTimes(1);
		});

		it('should call onSuspend()', () => {
			expect(error).toBeNull();
			expect(mockOnSuspend).toHaveBeenCalledTimes(1);
		});
	});

	describe('when initialized in a suspended state', () => {
		it('should return isLoading as true', () => {
			expect(error).toBeNull();
			expect(result?.current.at(1)).toBe(true);
		});

		it('should not call onLoad()', () => {
			expect(error).toBeNull();
			expect(mockOnLoad).not.toHaveBeenCalled();
		});

		it('should not call onSuspend()', () => {
			expect(error).toBeNull();
			expect(mockOnSuspend).not.toHaveBeenCalled();
		});
	});

	describe('when suspend prop changes from true to false', () => {
		beforeEach(() => {
			try {
				jest.clearAllMocks();

				rerender?.({
					suspend: false,
					onLoad: mockOnLoad ?? jest.fn(),
					onSuspend: mockOnSuspend ?? jest.fn(),
				});
			} catch (err) {
				error = err as Error;
			}
		});

		it('should update isLoading to false', () => {
			expect(error).toBeNull();
			expect(result?.current.at(1)).toBe(false);
		});

		it('should call onLoad()', () => {
			expect(error).toBeNull();
			expect(mockOnLoad).toHaveBeenCalledTimes(1);
		});

		it('should not call onSuspend()', () => {
			expect(error).toBeNull();
			expect(mockOnSuspend).not.toHaveBeenCalled();
		});
	});

	describe('when suspend prop changes from false to true', () => {
		beforeEach(() => {
			try {
				jest.clearAllMocks();

				rerender?.({
					suspend: true,
					onLoad: mockOnLoad ?? jest.fn(),
					onSuspend: mockOnSuspend ?? jest.fn(),
				});
			} catch (err) {
				error = err as Error;
			}
		});

		it('should update isLoading to true', () => {
			expect(error).toBeNull();
			expect(result?.current.at(1)).toBe(true);
		});

		it('should not call onLoad()', () => {
			expect(error).toBeNull();
			expect(mockOnLoad).not.toHaveBeenCalled();
		});

		it('should call onSuspend()', () => {
			expect(error).toBeNull();
			expect(mockOnSuspend).toHaveBeenCalledTimes(1);
		});
	});

	describe('when state is updated manually with the provided setter', () => {
		beforeEach(() => {
			try {
				jest.clearAllMocks();

				const setLoading = result?.current[2] ?? noop;

				act(() => {
					setLoading(!result?.current[1]);
				});
			} catch (err) {
				error = err as Error;
			}
		});

		it('should update isLoading to true', () => {
			expect(error).toBeNull();
			expect(result?.current.at(1)).toBe(true);
		});

		it('should not call onLoad()', () => {
			expect(error).toBeNull();
			expect(mockOnLoad).not.toHaveBeenCalled();
		});

		it('should call onSuspend()', () => {
			expect(error).toBeNull();
			expect(mockOnSuspend).toHaveBeenCalledTimes(1);
		});
	});
});
