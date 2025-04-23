import { $FC } from 'react';
import { Breakpoint } from '@/theme/tokens/breakpoints';

export interface TableBodyProps {
	/**
	 * @param className - [Optional] Pass in additional styling.
	 * @defaultValue - `''`
	 */
	readonly className?: string;
	readonly width: Breakpoint;
}

export const TableBody: $FC<TableBodyProps> = ({ children, width }) => {
	return (
		// <Mui.TableContainer>
			// <table size={Mui.isWidthUp('sm', width) ? 'medium' : 'small'}>
			<table>
				{children}
			</table>
		// </Mui.TableContainer>
	);
};
