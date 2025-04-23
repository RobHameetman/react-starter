import { mockWindow } from '@@/mocks/misc/mockWindow';

export const getNonMatchingMediaQuery = () => {
	const query = '(prefers-color-scheme: dark)';

	mockWindow({
		matchMedia: jest.fn().mockImplementation((_query: string) => ({
			matches: false,
			media: '',
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn(),
		})),
	});

	return query;
};
