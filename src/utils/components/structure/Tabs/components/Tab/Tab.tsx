import {
	$FC,
	KeyboardEventHandler,
	MouseEventHandler,
	useCallback,
	useEffect,
	useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { Badge } from '@nextui-org/react';
import { noop } from '@/utils/functions/misc/noop';
import { snakeCase } from '@/utils/functions/string/snakeCase';
import { useControlProp } from '@/utils/hooks/react/useControlProp';
import { Noop, isNoop } from '@/utils/types/misc/Noop';
import type { Identifiable } from '@/utils/types/props/Identifiable';
import type { Stylable } from '@/utils/types/props/Stylable';
import { ChangeTabHandler, TabRenderFn } from '../../types';
import { useTabs } from '../../hooks/useTabs';
import styles from './Tab.module.css';

/**
 * Compositional prop types for the {@link Tab} component.
 */
type ComposedProps = Identifiable & Stylable;

/**
 * Prop types for the {@link Tab} component.
 */
export interface TabProps extends ComposedProps {
	/**
	 * [Optional] Display a badge on the tab.
	 * @defaultValue - `''`
	 */
	readonly badge?: string;

	/**
	 * [Optional] A control prop used to set the tab as disabled.
	 * @defaultValue - `false`
	 */
	readonly disabled?: boolean;

	/**
	 * [Optional] A control prop used to set the tab as locked. A locked tab is
	 * similar to a disabled tab but also displays a lock icon.
	 * @defaultValue - `false`
	 */
	readonly locked?: boolean;

	/**
	 * The name of the tab. This is used to identify the tab and should be unique
	 * within the group of tabs.
	 */
	readonly name: string;

	/**
	 * [Optional] A control prop used to set the tab as selected.
	 * @defaultValue - `false`
	 */
	readonly selected?: boolean;

	/**
	 * [Optional] A callback which is invoked when the tab is clicked. This allows
	 * you to add additional functionality to one or more tabs without having to
	 * create a new component.
	 * @defaultValue - A no-op function.
	 */
	readonly onClick?: ChangeTabHandler;

	/**
	 * [Optional] A render prop which allows you to specialize how the tab is
	 * rendered.
	 * @defaultValue - A no-op function.
	 */
	readonly renderTab?: TabRenderFn | Noop;
}

/**
 * A tab within a group of tabs which can be used to render content.
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
export const Tab: $FC<TabProps> = ({
	badge = '',
	className = '',
	children,
	disabled: _disabled = false,
	locked: _locked = false,
	name,
	selected: _selected = false,
	onClick = noop,
	renderTab = noop,
	...props
}) => {
	const {
		currentTabName,
		portalRef,
		tabs,
		handleChangeTab,
		setSelectorOffset,
		setSelectorWidth,
	} = useTabs();

	const [selected] = useControlProp(_selected || name === currentTabName);
	const [disabled] = useControlProp(_disabled);
	const [locked] = useControlProp(_locked);
	const ref = useRef<HTMLButtonElement>(null);

	const index = tabs.indexOf(name);
	const isLast = index === tabs.length - 1;

	const cssActive = selected ? ` ${styles.selected}` : '';
	const cssDisabled = disabled || locked ? ` ${styles.disabled}` : '';
	const cssOverride = className ? ` ${className}` : '';

	const _handleClick = useCallback<MouseEventHandler>(
		(e) => {
			if (!disabled && !locked) {
				handleChangeTab(null, index);
				onClick(e);
			}
		},
		[disabled, locked, handleChangeTab, name, onClick, tabs],
	);

	/**
	 * @see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction
	 */
	const _handleKeydown = useCallback<KeyboardEventHandler>(
		(e) => {
			const $tab = ref.current;

			if ($tab && index && e.key === 'ArrowLeft') {
				/* @ts-expect-error - Property 'focus' does not exist on type 'ChildNode'. */
				$tab.previousSibling.focus();
			}

			if ($tab && !isLast && e.key === 'ArrowRight') {
				/* @ts-expect-error - Property 'focus' does not exist on type 'ChildNode'. */
				$tab.nextSibling?.focus();
			}
		},
		[index, isLast],
	);

	useEffect(() => {
		const $tab = ref.current;

		if ($tab && selected) {
			const { clientWidth, offsetLeft } = $tab;

			setSelectorOffset(offsetLeft);
			setSelectorWidth(clientWidth);
		}
	}, [selected]);

	return (
		<>
			{!isNoop(renderTab) ? (
				/* @ts-expect-error - Type 'never' has no call signatures. */
				renderTab(name, selected)
			) : (
				<button
					className={`${styles.tab}${cssActive}${cssDisabled}${cssOverride}`}
					role="tab"
					aria-controls={snakeCase(name)}
					aria-disabled={disabled}
					aria-selected={selected}
					tabIndex={selected ? 0 : -1}
					onClick={_handleClick}
					onKeyDown={_handleKeydown}
					ref={ref}
					{...props}
				>
					{locked && (
						<span className={`material-icons ${styles.lockedIcon}`}>lock</span>
					)}
					{name}
					{Boolean(badge) && (
						<Badge className="ml-1" size="sm" color="primary">
							{badge}
						</Badge>
					)}
				</button>
			)}
			{portalRef.current &&
				selected &&
				createPortal(children, portalRef.current)}
		</>
	);
};
