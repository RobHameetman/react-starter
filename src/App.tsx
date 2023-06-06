import { FC, ErrorInfo, Suspense, useCallback } from 'react';
import { Loading } from '@nextui-org/react';
import { createBrowserHistory } from 'history';
import { useLogError } from './log/hooks/useLogError';
import { Routes } from './nav/components/Routes';
import { Router } from './nav/components/Router';
import { CatchError } from './utils/components/CatchError';
import { useDataDog } from './utils/hooks/useDataDog';
import { AppProvider } from './utils/providers/AppProvider';
import { ErrorView } from './utils/views/ErrorView';
import './App.css';

/**
 * The {{name}} client deployed at `{{subdomain}}.{{hostname}}`.
 *
 * @returns The presentation logic for the entire host application as a React
 * virtual DOM.
 */
export const App: FC = () => {
	console.log('rendering app...');
	/*
	 * useAppVersion({
	 * 	envKey: 'APP_VERSION',
	 * });
	 */

	useDataDog();

	const history = createBrowserHistory();
	const { error } = useLogError();

	const handleError = useCallback(
		(err: Error, info: ErrorInfo) => error({ error: err, extra: info }),
		[error],
	);

	return (
		<Suspense fallback={<Loading />}>
			<AppProvider history={history}>
				<CatchError as={ErrorView} onError={handleError}>
					<Router history={history}>
						<Routes />
					</Router>
				</CatchError>
			</AppProvider>
		</Suspense>
	);
};
