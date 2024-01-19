import { FC, ErrorInfo, Suspense, lazy, useCallback } from 'react';
import { Loading } from '@nextui-org/react';
import { createBrowserHistory } from 'history';
import { useLogError } from './log/hooks/useLogError';
import { CatchError } from './utils/components/misc/CatchError';
import { useGlobalEvents } from './utils/hooks/global/useGlobalEvents';
import { useDataDog } from './utils/hooks/misc/useDataDog';
import './tailwind.css';
import './App.css';

const AppProvider = lazy(
	() => import('./utils/contexts/AppProvider/AppProvider'),
);
const ErrorView = lazy(() => import('./utils/views/ErrorView/ErrorView'));
const Router = lazy(() => import('./nav/components/Router/Router'));
const Routes = lazy(() => import('./nav/components/Routes/Routes'));

/**
 * The {{name}} client deployed at `{{subdomain}}.{{hostname}}`.
 *
 * @returns The presentation logic for the entire host application as a React
 * virtual DOM.
 */
export const App: FC = () => {
	useGlobalEvents();
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

export default App;
