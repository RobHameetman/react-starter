import { $FC, useCallback, useRef, useState } from 'react';
import { useRouter } from '@/nav/hooks/useRouter';
import { snakeCase } from '@/utils/functions/string/snakeCase';
import { INITIAL_TABS_CONTEXT, TabsContext } from '../TabsContext';
import { ChangeTabHandler } from '../../types';

/**
 * Prop types for the {@link TabsProvider} component.
 */
export interface TabsProviderProps {
	/**
	 * [Optional] Set the name of the query param used for stateful routing.
	 * @defaultValue - `'tab'`
	 */
	readonly param?: string;
}

/**
 * Provides state management for tab navigation. Components <Tabs /> and <Tab />
 * must be wrapped in this provider. If you are using these components in a
 * page/view component, you can use the `withTabsProvider()` HOC instead.
 *
 * @example
 * ```
 * <TabsProvider>
 *   {...}
 *   <Tabs>
 *     <Tab name="General">
 *       <GeneralSettings />
 * 	   </Tab>
 * 	   <Tab name="Billing">
 * 		   <BillingSettings />
 * 	   </Tab>
 *   </Tabs>
 * </TabsProvider>
 * ```
 */
export const TabsProvider: $FC<TabsProviderProps> = ({
	children,
	param = INITIAL_TABS_CONTEXT.param,
}) => {
	const { location, queryParams, navigate } = useRouter();

	const [tabs, setTabs] = useState<ReadonlyArray<string>>([]);
	const [currentTab, setCurrentTab] = useState(0);
	const [currentTabName, setCurrentTabName] = useState<string | undefined>();
	const [selectorOffset, setSelectorOffset] = useState(0);
	const [selectorWidth, setSelectorWidth] = useState(0);
	const portalRef = useRef<HTMLDivElement | null>(null);

	const handleChangeTab = useCallback<ChangeTabHandler>(
		(_, tab, _tabs = null) => {
			const tabIndex = tab === -1 ? 0 : tab;
			const tabName = (_tabs && _tabs.length ? _tabs : tabs)[tabIndex];

			if (tabName) {
				setCurrentTab(tabIndex);
				setCurrentTabName(tabName);

				if (!(queryParams[param] === snakeCase(tabName))) {
					const params = new URLSearchParams(
						decodeURI(location.search).replace(/^\?/, ''),
					);

					params.set(param, snakeCase(tabName));

					navigate({
						...location,
						search: `?${params.toString()}`,
					});
				}
			}
		},
		[location, param, queryParams, navigate, tabs],
	);

	return (
		<TabsContext.Provider
			value={{
				currentTab,
				currentTabName,
				param,
				portalRef,
				selectorOffset,
				selectorWidth,
				tabs,
				handleChangeTab,
				setSelectorOffset,
				setSelectorWidth,
				setTabs,
			}}
		>
			{children}
		</TabsContext.Provider>
	);
};
