import { $FC } from 'react';
// import * as Mui from '@material-ui/core';
import { Search } from '../Search';

export const TableCell: $FC = ({ children, ...props }) => (
	<div {...props}>
		<Search.Match>{children}</Search.Match>
	</div>
);
