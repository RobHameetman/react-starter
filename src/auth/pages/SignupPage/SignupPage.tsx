import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router';
// import { Button, Card, Grid, Input, Link, Loading } from '@nextui-org/react';
import { Input } from '@/utils/components/forms/Input';
import { Button } from '@/utils/components/misc/Button';
import { Link } from '@/utils/components/navigation/Link';
import { Card } from '@/utils/components/structure/Card';
import { Grid } from '@/utils/components/structure/Grid';
import { useAuth } from '@/auth/hooks/useAuth';
import { GithubIcon, GoogleIcon, LinkedinIcon } from '@/utils/icons';
import { Page } from '@/utils/pages/Page';
import styles from './SignupPage.module.css';

/**
 * Prop types for the {@link SignupPage} component.
 */
export interface SignupPageProps {
	/**
	 * [Optional] Set to `true` to force the page to render even when the user is
	 * already signed in. This should always be `false` in production.
	 * @defaultValue - `false`
	 */
	readonly force?: boolean;
}

/**
 * The page rendered at the sign-up route "/join". This is only accessible when
 * the user is not logged in.
 *
 * @returns The presentation logic for the entire login page as a React virtual
 * DOM.
 */
export const SignupPage: FC<SignupPageProps> = ({ force = false }) => {
	const { loading, signedIn } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (signedIn && !force) {
			navigate('/');
		}
	}, [navigate, signedIn, force]);

	return (
		<Page title="Sign Up">
			<Page.Content className={styles.login}>
				<Card className={styles.card}>
					<Card.Header className={styles.header}>
						<span className={styles.title}>Sign Up</span>
						<span className={styles.subtitle}>
							Experience a whole new world
						</span>
					</Card.Header>
					<Card.Body>
						<Grid.Container direction="column" gap={1.25}>
							<Grid>
								<Button
									className={styles.github}
									size="sm"
									icon={<GithubIcon />}
								>
									Github
								</Button>
								<Button
									className={styles.google}
									size="sm"
									icon={<GoogleIcon />}
									bordered
								>
									Google
								</Button>
								<Button
									className={styles.linkedin}
									size="sm"
									icon={<LinkedinIcon />}
								>
									LinkedIn
								</Button>
							</Grid>
							<Grid>
								<hr className={styles.divider} />
								<span className={`${styles.divider} ${styles.text}`}>or</span>
								<hr className={styles.divider} />
							</Grid>
							<Grid>
								<Input
									className={styles.username}
									label="Email Address"
									placeholder="e.g. you@example.com"
									// size="sm"
									// bordered
									// fullWidth
								/>
							</Grid>
							<Grid>
								<Input.Password
									className={styles.password}
									// label="Password"
									// size="sm"
									// bordered
									// fullWidth
								/>
							</Grid>
							<Grid>
								<Input.Password
									className={styles.password}
									// label="Confirm Password"
									// size="sm"
									// bordered
									// fullWidth
								/>
							</Grid>
							<Grid>
								<Button className={styles.submit} color="primary" size="sm">
									{loading ? (
										// <Loading type="points-opacity" color="currentColor" />
										null
									) : (
										'Join'
									)}
								</Button>
							</Grid>
						</Grid.Container>
					</Card.Body>
				</Card>
				<span>
					Already have an account?{' '}
					<Link className={styles.signup} href="/login">
						Sign In
					</Link>
				</span>
			</Page.Content>
		</Page>
	);
};

export default SignupPage;
