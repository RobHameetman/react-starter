import { useContext } from 'react';
import { RadioContext } from '../../contexts';

/**
 * Retrieve the current {@link RadioContext} from the nearest
 * `RadioProvider`. This provider is instantiated in the `RadioGroup` component.
 */
export const useRadioContext = () => useContext(RadioContext);
