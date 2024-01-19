import type { UIEvent } from 'react';
import { randomScrollEventType } from '@app/utils/enums/ScrollEventTypes/__test__';
import { fakeUIEvent } from '@app/utils/functions/check/react/isUIEvent/__test__';

export const fakeScrollEvent = <T = Element>({
	capturing = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeUIEvent<T>({ capturing }),
		type: randomScrollEventType(),
		...overrideProps,
	} as unknown as UIEvent<T> & globalThis.UIEvent & Record<string, unknown>);
