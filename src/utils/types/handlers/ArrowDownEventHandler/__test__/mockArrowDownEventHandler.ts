import { noop } from '@/utils/functions/misc';
import { EnterEvent, isEnterEvent } from '@/utils/types/events/EnterEvent';
import { fakeEnterEvent } from '@/utils/types/events/EnterEvent/__test__';

export const mockArrowDownEventHandler = <T = Element>(
	callback: (e: EnterEvent<T>) => void = noop,
) =>
	jest.fn((e: EnterEvent<T> = fakeEnterEvent()) => {
		if (isEnterEvent(e)) {
			callback(e);
		}
	});
