import { ChangeEvent, FC, useLayoutEffect } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { uniqueId } from '@app/utils/functions/misc/uniqueId';
import type { Stylable } from '@app/utils/types/props/Stylable';
import { useTable } from '../../hooks';
import { OnFilterFn } from '../../types';
import { FilterIcon } from '../../../../icons';
import { isFilterable } from '../../functions';
import styles from './FilterBy.module.css';

export interface FilterByProps extends Stylable {
	readonly menuItems: ReadonlyArray<string>;
	readonly onFilter: OnFilterFn;
}

/**
 * A menu for changing the filters in filterable tables.
 */
export const FilterBy: FC<FilterByProps> = ({ onFilter, menuItems }) => {
	const { state, handleChangeFilter, setFilterable, setOnFilterFn } =
		useTable();

	const { filter } = state;
	const { filterBy } = filter || {};

	useLayoutEffect(() => {
		if (isFilterable(state) && !state.filter.filterBy.length) {
			handleChangeFilter({
				target: { value: menuItems[0] },
			} as ChangeEvent<{ value: unknown }>);
		}
	}, [menuItems, state]);

	useLayoutEffect(() => {
		if (!isFilterable(state)) {
			setFilterable();
			setOnFilterFn(onFilter);
		}
	}, [state]);

	return (
		<>
			<span className="inline-flex mr2 items-center lh-solid">
				<FilterIcon />
			</span>
			<Select
				color="secondary"
				className={styles.filterBy}
				value={filterBy}
				defaultValue={menuItems[0]}
				onChange={handleChangeFilter}
			>
				{menuItems.map((item) => (
					<MenuItem className="capitalize" key={uniqueId()} value={item}>
						{item}
					</MenuItem>
				))}
			</Select>
		</>
	);
};
