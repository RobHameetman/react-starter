import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { PageWrapper } from './PageWrapper';

export const renderPage = (Component: ReactElement) =>
	render(<PageWrapper>{Component}</PageWrapper>);
