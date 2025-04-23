export const mockUserAgent = (userAgentData?: NavigatorUAData) => {
	jest.mock(window.navigator.userAgentData, () => ({
		brands: [
			{ brand: 'Not.A/Brand', version: '8' },
			{ brand: 'Google Chrome', version: '114' },
			{ brand: 'Chromium', version: '114' },
		],
		mobile: false,
		platform: 'macOS',
	}));
};
