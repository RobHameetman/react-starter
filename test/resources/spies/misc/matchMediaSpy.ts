const DEFAULT_CRITERIA = (_query: string) => false;

export const matchMediaSpy = (criteria = DEFAULT_CRITERIA) =>
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation((query) => ({
			matches: criteria(query),
			media: query,
			onchange: null,
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
			/**
			 * @deprecated
			 */
			addListener: jest.fn(),
			/**
			 * @deprecated
			 */
			removeListener: jest.fn(),
		})),
	});
