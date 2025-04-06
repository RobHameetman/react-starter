import type { FocusEvent } from 'react';
import { fakeSyntheticEvent } from '@/utils/functions/check/react/isSyntheticEvent/__test__';
import { randomFocusEventType } from '@/utils/enums/FocusEventTypes/__test__';

export const fakeFocusEvent = <T = Element>({
	capturing = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeSyntheticEvent<T>({ capturing }),
		type: randomFocusEventType(),
		...overrideProps,
	} as FocusEvent<T> & globalThis.FocusEvent & Record<string, unknown>);
