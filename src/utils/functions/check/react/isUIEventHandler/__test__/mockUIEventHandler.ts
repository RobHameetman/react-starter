import { UIEvent } from 'react';
import { noop } from '@/utils/functions/misc';
import { isUIEvent } from '@/utils/functions/check/react/isUIEvent';
import { fakeUIEvent } from '@/utils/functions/check/react/isUIEvent/__test__';

export const mockUIEventHandler = <T = Element>(
	callback: (e: UIEvent<T>) => void = noop,
) =>
	jest.fn((e: UIEvent<T> = fakeUIEvent()) => {
		if (isUIEvent(e)) {
			callback(e);
		}
	});
