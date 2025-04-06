import { faker } from '@faker-js/faker';
import { randomFocusEventType } from '@/utils/enums/FocusEventTypes/__test__';
import { randomKeyboardEventType } from '@/utils/enums/KeyboardEventTypes/__test__';
import { randomMouseEventType } from '@/utils/enums/MouseEventTypes/__test__';
import { randomPointerEventType } from '@/utils/enums/PointerEventTypes/__test__';
import { NativeInteractionEvent } from '../NativeInteractionEvent';

export const fakeNativeInteractionEvent = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const type = faker.helpers.arrayElement([
		randomFocusEventType,
		randomKeyboardEventType,
		randomMouseEventType,
		randomPointerEventType,
	])();

	const nativeInteractionEvent = new Event(type) as NativeInteractionEvent;

	Object.entries(overrideProps).forEach(([key, value]) => {
		Object.defineProperty(nativeInteractionEvent, key, {
			writable: false,
			value,
		});
	});

	return nativeInteractionEvent as NativeInteractionEvent &
		Record<string, unknown>;
};
