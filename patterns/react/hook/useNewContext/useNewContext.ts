import { NewContext } from '@/path/to/NewContext';
import { useContext } from 'react';

/**
 * Retrieve the current {@link NewContext} from the nearest `NewProvider`. This
 * provider is instantiated in the `AppProvider`.
 */
export const useNewContext = () => useContext(NewContext);
