import type { AbstractView, UIEvent } from 'react';
import { faker } from '@faker-js/faker';
import { fakeSyntheticEvent } from '@app/utils/functions/check/react/isSyntheticEvent/__test__';

export const fakeUIEvent = <T = Element>({
	capturing = false,
	virtual = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeSyntheticEvent<T>({ capturing }),
		detail: virtual ? 0 : faker.number.int({ min: 1, max: 1000 }),
		view: {} as AbstractView,
		...overrideProps,
	} as UIEvent<T> & Record<string, unknown>);
