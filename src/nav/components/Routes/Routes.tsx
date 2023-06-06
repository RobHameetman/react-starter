import { FC } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { useAuth } from '@app/auth/hooks/useAuth';
import { HomeView } from '@app/home/views/HomeView';
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
	console.log('loading Routes.tsx');
	const { loading, error } = useAuth();

	if (!loading && error) {
		throw new Error(DEFAULT_ERROR_MESSAGE);
	}

	return (
		<Switch>
			<Route path="/" element={<HomeView />} />
			<Route
				path="*"
				element={<ErrorView name="Error" message={DEFAULT_ERROR_MESSAGE} />}
			/>
		</Switch>
	);
};
