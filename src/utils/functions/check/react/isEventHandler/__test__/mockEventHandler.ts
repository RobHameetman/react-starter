import { SyntheticEvent } from 'react';
import { noop } from '@/utils/functions/misc';
import { isSyntheticEvent } from '@/utils/functions/check/react/isSyntheticEvent';
import { fakeSyntheticEvent } from '@/utils/functions/check/react/isSyntheticEvent/__test__';

export const mockEventHandler = <T = Element>(
	callback: (e: SyntheticEvent<T>) => void = noop,
) =>
	jest.fn((e: SyntheticEvent<T> = fakeSyntheticEvent()) => {
		if (isSyntheticEvent(e)) {
			callback(e);
		}
	});
