import { FC, MouseEventHandler, useCallback } from 'react';
import * as Mui from '@material-ui/core';
import { useRouter } from '@/nav/hooks/useRouter';
import { noop } from '@/utils/functions/misc/noop';
import { uniqueId } from '@/utils/functions/misc/uniqueId';
import { isNoop } from '@/utils/types/misc/Noop';
import styles from './TableRow.module.css';

export interface TableRowProps {
	/**
	 * @param className - [Optional] Pass in additional styling.
	 * @defaultValue - `''`
	 */
	readonly className?: string;
	/**
	 * @param href - [Optional] Used to allow clicking a table row to redirect to another
	 * route.
	 * @defaultValue - `''`
	 */
	readonly href?: string;
	/**
	 * @param onClick - [Optional] A handler function fired when the row is
	 * clicked.
	 * @defaultValue - A no-op function.
	 */
	readonly onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const TableRow: FC<TableRowProps> = ({
	children,
	href = '',
	onClick = noop,
}) => {
	const { push } = useRouter();

	const handleClick = useCallback(() => {
		onClick();

		if (href) {
			push(href);
		}
	}, [href, onClick, push]);

	return (
		<Mui.TableRow
			key={uniqueId()}
			hover
			color="inherit"
			className={href || !isNoop(onClick) ? styles.link : ''}
			onClick={handleClick}
		>
			{children}
		</Mui.TableRow>
	);
};
