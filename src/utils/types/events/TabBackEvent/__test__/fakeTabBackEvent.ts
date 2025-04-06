import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { TabBackEvent } from '../TabBackEvent';

export const fakeTabBackEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'Tab',
		key: 'Tab',
		shiftKey: true,
		...overrideProps,
	}) as TabBackEvent<T> & Record<string, unknown>;
