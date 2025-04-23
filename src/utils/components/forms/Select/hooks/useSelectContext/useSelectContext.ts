import { useContext } from 'react';
import { SelectContext } from '../../contexts/SelectContext';

/**
 * Retrieve the current {@link SelectContext} from the nearest
 * `CompoundComponentProvider`. This provider is instantiated in the
 * <{@link CompoundComponent} />.
 */
export const useSelectContext = () => useContext(SelectContext);

export default useSelectContext;
