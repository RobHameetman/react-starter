import { faker } from '@faker-js/faker';
import { randomHoverEventType } from '@app/utils/enums/HoverEventTypes/__test__';
import { fakeMouseEvent } from '@app/utils/functions/check/react/isMouseEvent/__test__';
import { fakePointerEvent } from '@app/utils/functions/check/react/isPointerEvent/__test__';
import { HoverEvent } from '../HoverEvent';

export const fakeHoverEvent = <T = Element>({
	capturing = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...faker.helpers.arrayElement([fakeMouseEvent, fakePointerEvent])({
			capturing: capturing as boolean,
		}),
		type: randomHoverEventType(),
		...overrideProps,
	} as HoverEvent<T> & Record<string, unknown>);
