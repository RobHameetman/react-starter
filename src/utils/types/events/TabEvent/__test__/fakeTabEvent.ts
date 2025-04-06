import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { TabEvent } from '../TabEvent';

export const fakeTabEvent = <T = Element>({
	capturing = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		capturing,
		code: 'Tab',
		key: 'Tab',
		...overrideProps,
	}) as TabEvent<T> & Record<string, unknown>;
