import type { ReactElement } from 'react';

type Callback = (newElement: ReactElement) => void;

export const mockCloneElement = (callback: Callback) =>
	jest.fn((element, props, ...children) => {
		const newElement = {
			...element,
			props: {
				...props,
				children,
			},
		};

		callback(newElement);

		return newElement;
	});
