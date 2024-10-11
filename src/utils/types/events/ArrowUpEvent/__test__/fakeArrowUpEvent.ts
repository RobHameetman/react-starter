import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { ArrowUpEvent } from '../ArrowUpEvent';

export const fakeArrowUpEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'ArrowUp',
		key: 'ArrowUp',
		...overrideProps,
	}) as ArrowUpEvent<T> & Record<string, unknown>;
