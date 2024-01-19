import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { ViewWrapper } from './ViewWrapper';

export const renderView = (Component: ReactElement) =>
	render(<ViewWrapper>{Component}</ViewWrapper>);
