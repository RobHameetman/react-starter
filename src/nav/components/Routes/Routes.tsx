import { FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { useAuth } from '@app/auth/hooks/useAuth';
import { LoginView, SignupView } from '@app/auth/views';
import { HomeView } from '@app/home/views/HomeView';
import { SupportView } from '@app/support/views/SupportView';
import { NotificationsView, SettingsView } from '@app/users/views';
import { ErrorView } from '@app/utils/views/ErrorView';
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
			<Route path="/" element={<HomeView />} />

			{/* Auth */}
			<Route path="/login" element={<LoginView force={__DEV__} />} />
			<Route path="/join" element={<SignupView force={__DEV__} />} />

			{/* Support */}
			<Route path="/support" element={<SupportView />} />

			{/* User */}
			<Route path="/notifications" element={<NotificationsView />} />
			<Route path="/settings" element={<SettingsView />} />

			{/* Fallback */}
			<Route
				path="*"
				element={<ErrorView name="Error" message={DEFAULT_ERROR_MESSAGE} />}
			/>
		</Switch>
	);
};

export default Routes;
