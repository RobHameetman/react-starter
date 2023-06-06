/* eslint-disable @typescript-eslint/naming-convention */
import { Helmet } from 'react-helmet';
import { Content, Footer, NavBar } from './internals';
import { DOCUMENT_TITLE_TEMPLATE } from '../../constants';
import { CC } from '../../types';
import './View.module.css';

/**
 * Prop types for the {@link View} component.
 */
export interface ViewProps {
	/**
	 * [Optional] Hide the navigation at the top of the page.
	 * @defaultValue `false`
	 */
	readonly headless?: boolean;
	/**
	 * The page/document title set in the `<title></title>` for that view.
	 */
	readonly title: string;
	/**
	 * [Optional] The template string used to render the title text in the
	 * browser.
	 * @defaultValue `'%s | {{service_name}}'`
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
	Content: typeof Content;
	/**
	 * Render a footer at the bottom of the page.
	 */
	Footer: typeof Footer;
	/**
	 * Render a navigation bar at the top of the page.
	 */
	NavBar: typeof NavBar;
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
	children,
	template = DOCUMENT_TITLE_TEMPLATE,
	title,
}) => {
	return (
		<>
			<Helmet title={title} titleTemplate={template} />
			{children}
		</>
	);
};

/**
 * Attach inner components here so that they may be referenced using dot
 * notation.
 */
View.Content = Content;
View.Footer = Footer;
View.NavBar = NavBar;
