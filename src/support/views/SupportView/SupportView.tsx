import { FC } from 'react';
import { Container, Grid, Input, Link } from '@nextui-org/react';
import { Card } from '@app/utils/components/structure/Card';
import { View } from '@app/utils/views/View';
import styles from './SupportView.module.css';

/**
 * The view rendered at the route "/support" which provides users with helpful
 * documentation to get started with the application.
 *
 * @returns The presentation logic for the entire support page as a React
 * virtual DOM.
 */
export const SupportView: FC = () => (
	<View title="Support">
		<View.Header />
		<View.Content>
			<div className={styles.hero}>
				<Container className={styles.content}>
					<h1 className={styles.title}>Support Center</h1>
					<Input className={styles.search} placeholder="Search" fullWidth />
				</Container>
			</div>
			<Container className="pb-20">
				<div className="flex flex-col items-center justify-center pt-16 pb-4">
					<h2 className="b text-center flex text-3xl">
						Need help? We've got your back.
					</h2>
					<span className="text-center w-1/2">
						From account settings to permissions, find help for everything
						Sample App
						<br />
						If you're new to Sample App and looking for tips, check out our{' '}
						<Link href="#">Beginner's Guide</Link>
					</span>
				</div>
				<Grid.Container gap={2} justify="center">
					<Grid xs={12} sm={6} md={3}>
						<Card className={styles.card}>
							<Card.Header className={styles.title}>Announcements</Card.Header>
							<Card.Body className={styles.content}>
								We've got our ear to the ground. Here's what you need to know.
							</Card.Body>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} md={3}>
						<Card className={styles.card}>
							<Card.Header className={styles.title}>
								Account Settings
							</Card.Header>
							<Card.Body className={styles.content}>
								We've got our ear to the ground. Here's what you need to know.
							</Card.Body>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} md={3}>
						<Card className={styles.card}>
							<Card.Header className={styles.title}>
								Getting Started
							</Card.Header>
							<Card.Body className={styles.content}>
								We've got our ear to the ground. Here's what you need to know.
							</Card.Body>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} md={3}>
						<Card className={styles.card}>
							<Card.Header className={styles.title}>Community</Card.Header>
							<Card.Body className={styles.content}>
								We've got our ear to the ground. Here's what you need to know.
							</Card.Body>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} md={3}>
						<Card className={styles.card}>
							<Card.Header className={styles.title}>
								Subscriptions and Billing
							</Card.Header>
							<Card.Body className={styles.content}>
								We've got our ear to the ground. Here's what you need to know.
							</Card.Body>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} md={3}>
						<Card className={styles.card}>
							<Card.Header className={styles.title}>Security</Card.Header>
							<Card.Body className={styles.content}>
								We've got our ear to the ground. Here's what you need to know.
							</Card.Body>
						</Card>
					</Grid>
					<Grid xs={12} sm={6} md={3}>
						<Card className={styles.card}>
							<Card.Header className={styles.title}>F.A.Q.s</Card.Header>
							<Card.Body className={styles.content}>
								We've got our ear to the ground. Here's what you need to know.
							</Card.Body>
						</Card>
					</Grid>
				</Grid.Container>
			</Container>
		</View.Content>
		<View.Footer />
	</View>
);
