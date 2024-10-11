import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { ArrowRightEvent } from '../ArrowRightEvent';

export const fakeArrowRightEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'ArrowRight',
		key: 'ArrowRight',
		...overrideProps,
	}) as ArrowRightEvent<T> & Record<string, unknown>;
