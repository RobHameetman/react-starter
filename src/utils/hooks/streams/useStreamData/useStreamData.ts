import { useState } from 'react';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { useStream } from '../useStream';

/**
 * Subscribe/unsubscribe to a stream and update react state based on this.
 *
 * @typeParam T - The type of data being streamed.
 *
 * @param stream$ - The stream being subscribed to.
 * @param defaultValue - The initial data state in React.
 *
 * @returns The current data in React's state.
 */
export const useStreamData = <T>(
	stream$: Observable<T>,
	defaultValue: T,
): T => {
	const [data, setData] = useState<T>(defaultValue);

	useStream(stream$.pipe(tap(setData)));

	return data;
};
