import { noop } from '@app/utils/functions/misc';
import { SpaceEvent, isSpaceEvent } from '@app/utils/types/events/SpaceEvent';
import { fakeSpaceEvent } from '@app/utils/types/events/SpaceEvent/__test__';

export const mockSpaceEventHandler = <T = Element>(
	callback: (e: SpaceEvent<T>) => void = noop,
) =>
	jest.fn((e: SpaceEvent<T> = fakeSpaceEvent()) => {
		if (isSpaceEvent(e)) {
			callback(e);
		}
	});
