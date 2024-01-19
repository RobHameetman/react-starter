import { PropsWithoutHandlers } from '../PropsWithoutHandlers';

export const fakePropsWithoutHandlers = <P>({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const propsWithoutHandlers: Record<string, unknown> = {
		doSomething: jest.fn(() => {}),
	};

	return {
		...propsWithoutHandlers,
		...overrideProps,
	} as PropsWithoutHandlers<P>;
};
