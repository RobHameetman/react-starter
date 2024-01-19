import { faker } from '@faker-js/faker';
import { fakePointerEvent } from '@app/utils/functions/check/react/isPointerEvent/__test__';
import { VirtualPointerEvent } from '../VirtualPointerEvent';

export const fakeVirtualPointerEvent = <T = Element>({
	size = faker.number.int({ min: 0, max: 1 }),
	...overrideProps
}: Record<string, unknown> = {}) => {
	const virualPointerEvent = fakePointerEvent<T>();

	virualPointerEvent.height = size as number;
	virualPointerEvent.width = size as number;

	if (size) {
		virualPointerEvent.detail = 0;
		virualPointerEvent.pressure = 0;
		virualPointerEvent.pointerType = 'mouse';
	}

	return {
		...virualPointerEvent,
		...overrideProps,
	} as VirtualPointerEvent<T> & Record<string, unknown>;
};
