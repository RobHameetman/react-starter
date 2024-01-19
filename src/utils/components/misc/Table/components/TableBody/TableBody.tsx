import React, { FC } from 'react';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import * as Mui from '@material-ui/core';

export interface TableBodyProps {
	/**
	 * @param className - [Optional] Pass in additional styling.
	 * @defaultValue - `''`
	 */
	readonly className?: string;
	readonly width: Breakpoint;
}

export const TableBody: FC<TableBodyProps> = ({ children, width }) => {
	return (
		<Mui.TableContainer>
			<Mui.Table size={Mui.isWidthUp('sm', width) ? 'medium' : 'small'}>
				{children}
			</Mui.Table>
		</Mui.TableContainer>
	);
};
