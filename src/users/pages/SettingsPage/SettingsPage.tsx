import { FC } from 'react';
import { useAuth } from '@/auth/hooks/useAuth';
import { Page } from '@/utils/pages/Page';
import { Tabs } from '@/utils/components/structure/Tabs';
import { Tab } from '@/utils/components/structure/Tabs/components/Tab';
import { withTabsProvider } from '@/utils/components/structure/Tabs/hocs/withTabsProvider';
import styles from './SettingsPage.module.css';

/**
 * The page rendered at the route "/settings". Users who want to change their
 * account settings will be directed to this page. You must be logged in to
 * access this route.
 *
 * @returns The presentation logic for the entire home page as a React virtual
 * DOM.
 */
export const SettingsPage: FC = withTabsProvider()(() => {
	const { signedIn } = useAuth();

	return (
		<Page title="Settings">
			<Page.Header />
			<Page.Sidebar elastic expand />
			<Page.Content className="p-10">
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
			</Page.Content>
		</Page>
	);
});

export default SettingsPage;
