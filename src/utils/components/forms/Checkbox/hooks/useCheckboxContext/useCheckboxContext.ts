import { useContext } from 'react';
import { CheckboxContext } from '../../contexts';

/**
 * Retrieve the current {@link CheckboxContext} from the nearest
 * `CheckboxProvider`. This provider is instantiated in the `CheckboxGroup`
 * component.
 */
export const useCheckboxContext = () => useContext(CheckboxContext);
