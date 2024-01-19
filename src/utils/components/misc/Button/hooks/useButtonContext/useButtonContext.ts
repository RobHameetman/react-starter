import { useContext } from 'react';
import { ButtonContext } from '../../contexts/ButtonContext';

/**
 * Retrieve the current {@link ButtonContext} from the nearest `ButtonProvider`.
 * This provider is instantiated in the `ButtonGroup` component.
 */
export const useButtonContext = () => useContext(ButtonContext);
