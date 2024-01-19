import { FC, ReactElement, useLayoutEffect, useState } from 'react';
import * as Mui from '@material-ui/core';
import * as MuiLab from '@material-ui/lab';
import { noop } from '@app/utils/functions/misc/noop';
import { useTable } from '../../hooks';

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
			<Mui.TableBody>
				{loading
					? Array.from({ length: pageSize }, () => {
							if (columns) {
								return (
									<Mui.TableRow key={uniqueId()}>
										{Array.from({ length: columns }, () => (
											<Mui.TableCell key={uniqueId()}>
												<MuiLab.Skeleton className="h2" variant="text" />
											</Mui.TableCell>
										))}
									</Mui.TableRow>
								);
							}

							return null;
					  })
					: displayedData?.map(each) || null}
			</Mui.TableBody>
		</>
	);
};
