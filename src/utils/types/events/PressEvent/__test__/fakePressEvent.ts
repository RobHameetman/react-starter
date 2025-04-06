import { faker } from '@faker-js/faker';
import { isMouseEventType } from '@/utils/enums/MouseEventTypes';
import { isTouchEventType } from '@/utils/enums/TouchEventTypes';
import { fakeMouseEvent } from '@/utils/functions/check/react/isMouseEvent/__test__';
import { fakePointerEvent } from '@/utils/functions/check/react/isPointerEvent/__test__';
import { fakeEnterEvent } from '@/utils/types/events/EnterEvent/__test__';
import { fakeSpaceEvent } from '@/utils/types/events/SpaceEvent/__test__';
import { PressEvent } from '../PressEvent';

export const fakePressEvent = <T = HTMLElement>({
	pointerEventSupport = true,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const factories = [fakeEnterEvent, fakeSpaceEvent];

	/* @ts-expect-error - Type 'React.PointerEvent<Element> & PointerEvent & Record<string, unknown>' is missing the following properties from type 'KeyboardEvent<T>' */
	factories.push(pointerEventSupport ? fakePointerEvent : fakeMouseEvent);

	const pressEvent = faker.helpers.arrayElement(factories)() as Record<
		string,
		unknown
	>;

	const isKeyboard = (pressEvent.type as string).includes('key');

	const isMouse =
		((pressEvent.type as string).includes('pointer') &&
			pressEvent.pointerType === 'mouse') ||
		isMouseEventType(pressEvent.type);

	const isTouch =
		((pressEvent.type as string).includes('pointer') &&
			pressEvent.pointerType === 'touch') ||
		isTouchEventType(pressEvent.type);

	const isPointer =
		(pressEvent.type as string).includes('pointer') &&
		pressEvent.pointerType !== 'mouse';

	if (isKeyboard) {
		pressEvent.type = faker.helpers.arrayElement(['keydown', 'keyup']);
	}

	if (isMouse) {
		pressEvent.type = faker.helpers.arrayElement([
			'mousedown',
			'mouseenter',
			'mouseleave',
			'mousemove',
			'mouseup',
			'click',
		]);
	}

	if (isTouch) {
		pressEvent.type = faker.helpers.arrayElement([
			'touchstart',
			'touchend',
			'touchmove',
		]);
	}

	if (isPointer) {
		pressEvent.type = faker.helpers.arrayElement([
			'pointerdown',
			'pointerenter',
			'pointerleave',
			'pointermove',
			'pointerup',
		]);
	}

	return {
		...pressEvent,
		...overrideProps,
	} as PressEvent<T> & Record<string, unknown>;
};
