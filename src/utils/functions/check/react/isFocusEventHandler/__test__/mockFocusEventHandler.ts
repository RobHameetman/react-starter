import { FocusEvent } from 'react';
import { noop } from '@/utils/functions/misc';
import { isFocusEvent } from '@/utils/functions/check/react/isFocusEvent';
import { fakeFocusEvent } from '@/utils/functions/check/react/isFocusEvent/__test__';

export const mockFocusEventHandler = <T = Element>(
	callback: (e: FocusEvent<T>) => void = noop,
) =>
	jest.fn((e: FocusEvent<T> = fakeFocusEvent()) => {
		if (isFocusEvent(e)) {
			callback(e);
		}
	});
