import { BehaviorSubject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { renderHook, waitFor } from '@testing-library/react';
import { onTest } from '@@/utils/onTest';
import {
	DEFAULT_THROTTLE_TIME,
	useThrottledStreamData,
} from './useThrottledStreamData';

type Data = number | undefined;
type Stream = BehaviorSubject<Data>;

const stream$ = new BehaviorSubject<Data>(undefined);

jest.mock('rxjs/operators', () => ({
	...jest.requireActual('rxjs/operators'),
	throttleTime: jest.fn(
		() =>
			(source = stream$) =>
				source,
	),
}));

describe('useThrottledStreamData()', () => {
	let error: Error | null = null;
	let result: Data | null = null;
	let time: number | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				2: () => {
					time = 200;
				},
			});

			const initialState = 0;

			({
				result: { current: result },
			} = renderHook(() =>
				useThrottledStreamData(
					stream$ as Stream,
					initialState,
					time ?? undefined,
				),
			));
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		error = null;
		result = null;
		time = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should throttle incoming data by the correct time when a time is provided', () => {
		expect(index).toBe(2);
		expect(time).not.toBeNull();
		expect(throttleTime).toBeCalledWith(time);
	});

	it('should throttle incoming data by the default time when no time is provided', () => {
		expect(index).toBe(3);
		expect(time).toBeNull();
		expect(throttleTime).toBeCalledWith(DEFAULT_THROTTLE_TIME);
	});

	it('should return the current data/state in React', () => {
		expect(index).toBe(4);
		waitFor(() => expect(result).not.toBeNull());
	});
});
