import { useContext } from 'react';
import { TableContext } from '../../contexts';
import { Hook } from '../../../../../types';

export const useTable: Hook<TableContext> = () => useContext(TableContext);
