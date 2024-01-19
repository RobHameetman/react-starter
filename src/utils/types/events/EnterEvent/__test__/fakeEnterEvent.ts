import { fakeKeyboardEvent } from '@app/utils/functions/check/react/isKeyboardEvent/__test__';
import { EnterEvent } from '../EnterEvent';

export const fakeEnterEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'Enter',
		key: 'Enter',
		...overrideProps,
	}) as EnterEvent<T> & Record<string, unknown>;
