import { ReactElement } from 'react';
import { TabsProvider } from '../contexts/TabsProvider';

type Props = Record<string, unknown>;

export const renderWithTabsProvider = (Component: ReactElement<Props>) => (
	<TabsProvider>{Component}</TabsProvider>
);
