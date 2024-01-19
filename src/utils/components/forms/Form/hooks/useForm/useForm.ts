import { useContext } from 'react';
import { FormContext } from '../../contexts';

/**
 * Used in the `<Form.Field />` component to access the {@link FormContext}.
 */
export const useForm = () => useContext(FormContext);
