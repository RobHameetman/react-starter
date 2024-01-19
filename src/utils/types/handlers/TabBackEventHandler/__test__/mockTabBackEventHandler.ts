import { noop } from '@app/utils/functions/misc';
import {
	TabBackEvent,
	isTabBackEvent,
} from '@app/utils/types/events/TabBackEvent';
import { fakeTabBackEvent } from '@app/utils/types/events/TabBackEvent/__test__';

export const mockTabBackEventHandler = <T = Element>(
	callback: (e: TabBackEvent<T>) => void = noop,
) =>
	jest.fn((e: TabBackEvent<T> = fakeTabBackEvent()) => {
		if (isTabBackEvent(e)) {
			callback(e);
		}
	});
