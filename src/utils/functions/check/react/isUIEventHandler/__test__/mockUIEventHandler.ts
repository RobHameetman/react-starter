import { UIEvent } from 'react';
import { noop } from '@app/utils/functions/misc';
import { isUIEvent } from '@app/utils/functions/check/react/isUIEvent';
import { fakeUIEvent } from '@app/utils/functions/check/react/isUIEvent/__test__';

export const mockUIEventHandler = <T = Element>(
	callback: (e: UIEvent<T>) => void = noop,
) =>
	jest.fn((e: UIEvent<T> = fakeUIEvent()) => {
		if (isUIEvent(e)) {
			callback(e);
		}
	});
