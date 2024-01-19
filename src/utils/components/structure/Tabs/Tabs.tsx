import { $FC, Children, ReactElement, useLayoutEffect } from 'react';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { useQueryParams } from '@app/nav/hooks/useQueryParams';
import { noop } from '@app/utils/functions/misc/noop';
import { snakeCase } from '@app/utils/functions/string/snakeCase';
import { Noop, isNoop } from '@app/utils/types/misc/Noop';
import type { Identifiable } from '@app/utils/types/props/Identifiable';
import type { Stylable } from '@app/utils/types/props/Stylable';
import { TabProps } from './components';
import { useTabs } from './hooks';
import { ContentRenderFn, TabsRenderFn } from './types';
import styles from './Tabs.module.css';

/**
 * Compositional prop types for the {@link Tabs} component.
 */
type ComposedProps = Identifiable & Stylable;

/**
 * Prop types for the {@link Tabs} component.
 */
export interface TabsProps extends ComposedProps {
	/**
	 * [Optional] A render prop which allows you to specialize how content is
	 * rendered.
	 * @defaultValue - A no-op function.
	 */
	readonly renderContent?: ContentRenderFn | Noop;

	/**
	 * [Optional] A render prop which allows you to specialize how tabs are
	 * rendered.
	 * @defaultValue - A no-op function.
	 */
	readonly renderTabs?: TabsRenderFn | Noop;
}

/**
 * A group of tabs which can be used to render content. When switching tabs, the
 * URL will be updated to reflect the current tab using query parameters. This
 * allows the user to bookmark a specific tab or share a link to it. If a
 * page/view contains multiple sets of tabs, the `id` prop should be used to
 * differentiate them.
 *
 * @example
 * ```TSX
 * <Tabs>
 * 	 <Tab name="General">
 *     <GeneralSettings />
 *   </Tab>
 *   <Tab name="Billing">
 *     <BillingSettings />
 *   </Tab>
 *   <Tab name="Advanced">
 *     <AdvancedSettings />
 *   </Tab>
 * </Tabs>
 * ```
 */
export const Tabs: $FC<TabsProps> = ({
	className = '',
	children,
	id = 'tabs',
	renderContent = noop,
	renderTabs = noop,
}) => {
	const {
		currentTab,
		currentTabName,
		param,
		portalRef,
		selectorOffset,
		selectorWidth,
		tabs,
		handleChangeTab,
		setTabs,
	} = useTabs();

	const { [param]: selectedInRoute = '' } = useQueryParams();

	const inlineSelectorStyles = { left: selectorOffset, width: selectorWidth };
	const cssOverride = className ? ` ${className}` : '';

	useLayoutEffect(() => {
		const newTabs = Children.toArray(children)
			.filter<ReactElement<TabProps>>(
				(child): child is ReactElement<TabProps> =>
					isObject(child) && 'props' in child,
			)
			.map((child) => child.props.name);

		if (newTabs.length !== tabs.length) {
			setTabs(newTabs);
		}

		if (selectedInRoute) {
			const index = (newTabs || tabs).map(snakeCase).indexOf(selectedInRoute);

			if (index !== undefined) {
				handleChangeTab(null, index, newTabs);
			}
		} else {
			handleChangeTab(null, currentTab, newTabs.length ? newTabs : null);
		}
	}, [children, selectedInRoute]);

	return (
		<>
			{!isNoop(renderTabs) ? (
				renderTabs(children, currentTab, handleChangeTab)
			) : (
				<div
					className={`${styles.tabs}${cssOverride}`}
					id={id}
					role="tablist"
					aria-label={id}
				>
					{children}
					<div className={styles.selector} style={inlineSelectorStyles} />
				</div>
			)}
			{!isNoop(renderContent) ? (
				renderContent(portalRef)
			) : (
				<div
					id="content"
					role="tabpanel"
					tabIndex={0}
					aria-labelledby={snakeCase(currentTabName)}
					ref={portalRef}
				/>
			)}
		</>
	);
};
