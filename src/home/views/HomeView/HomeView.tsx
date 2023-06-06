import { FC } from 'react';
import { Card } from '@nextui-org/react';
import { View } from '@app/utils';
import styles from './HomeView.module.css';

/**
 * The view rendered at the root route "/". Add a description of your view here
 * in this comment as you create new pages and views.
 *
 * @returns The presentation logic for the entire home page as a React virtual
 * DOM.
 */
export const HomeView: FC = () => (
	<View title="Home">
		<View.NavBar />
		<View.Content>
			<Card className={styles.card}>
				<Card.Header className={styles.title}>Header</Card.Header>
				<Card.Body className={styles.content}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Card.Body>
			</Card>
		</View.Content>
		<View.Footer />
	</View>
);
