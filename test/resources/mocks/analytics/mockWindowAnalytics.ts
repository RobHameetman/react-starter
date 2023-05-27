/// <reference types="google.analytics" />
/// <reference types="segment-analytics" />

export const mockWindowAnalytics = ({ ...overrideProps } = {}) => {
	window.analytics = {
		addIntegration: jest.fn(),
		alias: jest.fn(),
		create: jest.fn(),
		debug: jest.fn(),
		getAll: jest.fn(),
		getByName: jest.fn(),
		group: jest.fn(),
		identify: jest.fn(),
		init: jest.fn(),
		l: 0,
		load: jest.fn(),
		on: jest.fn(),
		page: jest.fn(),
		q: [],
		ready: jest.fn(),
		remove: jest.fn(),
		reset: jest.fn(),
		setAnonymousId: jest.fn(),
		timeout: jest.fn(),
		track: jest.fn(),
		trackForm: jest.fn(),
		trackLink: jest.fn(),
		use: jest.fn(),
		user: jest.fn(),
		...overrideProps,
	} as unknown as SegmentAnalytics.AnalyticsJS & typeof ga;
};
