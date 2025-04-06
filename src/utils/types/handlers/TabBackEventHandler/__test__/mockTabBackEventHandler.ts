import { noop } from '@/utils/functions/misc';
import {
	TabBackEvent,
	isTabBackEvent,
} from '@/utils/types/events/TabBackEvent';
import { fakeTabBackEvent } from '@/utils/types/events/TabBackEvent/__test__';

export const mockTabBackEventHandler = <T = Element>(
	callback: (e: TabBackEvent<T>) => void = noop,
) =>
	jest.fn((e: TabBackEvent<T> = fakeTabBackEvent()) => {
		if (isTabBackEvent(e)) {
			callback(e);
		}
	});
