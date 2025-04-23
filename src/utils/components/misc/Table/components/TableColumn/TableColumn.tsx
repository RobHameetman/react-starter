import { $FC, useCallback } from 'react';
// import * as Mui from '@material-ui/core';
import { SortOrder, SortType } from '../../enums';
import { useTable } from '../../hooks';
import { Button } from '@/utils/components/misc/Button';
import styles from './TableColumn.module.css';
import { TableCell } from '../TableCell';

/**
 * Props for the <TableColumn> component.
 */
export interface TableColumnProps {
	/**
	 * @param active - [Optional] Determines whether or not the column is selected
	 * for sorting.
	 * @defaultValue - `false`
	 */
	readonly active?: boolean;
	/**
	 * @param className - [Optional] Pass in additional styling.
	 * @defaultValue - `''`
	 */
	readonly className?: string;
	/**
	 * @param sortType - [Optional] The sort type value used for the column sort.
	 * @defaultValue - `''`
	 */
	readonly sortType?: SortType;
}

export const TableColumn: $FC<TableColumnProps> = ({
	active: _active = false,
	className = '',
	children,
	sortType = SortType.NONE,
	...props
}) => {
	const { state, handleChangeSortOrder, handleChangeSortType } = useTable();

	const { sort } = state || {};
	const { active, direction = SortOrder.ASC } = sort || {};

	const isActive =
		sortType === active ||
		(active === SortType.NONE && sortType === SortType.DATE);

	const handleClick = useCallback(() => {
		if (state) {
			if (!isActive) {
				handleChangeSortType(sortType);
			} else {
				handleChangeSortOrder(
					direction === SortOrder.ASC ? SortOrder.DESC : SortOrder.ASC,
				);
			}
		}
	}, [
		state,
		isActive,
		handleChangeSortType,
		sortType,
		handleChangeSortOrder,
		direction,
	]);

	const shouldNotSort = sortType === SortType.NONE;
	const cssClassName = className ? ` ${className}` : '';

	return (
		<TableCell
			className={`${styles.tableColumn}${cssClassName}`}
			{...props}
		>
			{!shouldNotSort ? (
				<label
					className={styles.label}
					// active={isActive}
					// direction={direction}
				>
					<Button
						className={styles.sortButton}
						// type={isActive ? ButtonTypes.warning : ButtonTypes.standard}
						// fill={ButtonStyles.outlined}
						value={sortType}
						onClick={handleClick}
					>
						{children}
					</Button>
				</label>
			) : (
				children
			)}
		</TableCell>
	);
};
