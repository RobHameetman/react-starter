import { $FC } from 'react';
import { useTable } from '../../hooks';
import styles from './SearchMatch.module.css';

export const SearchMatch: $FC = ({ children }) => {
	const { state } = useTable();

	const { filter } = state;
	const { searchBy = '' } = filter || {};

	const safeSearchBy =
		searchBy.startsWith('?') || searchBy.startsWith('.')
			? `\\${searchBy}`
			: searchBy;

	if (typeof children === 'string') {
		const [match = ''] = children.match(new RegExp(safeSearchBy, 'gi')) ?? [];
		const arr = children.split(match);

		if (match) {
			return (
				<>
					{arr.reduce((all, text, index) => {
						return all.concat([
							<>{text}</>,
							index < arr.length - 1 ? (
								<span className={`${styles.match}`}>{match}</span>
							) : (
								<></>
							),
						]);
						/**
						 * @TODO - This used to just be {@link JSX.Element} but required
						 * the {@link React} namespace to work around this issue:
						 *
						 * @see https://github.com/styled-components/styled-components/issues/4359
						 */
					}, [] as Array<React.JSX.Element>)}
				</>
			);
		}

		return <>{children}</>;
	}

	return <>{children}</>;
};
