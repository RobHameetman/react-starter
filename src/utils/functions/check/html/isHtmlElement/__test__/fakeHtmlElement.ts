import { fakeElement } from '@/utils/functions/check/dom/isElement/__test__';

export const fakeHtmlElement = ({
	ssr = typeof window === 'undefined',
	title = '',
	...overrideProps
}: Record<string, unknown> = {}) => {
	const htmlElement = fakeElement({
		ssr,
		title,
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(htmlElement, key) || {
			writable: false,
		};

		Object.defineProperty(htmlElement, key, {
			...prop,
			value,
		});
	});

	return htmlElement as HTMLElement;
};
