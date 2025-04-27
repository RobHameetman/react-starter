import { FC, ErrorInfo, Suspense, lazy, useCallback } from 'react';
import { createBrowserHistory } from 'history';
// import { useLogError } from './log/hooks/useLogError';
import { CatchError } from './utils/components/misc/CatchError';
import { useGlobalEvents } from './utils/hooks/global/useGlobalEvents';
import { useDataDog } from './utils/hooks/misc/useDataDog';
import './tailwind.css';
import './App.css';

const ErrorView = lazy(() => import('./utils/pages/ErrorPage/ErrorPage'));
const Router = lazy(() => import('./nav/components/Router/Router'));
const Routes = lazy(() => import('./nav/components/Routes/Routes'));

const Loading = () => <span>Loading....</span>;

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
	// const { error } = useLogError();

	const { error } = console;

	const handleError = useCallback(
		(err: Error, info: ErrorInfo) => error({ error: err, extra: info }),
		[error],
	);

	return (
		<Suspense fallback={<Loading />}>
			<CatchError as={ErrorView} onError={handleError}>
				<Router history={history}>
					<Routes />
				</Router>
			</CatchError>
		</Suspense>
	);
};

export default App;
