import { Observable } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { useStreamData } from '../useStreamData';

/**
 * The default time in milliseconds to throttle the stream if no throttle time
 * is explicitly provided.
 */
export const DEFAULT_THROTTLE_TIME = 1000;

/**
 * Subscribe/unsubscribe to a stream and update react state based on this,
 * rendering no more frequently than once per the given time in milliseconds.
 * The default time is 1000ms, so providing no time will limit rendering to
 * once per second.
 *
 * @param stream$ - The stream being subscribed to.
 * @param defaultValue - The initial data state in React.
 * @param timeInMs - [Optional] The time in milliseconds to throttle the stream.
 *
 * @returns The current data in React's state.
 */
export const useThrottledStreamData = <T>(
	stream$: Observable<T>,
	defaultValue: T,
	timeInMs = DEFAULT_THROTTLE_TIME,
): T => useStreamData<T>(stream$.pipe(throttleTime(timeInMs)), defaultValue);
