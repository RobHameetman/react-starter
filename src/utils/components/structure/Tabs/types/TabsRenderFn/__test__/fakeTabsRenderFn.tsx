import { ReactNode } from 'react';
import { TabsRenderFn } from '../TabsRenderFn';
import { ChangeTabHandler } from '../../ChangeTabHandler';

export const fakeTabsRenderFn = (): [TabsRenderFn, [ReactNode, 0, ChangeTabHandler]] => {
	const renderTabs = ((children: ReactNode, _currentTab: number, _handler: ChangeTabHandler) =>
		<>{children}</>) as TabsRenderFn;

	return [renderTabs, [null, 0, jest.fn]];
};
