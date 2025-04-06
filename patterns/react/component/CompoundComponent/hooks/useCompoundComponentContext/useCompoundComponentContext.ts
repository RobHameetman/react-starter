import { useContext } from 'react';
import { CompoundComponentContext } from '../../contexts/CompoundComponentContext';

/**
 * Retrieve the current {@link CompoundComponentContext} from the nearest
 * `CompoundComponentProvider`. This provider is instantiated in the
 * <{@link CompoundComponent} />.
 */
export const useCompoundComponentContext = () => useContext(CompoundComponentContext);
