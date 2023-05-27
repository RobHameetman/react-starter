import { FC } from 'react';
import { View, ViewProps } from '@host/utils';

jest.mock('@host/nav', () => {
	return {
		__esModule: true,
		MemberNav: jest.fn(() => (({ children }) => <>{children}</>) as FC),
	};
});

export type MockViewProps = ViewProps;

export const MockView: FC<ViewProps> = (props) => <View {...props} />;
