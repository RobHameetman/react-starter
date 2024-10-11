import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { ArrowLeftEvent } from '../ArrowLeftEvent';

export const fakeArrowLeftEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'ArrowLeft',
		key: 'ArrowLeft',
		...overrideProps,
	}) as ArrowLeftEvent<T> & Record<string, unknown>;
