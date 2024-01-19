import { useLayoutEffect } from 'react';
import { Observable } from 'rxjs';
import {
	RenderHookResult,
	act,
	renderHook,
	waitFor,
} from '@testing-library/react';
import { useStream } from './useStream';

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useLayoutEffect: jest.fn((callback) => callback()),
}));

describe('useStream()', () => {
	let mockSubscribe: jest.Mock | null = null;
	let mockUnsubscribe: jest.Mock | null = null;
	let stream$: Observable<unknown> | null = null;
	let error: Error | null = null;
	let result: RenderHookResult<void, Observable<unknown>> | null = null;

	beforeEach(() => {
		try {
			mockUnsubscribe = jest.fn();

			mockSubscribe = jest.fn(() => ({
				unsubscribe: mockUnsubscribe,
			}));

			stream$ = new Observable();

			jest.spyOn(stream$, 'subscribe').mockImplementation(mockSubscribe);

			result = renderHook(() =>
				/* @ts-expect-error - Argument of type '{ _dependencies: { dependency: jest.Mock<any, any, any> | null; }; }' is not assignable to parameter of type 'UseNewHookInput'. */
				useStream(stream$),
			);

			act(() => {
				result?.unmount();
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
		jest.restoreAllMocks();

		mockSubscribe = null;
		mockUnsubscribe = null;
		stream$ = null;
		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should be handled before rendering is complete', () => {
		expect(useLayoutEffect).toBeCalled();
	});

	it('should subscribe to the current stream when the hook is mounted', () => {
		waitFor(() => expect(mockSubscribe).toBeCalled());
	});

	it('should unsubscribe from the current stream when the hook is unmounted', () => {
		waitFor(() => expect(mockUnsubscribe).toBeCalled());
	});
});
