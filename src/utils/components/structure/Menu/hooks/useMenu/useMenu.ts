import { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';

/**
 * Retrieve the current {@link MenuContext} from the nearest
 * `CompoundComponentProvider`. This provider is instantiated in the
 * <{@link CompoundComponent} />.
 */
export const useMenu = () => useContext(MenuContext);

export default useMenu;
