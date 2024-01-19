import React, { FC, useLayoutEffect } from 'react';
import * as Mui from '@material-ui/core';
import { useTable } from '../../hooks';
import { isPaginated } from '../../functions';

export const TablePagination: FC = () => {
	const {
		state,
		handleChangePage,
		handleChangeRowsPerPage,
		setPaginated,
	} = useTable();

	const { pagination } = state || {};
	const { count = 0, currentPage = 1, pageSize = 10 } = pagination || {};

	useLayoutEffect(() => {
		if (!isPaginated(state)) {
			setPaginated();
		}
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, [state]);

	/**
	 * Propagate page change to parent
	 */
	const _handlePageChange = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		page: number,
	) => {
		handleChangePage(event, page);
	};

	return (
		<Mui.TablePagination
			component="div"
			count={count}
			rowsPerPage={pageSize}
			page={currentPage - 1}
			onChangePage={_handlePageChange}
			onChangeRowsPerPage={handleChangeRowsPerPage}
			hidden={count === 0}
		/>
	);
};
