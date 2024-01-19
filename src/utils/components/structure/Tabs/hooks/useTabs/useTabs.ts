import { useContext } from 'react';
import { TabsContext } from '../../contexts/TabsContext';

/**
 * A hook that returns the current value of the TabsContext.
 *
 * @returns The current value of the TabsContext.
 */
export const useTabs = () => useContext(TabsContext);
