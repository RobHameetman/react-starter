import { BehaviorSubject } from 'rxjs';
import { act, renderHook, waitFor } from '@testing-library/react';
import { mockSetState, mockUseState } from '@@/mocks/react/mockUseState';
import { useStreamData } from './useStreamData';

type Data = number | undefined;
type Stream = BehaviorSubject<Data>;

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: mockUseState,
}));

describe('useStreamData()', () => {
	let stream$: Stream | null = null;
	let initialState: Data | null = null;
	let updatedState: Data | null = null;
	let error: Error | null = null;
	let result: Data | null = null;

	beforeEach(() => {
		try {
			stream$ = new BehaviorSubject<Data>(undefined);

			initialState = 0;
			updatedState = 1;

			({
				result: { current: result },
			} = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseNewHookInput'. */
				useStreamData(stream$, initialState),
			));

			act(() => {
				stream$?.next(updatedState ?? undefined);
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	afterEach(() => {
		initialState = null;
		updatedState = null;
		stream$ = null;
		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should set the initial React state to the provided initial state', () => {
		expect(mockUseState).toBeCalledWith(initialState);
	});

	it('should set incoming stream data to React state', () => {
		waitFor(() => expect(mockSetState).toBeCalledWith(updatedState));
	});

	it('should return the current data/state in React', () => {
		expect(result).toBe(initialState);
		waitFor(() => expect(result).toBe(updatedState));
	});
});
