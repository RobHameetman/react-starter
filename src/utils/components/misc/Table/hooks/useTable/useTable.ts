import { useContext } from 'react';
import { TableContext } from '../../contexts';

export const useTable = () => useContext(TableContext);
