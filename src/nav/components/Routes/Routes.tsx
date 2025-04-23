import { FC } from 'react';
import { Route, Routes as Switch } from 'react-router';
import { useAuth } from '@/auth/hooks/useAuth';
import { LoginPage } from '@/auth/pages/LoginPage';
import { SignupPage } from '@/auth/pages/SignupPage';
import { HomePage } from '@/home/pages/HomePage';
import { SupportPage } from '@/support/pages/SupportPage';
import { NotificationsPage } from '@/users/pages/NotificationsPage';
import { SettingsPage } from '@/users/pages/SettingsPage';
import { ErrorPage } from '@/utils/pages/ErrorPage';
import { DEFAULT_ERROR_MESSAGE } from '../../constants/DEFAULT_ERROR_MESSAGE';

/**
 * Configure host application routing as React JSX.
 *
 * @remarks
 * This component uses {@link useAuth()}, and so must be used as a child or
 * descendant component of the `<AuthProvider />`.
 *
 * @returns The presentation logic for the entire application router as a React
 * virtual DOM node.
 */
export const Routes: FC = () => {
	const { loading, error } = useAuth();

	if (!loading && error) {
		throw new Error(DEFAULT_ERROR_MESSAGE);
	}

	return (
		<Switch>
			{/* Home */}
			<Route path="/" element={<HomePage />} />

			{/* Auth */}
			<Route path="/login" element={<LoginPage force={__DEV__} />} />
			<Route path="/join" element={<SignupPage force={__DEV__} />} />

			{/* Support */}
			<Route path="/support" element={<SupportPage />} />

			{/* User */}
			<Route path="/notifications" element={<NotificationsPage />} />
			<Route path="/settings" element={<SettingsPage />} />

			{/* Fallback */}
			<Route
				path="*"
				element={<ErrorPage name="Error" message={DEFAULT_ERROR_MESSAGE} />}
			/>
		</Switch>
	);
};

export default Routes;
