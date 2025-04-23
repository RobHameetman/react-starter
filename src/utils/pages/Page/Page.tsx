/* eslint-disable @typescript-eslint/naming-convention */
import { KeyboardEventHandler, useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useBreakpoints } from '@/utils/hooks';
import { Stylable, Testable } from '@/utils/types/props';
import { PageContent, PageFooter, PageHeader, PageSidebar } from './components';
import { DOCUMENT_TITLE_TEMPLATE } from '../../constants';
import { CC } from '../../types';
import styles from './Page.module.css';

/**
 * Prop types for the {@link Page} component.
 */
export interface PageProps extends Stylable, Testable {
	/**
	 * [Optional] Hide the navigation at the top of the page.
	 * @defaultValue - `false`
	 */
	readonly headless?: boolean;

	/**
	 * The page/document title set in the `<title></title>` for that page.
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
 * Inner components of the {@link Page} component.
 */
export interface PageComponents {
	/**
	 * Render the Page/page content inside of this component.
	 */
	Content: typeof PageContent;

	/**
	 * Render a footer at the bottom of the page.
	 */
	Footer: typeof PageFooter;

	/**
	 * Render a navigation bar at the top of the page.
	 */
	Header: typeof PageHeader;

	/**
	 * Render a navigation bar at the top of the page.
	 */
	Sidebar: typeof PageSidebar;
}

/**
 * A compound component which renders a generic page or full screen Page. This
 * component handles analytics and other logic which would be redundant if
 * copied in each Page component directly. A Page is a component rendered by
 * `react-router-dom` as the target of a route or sub-route.
 *
 * @param props - A {@link PageProps} object.
 *
 * @privateRemarks
 * This component may be moved into a future version of Recess.
 *
 * @returns A rendered Page or page with updated metadata.
 */
export const Page: CC<PageComponents, PageProps> = ({
	className = '',
	children,
	template = DOCUMENT_TITLE_TEMPLATE,
	title,
	testId = `Page-${title.toLowerCase().replace(/\s/g, '-')}`,
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
				className={`${styles.Page}${cssMobile}${cssOverride}`}
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
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Sidebar = PageSidebar;
