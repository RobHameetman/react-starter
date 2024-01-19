import { ReactElement } from 'react';
import { render } from '@testing-library/react';

/* eslint-disable-next-line @typescript-eslint/naming-convention */
export const renderAndQueryMain = (Component: ReactElement) =>
	render(Component).container.querySelector('main');
