import { noop } from '@/utils/functions/misc';
import {
	EscapeEvent,
	isEscapeEvent,
} from '@/utils/types/events/EscapeEvent';
import { fakeEscapeEvent } from '@/utils/types/events/EscapeEvent/__test__';

export const mockCloseEventHandler = <T = Element>(
	callback: (e: EscapeEvent<T>) => void = noop,
) =>
	jest.fn((e: EscapeEvent<T> = fakeEscapeEvent()) => {
		if (isEscapeEvent(e)) {
			callback(e);
		}
	});
