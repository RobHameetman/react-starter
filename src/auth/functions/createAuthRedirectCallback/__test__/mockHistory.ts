import { History } from 'history';

export interface MockHistoryInput {
	readonly mockPush: jest.Mock | null;
	readonly currentRoute: string;
}

export const mockHistory = ({
	mockPush,
	currentRoute: pathname = '/foo',
}: MockHistoryInput) => {
	return {
		location: {
			pathname,
		},
		push: mockPush as History['push'],
	} as History;
};
