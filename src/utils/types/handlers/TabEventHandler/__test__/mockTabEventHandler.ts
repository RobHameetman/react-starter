import { noop } from '@/utils/functions/misc';
import { TabEvent, isTabEvent } from '@/utils/types/events/TabEvent';
import { fakeTabEvent } from '@/utils/types/events/TabEvent/__test__';

export const mockTabEventHandler = <T = Element>(
	callback: (e: TabEvent<T>) => void = noop,
) =>
	jest.fn((e: TabEvent<T> = fakeTabEvent()) => {
		if (isTabEvent(e)) {
			callback(e);
		}
	});
