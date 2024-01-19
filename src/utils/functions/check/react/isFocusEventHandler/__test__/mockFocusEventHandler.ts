import { FocusEvent } from 'react';
import { noop } from '@app/utils/functions/misc';
import { isFocusEvent } from '@app/utils/functions/check/react/isFocusEvent';
import { fakeFocusEvent } from '@app/utils/functions/check/react/isFocusEvent/__test__';

export const mockFocusEventHandler = <T = Element>(
	callback: (e: FocusEvent<T>) => void = noop,
) =>
	jest.fn((e: FocusEvent<T> = fakeFocusEvent()) => {
		if (isFocusEvent(e)) {
			callback(e);
		}
	});
