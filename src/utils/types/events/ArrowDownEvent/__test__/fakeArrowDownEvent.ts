import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { ArrowDownEvent } from '../ArrowDownEvent';

export const fakeArrowDownEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'ArrowDown',
		key: 'ArrowDown',
		...overrideProps,
	}) as ArrowDownEvent<T> & Record<string, unknown>;
