import { SyntheticEvent } from 'react';
import { noop } from '@app/utils/functions/misc';
import { isSyntheticEvent } from '@app/utils/functions/check/react/isSyntheticEvent';
import { fakeSyntheticEvent } from '@app/utils/functions/check/react/isSyntheticEvent/__test__';

export const mockEventHandler = <T = Element>(
	callback: (e: SyntheticEvent<T>) => void = noop,
) =>
	jest.fn((e: SyntheticEvent<T> = fakeSyntheticEvent()) => {
		if (isSyntheticEvent(e)) {
			callback(e);
		}
	});
