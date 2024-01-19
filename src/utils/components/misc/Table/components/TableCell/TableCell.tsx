import { $FC } from 'react';
import * as Mui from '@material-ui/core';
import { Search } from '../Search';

export const TableCell: $FC<Mui.TableCellProps> = ({ children, ...props }) => (
	<Mui.TableCell {...props}>
		<Search.Match>{children}</Search.Match>
	</Mui.TableCell>
);
