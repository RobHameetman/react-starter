import { $FC, memo } from 'react';
import { TabsProvider, TabsProviderProps } from '../../contexts';

/**
 * An HOC for wrapping views in a {@link TabsProvider}.
 *
 * @param View - An instance of a view component (e.g. <SettingsView />).
 *
 * @returns A memoized function component equipped a state management layer
 * necessary for tab navigation.
 */
export const withTabsProvider =
	(props: TabsProviderProps = {}) =>
	(View: $FC): $FC =>
		memo(({ children }) => (
			<TabsProvider {...props}>
				<View>{children}</View>
			</TabsProvider>
		));
