import { FC, ReactElement, useLayoutEffect, useState } from 'react';
// import * as Mui from '@material-ui/core';
// import * as MuiLab from '@material-ui/lab';
import { noop } from '@/utils/functions/misc/noop';
import { Skeleton } from '@/utils/components/misc/Skeleton';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import { useTable } from '../../hooks/useTable';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableRow } from '../TableRow';

export interface TableRowsProps {
	readonly each: (data: unknown, index: number) => ReactElement | null;
}

export const TableRows: FC<TableRowsProps> = ({ each }) => {
	const { state } = useTable();
	const [caption, setCaption] = useState('');

	const { columns = 0, data, loading, pagination } = state || {};
	const { displayedData } = data || {};
	const { pageSize = 10 } = pagination || {};

	useLayoutEffect(() => {
		const { data, loading } = state || {};
		const { displayedData } = data || {};

		if (displayedData && !displayedData.length && !loading) {
			setCaption('Nothing to display');
		} else {
			setCaption('');
		}
	}, [state]);

	return (
		<>
			{caption ? <caption>{caption}</caption> : null}
			<TableBody width="lg">
				{loading
					? Array.from({ length: pageSize }, () => {
							if (columns) {
								return (
									<TableRow key={uniqueId()}>
										{Array.from({ length: columns }, () => (
											<TableCell key={uniqueId()}>
												<Skeleton className="h2" variant="text" />
											</TableCell>
										))}
									</TableRow>
								);
							}

							return null;
					  })
					: displayedData?.map(each) || null}
			</TableBody>
		</>
	);
};
