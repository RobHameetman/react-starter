import { mockWindow } from '@test/mocks/misc/mockWindow';

export const getMatchingMediaQuery = () => {
	const query = '(prefers-color-scheme: dark)';

	mockWindow({
		matchMedia: jest.fn().mockImplementation((query: string) => ({
			matches: true,
			media: query,
			onchange: null,
			addListener: jest.fn(),
			removeListener: jest.fn(),
		})),
	});

	return query;
};
