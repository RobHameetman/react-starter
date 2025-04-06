import type { DragEvent } from 'react';
import { randomDragEventType } from '@/utils/enums/DragEventTypes/__test__';
import { fakeUIEvent } from '@/utils/functions/check/react/isUIEvent/__test__';

export const fakeDragEvent = <T = Element>({
	capturing = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeUIEvent<T>({ capturing }),
		dataTransfer: {},
		type: randomDragEventType(),
		...overrideProps,
	} as unknown as DragEvent<T> &
		globalThis.DragEvent &
		Record<string, unknown>);
