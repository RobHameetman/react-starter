import { useContext } from 'react';
import { GridContext } from '../../contexts/GridContext';

/**
 * Retrieve the current {@link GridContext} from the nearest
 * `CompoundComponentProvider`. This provider is instantiated in the
 * <{@link CompoundComponent} />.
 */
export const useGridContext = () => useContext(GridContext);

export default useGridContext;
