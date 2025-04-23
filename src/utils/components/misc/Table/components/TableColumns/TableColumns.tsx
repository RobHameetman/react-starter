import { $FC, Children, useLayoutEffect } from 'react';
// import * as Mui from '@material-ui/core';
import { useTable } from '../../hooks';

export const TableColumns: $FC = ({ children }) => {
	const { state, setColumnCount } = useTable();

	useLayoutEffect(() => {
		const { columns } = state;

		if (!columns) {
			setColumnCount(Children.count(children));
		}
	}, [children, setColumnCount]);

	return (
		<th>
			<tr>{children}</tr>
		</th>
	);
};
