/* eslint-disable @typescript-eslint/naming-convention */
import { KeyboardEventHandler, useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useBreakpoints } from '@/utils/hooks';
import { Stylable, Testable } from '@/utils/types/props';
import { ViewContent, ViewFooter, ViewHeader, ViewSidebar } from './internals';
import { DOCUMENT_TITLE_TEMPLATE } from '../../constants';
import { CC } from '../../types';
import styles from './View.module.css';

/**
 * Prop types for the {@link View} component.
 */
export interface ViewProps extends Stylable, Testable {
	/**
	 * [Optional] Hide the navigation at the top of the page.
	 * @defaultValue - `false`
	 */
	readonly headless?: boolean;

	/**
	 * The page/document title set in the `<title></title>` for that view.
	 */
	readonly title: string;

	/**
	 * [Optional] The template string used to render the title text in the
	 * browser.
	 * @defaultValue - `'%s | {{service_name}}'`
	 */
	readonly template?: string;
}

/**
 * Inner components of the {@link View} component.
 */
export interface ViewComponents {
	/**
	 * Render the view/page content inside of this component.
	 */
	Content: typeof ViewContent;

	/**
	 * Render a footer at the bottom of the page.
	 */
	Footer: typeof ViewFooter;

	/**
	 * Render a navigation bar at the top of the page.
	 */
	Header: typeof ViewHeader;

	/**
	 * Render a navigation bar at the top of the page.
	 */
	Sidebar: typeof ViewSidebar;
}

/**
 * A compound component which renders a generic page or full screen view. This
 * component handles analytics and other logic which would be redundant if
 * copied in each view component directly. A view is a component rendered by
 * `react-router-dom` as the target of a route or sub-route.
 *
 * @param props - A {@link ViewProps} object.
 *
 * @privateRemarks
 * This component may be moved into a future version of Recess.
 *
 * @returns A rendered view or page with updated metadata.
 */
export const View: CC<ViewComponents, ViewProps> = ({
	className = '',
	children,
	template = DOCUMENT_TITLE_TEMPLATE,
	title,
	testId = `view-${title.toLowerCase().replace(/\s/g, '-')}`,
}) => {
	const [displayGlobalSearch, setDisplayGlobalSearch] = useState(false);
	const { isMobile } = useBreakpoints();

	const cssMobile = isMobile ? ` ${styles.mobile}` : '';
	const cssOverride = className ? ` ${className}` : '';

	const showGlobalSearch = useCallback(
		() => setDisplayGlobalSearch(true),
		[setDisplayGlobalSearch],
	);

	const hideGlobalSearch = useCallback(
		() => setDisplayGlobalSearch(true),
		[setDisplayGlobalSearch],
	);

	const toggleGlobalSearch = useCallback(
		() => setDisplayGlobalSearch((displayed) => !displayed),
		[setDisplayGlobalSearch],
	);

	const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
		(e) => {
			const cmdOrCtrl = e.metaKey || e.ctrlKey;

			if (cmdOrCtrl && e.key === 'k') {
				toggleGlobalSearch();
			}

			if (e.key === 'Escape') {
				hideGlobalSearch();
			}
		},
		[hideGlobalSearch, toggleGlobalSearch],
	);

	return (
		<>
			<Helmet title={title} titleTemplate={template} />
			<div
				className={`${styles.view}${cssMobile}${cssOverride}`}
				data-test-id={testId}
				onKeyDown={handleKeyDown}
			>
				{children}
			</div>
		</>
	);
};

/**
 * Attach inner components here so that they may be referenced using dot
 * notation.
 */
View.Content = ViewContent;
View.Footer = ViewFooter;
View.Header = ViewHeader;
View.Sidebar = ViewSidebar;
