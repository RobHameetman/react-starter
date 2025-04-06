import { useLayoutEffect } from 'react';
import { Input, InputTypes } from '@/utils/components/forms/Input';
import { cssClasses } from '@/utils/functions/misc/cssClasses';
import { SearchIcon } from '@/utils/icons/SearchIcon';
import type { Stylable } from '@/utils/types/props/Stylable';
import { SearchMatch } from '../SearchMatch';
import { isSearchable } from '../../functions';
import { useTable } from '../../hooks';
import { SearchAgainstFn } from '../../types';
import { CC } from '../../../../../types';
import styles from './Search.module.css';

/**
 * Prop types for the {@link Search} component.
 */
export interface SearchProps extends Stylable {
	/**
	 * The function to use to search against the data.
	 */
	readonly searchAgainst: SearchAgainstFn;
}

/**
 * Subcomponents of the {@link Search} component.
 */
export interface SearchComponents {
	Match: typeof SearchMatch;
}

/**
 * A search bar for searching through stats and records.
 */
export const Search: CC<SearchComponents, SearchProps> = ({
	searchAgainst = () => '',
}) => {
	const {
		initialData,
		state,
		handleChangeSearchInput,
		setSearchable,
		setSearchAgainstFn,
	} = useTable();

	const { data, filter } = state;
	const { displayedData } = data || {};
	const { searchBy = '' } = filter || {};

	useLayoutEffect(() => {
		if (!isSearchable(state)) {
			setSearchable();
		}
	}, [state]);

	useLayoutEffect(() => {
		setSearchAgainstFn(searchAgainst);
	}, [searchAgainst, initialData]);

	const cssInput = searchBy
		? (displayedData || []).length
			? styles.match
			: styles.noMatch
		: styles.noValue;

	return (
		<div className={styles.container}>
			<span className="mr2">
				<SearchIcon />
			</span>
			<Input
				placeholder="Search…"
				className={cssInput}
				onChange={handleChangeSearchInput}
				type={InputTypes.transparent}
				value={searchBy}
				fullWidth
			/>
		</div>
	);
};

Search.Match = SearchMatch;
