import { noop } from '@app/utils/functions/misc';
import {
	EscapeEvent,
	isEscapeEvent,
} from '@app/utils/types/events/EscapeEvent';
import { fakeEscapeEvent } from '@app/utils/types/events/EscapeEvent/__test__';

export const mockEscapeEventHandler = <T = Element>(
	callback: (e: EscapeEvent<T>) => void = noop,
) =>
	jest.fn((e: EscapeEvent<T> = fakeEscapeEvent()) => {
		if (isEscapeEvent(e)) {
			callback(e);
		}
	});
