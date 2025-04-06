import { useContext } from 'react';
import { ThemeContext } from '@/utils/contexts/ThemeContext';

/**
 * Retrieve the current {@link ThemeContext} from the nearest `ThemeProvider`.
 * This provider is instantiated in the `AppProvider`.
 */
export const useTheme = () => useContext<ThemeContext>(ThemeContext);
