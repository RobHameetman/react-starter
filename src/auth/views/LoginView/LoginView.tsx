import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Grid, Input, Link, Loading } from '@nextui-org/react';
import { useAuth } from '@app/auth/hooks/useAuth';
import { GithubIcon, GoogleIcon, LinkedinIcon } from '@app/utils/icons';
import { View } from '@app/utils/views/View';
import styles from './LoginView.module.css';

/**
 * Prop types for the {@link LoginView} component.
 */
export interface LoginViewProps {
	/**
	 * [Optional] Set to `true` to force the view to render even when the user is
	 * already signed in. This should always be `false` in production.
	 * @defaultValue - `false`
	 */
	readonly force?: boolean;
}

/**
 * The view rendered at the login route "/login". This is only accessible when
 * the user is not logged in.
 *
 * @returns The presentation logic for the entire login page as a React virtual
 * DOM.
 */
export const LoginView: FC<LoginViewProps> = ({ force = false }) => {
	const { loading, signedIn } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (signedIn && !force) {
			navigate('/');
		}
	}, [navigate, signedIn, force]);

	return (
		<View title="Sign In">
			<View.Content className={styles.login}>
				<Card className={styles.card}>
					<Card.Header className={styles.header}>
						<span className={styles.title}>Sign In</span>
						<span className={styles.subtitle}>
							Reconnect with your universe
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
									label="Username"
									placeholder="e.g. you@example.com"
									size="sm"
									bordered
									fullWidth
								/>
							</Grid>
							<Grid>
								<Input.Password
									className={styles.password}
									label="Password"
									size="sm"
									bordered
									fullWidth
								/>
								<Link href="/forgot-password">Forgot Password?</Link>
							</Grid>
							<Grid>
								<Button className={styles.submit} color="primary" size="sm">
									{loading ? (
										<Loading type="points-opacity" color="currentColor" />
									) : (
										'Continue'
									)}
								</Button>
							</Grid>
						</Grid.Container>
					</Card.Body>
				</Card>
				<span>
					New to Sample App?{' '}
					<Link className={styles.signup} href="/join">
						Sign Up
					</Link>
				</span>
			</View.Content>
		</View>
	);
};
