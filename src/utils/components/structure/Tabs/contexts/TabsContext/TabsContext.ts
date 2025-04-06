import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	createContext,
} from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isNumber } from '@/utils/functions/check/js/core/isNumber';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';
import { noop } from '@/utils/functions/misc/noop';
import { ChangeTabHandler } from '../../types';

/**
 * A shared state for tabs.
 */
export interface TabsContext {
	/**
	 * The index of the current tab in the `tabs` array.
	 * @defaultValue - `0`
	 */
	readonly currentTab: number;

	/**
	 * The current tab in the `tabs` array.
	 * @@defaultValue - `undefined`
	 */
	readonly currentTabName: string | undefined;

	/**
	 * Set the name of the url query parameter.
	 * @defaultValue - `'tab'`
	 */
	readonly param: string;

	/**
	 * A ref object used to mount the tab content in the DOM.
	 * @defaultValue - `{ current: null }`
	 */
	readonly portalRef: MutableRefObject<HTMLDivElement | null>;

	/**
	 * The position of the selector based on the position of the currently
	 * selected tab.
	 * @defaultValue - `0`
	 */
	readonly selectorOffset: number;

	/**
	 * The width of the selector based on the width of the currently selected tab.
	 * @defaultValue - `0`
	 */
	readonly selectorWidth: number;

	/**
	 * The set of tabs as string values.
	 * @defaultValue - `[]`
	 */
	readonly tabs: ReadonlyArray<string>;

	/**
	 * A handler for changing a tab when it is selected by the user.
	 * @defaultValue - No-op function.
	 */
	readonly handleChangeTab: ChangeTabHandler;

	/**
	 * Set the width of the selector based on the width of the current tab.
	 * @defaultValue - No-op function.
	 */
	readonly setSelectorWidth: Dispatch<
		SetStateAction<TabsContext['selectorWidth']>
	>;

	/**
	 * Set the position of the selector based on the position of the current tab.
	 * @defaultValue - No-op function.
	 */
	readonly setSelectorOffset: Dispatch<
		SetStateAction<TabsContext['selectorOffset']>
	>;

	/**
	 * Set the list of tabs in {@link Tabs}.
	 * @defaultValue - No-op function.
	 */
	readonly setTabs: Dispatch<SetStateAction<TabsContext['tabs']>>;
}

/**
 * {@link TabsContext} default values.
 */
export const INITIAL_TABS_CONTEXT: TabsContext = Object.freeze({
	/**
	 * Default value of {@link TabsContext['currentTab']}.
	 */
	currentTab: 0,

	/**
	 * Default value of {@link TabsContext['currentTabName']}.
	 */
	currentTabName: undefined,

	/**
	 * Default value of {@link TabsContext['param']}.
	 */
	param: 'tab',

	/**
	 * Default value of {@link TabsContext['portalRef']}.
	 */
	portalRef: { current: null },

	/**
	 * Default value of {@link TabsContext['selectorOffest']}.
	 */
	selectorOffset: 0,

	/**
	 * Default value of {@link TabsContext['selectorWidth']}.
	 */
	selectorWidth: 0,

	/**
	 * Default value of {@link TabsContext['tabs']}.
	 */
	tabs: [],

	/**
	 * Default value of {@link TabsContext['handleChangeTab']}.
	 */
	handleChangeTab: noop,

	/**
	 * Default value of {@link TabsContext['setSelectorOffset']}.
	 */
	setSelectorOffset: noop,

	/**
	 * Default value of {@link TabsContext['setSelectorWidth']}.
	 */
	setSelectorWidth: noop,

	/**
	 * Default value of {@link TabsContext['setTabs']}.
	 */
	setTabs: noop,
});

/**
 * Create {@link TabsContext} with React `Provider` and `Consumer`.
 */
export const TabsContext = createContext<TabsContext>({
	...INITIAL_TABS_CONTEXT,
});

export const isTabsContext = (value: unknown): value is TabsContext =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.currentTab
	 */
	'currentTab' in value &&
	isNumber(value.currentTab) &&
	/**
	 * value.currentTabName
	 */
	'currentTabName' in value &&
	(isString(value.currentTabName) || value.currentTabName === undefined) &&
	/**
	 * value.param
	 */
	'param' in value &&
	isString(value.param) &&
	Boolean(value.param.length) &&
	/**
	 * value.portalRef
	 */
	'portalRef' in value &&
	isObject(value.portalRef) &&
	'current' in value.portalRef &&
	/**
	 * value.selectorOffset
	 */
	'selectorOffset' in value &&
	isNumber(value.selectorOffset) &&
	/**
	 * value.selectorWidth
	 */
	'selectorWidth' in value &&
	isNumber(value.selectorWidth) &&
	/**
	 * value.tabs
	 */
	'tabs' in value &&
	Array.isArray(value.tabs) &&
	value.tabs.every(isString) &&
	/**
	 * value.handleChangeTab
	 */
	'handleChangeTab' in value &&
	isFunction(value.handleChangeTab) &&
	/**
	 * value.setSelectorOffset
	 */
	'setSelectorOffset' in value &&
	isFunction(value.setSelectorOffset) &&
	/**
	 * value.setSelectorWidth
	 */
	'setSelectorWidth' in value &&
	isFunction(value.setSelectorWidth) &&
	/**
	 * value.setTabs
	 */
	'setTabs' in value &&
	isFunction(value.setTabs);
