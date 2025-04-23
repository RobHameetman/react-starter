import { ChangeEvent, FC, useLayoutEffect } from 'react';
import { Select } from '@/utils/components/forms/Select';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import type { Stylable } from '@/utils/types/props/Stylable';
import { useTable } from '../../hooks';
import { OnFilterFn } from '../../types';
import { FilterIcon } from '@/utils/icons/FilterIcon';
import { isFilterable } from '../../functions';
import styles from './FilterBy.module.css';

export interface FilterByProps extends Stylable {
	readonly options: ReadonlyArray<string>;
	readonly onFilter: OnFilterFn;
}

/**
 * A menu for changing the filters in filterable tables.
 */
export const FilterBy: FC<FilterByProps> = ({ onFilter, options }) => {
	const { state, handleChangeFilter, setFilterable, setOnFilterFn } =
		useTable();

	const { filter } = state;
	const { filterBy } = filter || {};

	useLayoutEffect(() => {
		if (isFilterable(state) && !state.filter.filterBy.length) {
			handleChangeFilter({
				target: { value: options[0] },
			} as ChangeEvent<{ value: unknown }>);
		}
	}, [options, state]);

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
				defaultValue={options[0]}
				// onChange={handleChangeFilter}
			>
				{options.map((item) => (
					<Select.Option className="capitalize" key={uniqueId()} value={item}>
						{item}
					</Select.Option>
				))}
			</Select>
		</>
	);
};
