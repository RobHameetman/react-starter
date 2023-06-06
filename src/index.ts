import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

try {
	const isDevelopment = process.env.NODE_ENV === 'development';

	const debugModeEnabled =
		(process.env.APP_DEBUG as boolean | undefined) === true;

	if (isDevelopment && debugModeEnabled) {
		/* eslint-disable-next-line @typescript-eslint/no-var-requires,global-require */
		const whyDidYouRender = require('@welldone-software/why-did-you-render');

		whyDidYouRender(React, {
			trackAllPureComponents: true,
		});
	}

	const rootId = 'root';
	const $root = document.getElementById(rootId);

	if (!$root) {
		throw new Error(`Did not find any element with ID "${rootId}"`);
	}

	const { render } = createRoot($root);

	render(createElement(App));

	if (module.hot) {
		module.hot.accept();
	}
} catch (error) {
	console.error(error);
}
