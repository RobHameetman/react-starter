import { FC } from 'react';
import { Card } from '@nextui-org/react';
import { useAuth } from '@/auth/hooks/useAuth';
import { View } from '@/utils/views/View';
import { Tabs } from '@/utils/components/structure/Tabs';
import { Tab } from '@/utils/components/structure/Tabs/components/Tab';
import { withTabsProvider } from '@/utils/components/structure/Tabs/hocs/withTabsProvider';
import styles from './SettingsView.module.css';

/**
 * The view rendered at the route "/settings". Users who want to change their
 * account settings will be directed to this view. You must be logged in to
 * access this route.
 *
 * @returns The presentation logic for the entire home page as a React virtual
 * DOM.
 */
export const SettingsView: FC = withTabsProvider()(() => {
	const { signedIn } = useAuth();

	return (
		<View title="Settings">
			<View.Header />
			<View.Sidebar elastic expand />
			<View.Content className="p-10">
				<h1 className={styles.title}>Settings</h1>
				<Tabs>
					<Tab name="General">
						<div>General Settings</div>
					</Tab>
					<Tab name="Subscription">
						<div>Subscription Settings</div>
					</Tab>
					<Tab name="Billing">
						<div>Billing Settings</div>
					</Tab>
					<Tab name="Members">
						<div>Members Settings</div>
					</Tab>
					<Tab name="Advanced" badge="BETA" locked>
						<div>Advanced Settings</div>
					</Tab>
				</Tabs>
			</View.Content>
		</View>
	);
});
