import { noop } from '@/utils/functions/misc';
import { HoverEvent, isHoverEvent } from '@/utils/types/events/HoverEvent';
import { fakeHoverEvent } from '@/utils/types/events/HoverEvent/__test__';

export const mockHoverEventHandler = <T = Element>(
	callback: (e: HoverEvent<T>) => void = noop,
) =>
	jest.fn((e: HoverEvent<T> = fakeHoverEvent()) => {
		if (isHoverEvent(e)) {
			callback(e);
		}
	});
