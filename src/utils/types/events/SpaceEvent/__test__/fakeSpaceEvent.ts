import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { SpaceEvent } from '../SpaceEvent';

export const fakeSpaceEvent = <T = Element>({
	...overrideProps
}: Record<string, unknown> = {}) =>
	fakeKeyboardEvent({
		code: 'Space',
		key: ' ',
		...overrideProps,
	}) as SpaceEvent<T> & Record<string, unknown>;
