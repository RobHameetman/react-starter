import { noop } from '@/utils/functions/misc';
import { SpaceEvent, isSpaceEvent } from '@/utils/types/events/SpaceEvent';
import { fakeSpaceEvent } from '@/utils/types/events/SpaceEvent/__test__';

export const mockSpaceEventHandler = <T = Element>(
	callback: (e: SpaceEvent<T>) => void = noop,
) =>
	jest.fn((e: SpaceEvent<T> = fakeSpaceEvent()) => {
		if (isSpaceEvent(e)) {
			callback(e);
		}
	});
