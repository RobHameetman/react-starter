import { FC, useLayoutEffect, useState } from 'react';
import {
	RouterProps as ReactRouterProps,
	Router as ReactRouter,
} from 'react-router-dom';
import { BrowserHistory } from 'history';
import { APP_BASENAME } from '../../constants';

/**
 * Prop types for the {@link Router} component.
 */
interface RouterProps extends Omit<ReactRouterProps, 'location' | 'navigator'> {
	/**
	 * Provide a {@link BrowserHistory} to listen for updates and manage
	 * push/replace state functionality.
	 */
	readonly history: BrowserHistory;
}

/**
 * A custom router used to sync our router state to our history state.
 *
 * @param props - A {@link RouterProps} object.
 *
 * @returns The presentation logic for the entire application router as a React
 * virtual DOM node.
 */
export const Router: FC<RouterProps> = ({ history, ...props }) => {
	console.log('rendering Router.tsx');
	const [state, setState] = useState({
		action: history.action,
		location: history.location,
	});

	useLayoutEffect(() => history.listen(setState), [history]);

	return (
		<ReactRouter
			{...props}
			basename={APP_BASENAME}
			location={state.location}
			navigationType={state.action}
			navigator={history}
		/>
	);
};
