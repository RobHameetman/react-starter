import { faker } from '@faker-js/faker';
import { mockEnterEventHandler } from '@app/utils/types/handlers/EnterEventHandler/__test__';
import { fakeHandlerPropName } from '@app/utils/types/react/HandlerPropName/__test__';
import { HandlerPropsOf } from '../HandlerPropsOf';

export const fakeHandlerPropsOf = <P>({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const handlerPropsOf = Array.from(
		{ length: faker.number.int({ min: 1, max: 3 }) },
		() => fakeHandlerPropName(),
	).reduce(
		(props, currentProp) => ({
			...props,
			[currentProp]: mockEnterEventHandler(),
		}),
		{},
	);

	return {
		...handlerPropsOf,
		...overrideProps,
	} as HandlerPropsOf<P>;
};
