import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { EscapeEvent } from '../EscapeEvent';

export const fakeEscapeEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'Escape',
		key: 'Escape',
		...overrideProps,
	}) as EscapeEvent<T> & Record<string, unknown>;
