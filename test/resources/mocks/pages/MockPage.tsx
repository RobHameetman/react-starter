import { $FC } from 'react';
import { Page, PageProps } from '@/utils/pages/Page';

jest.mock('@host/nav', () => {
	return {
		__esModule: true,
		MemberNav: jest.fn(() => (({ children }) => <>{children}</>) as $FC),
	};
});

export type MockPageProps = PageProps;

export const MockPage: $FC<PageProps> = (props) => <Page {...props} />;
