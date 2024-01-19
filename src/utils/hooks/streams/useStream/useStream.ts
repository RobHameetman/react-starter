import { useLayoutEffect } from 'react';
import { Observable } from 'rxjs';

/**
 * Subscribe/unsubscribe to streams properly.
 *
 * @param stream$ - The stream being subscribed to.
 */
export const useStream = <T>(stream$: Observable<T>) => {
	useLayoutEffect(() => {
		const subscription = stream$.subscribe();

		return () => subscription.unsubscribe();
	}, [stream$]);
};
