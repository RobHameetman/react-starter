import { ReactElement } from 'react';
import { render } from '@testing-library/react';

/* eslint-disable-next-line @typescript-eslint/naming-convention */
export const renderAndQueryFooter = (Component: ReactElement) =>
	render(Component).container.querySelector('footer');
