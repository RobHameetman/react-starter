import { $FC } from 'react';
import styles from './TableToolbar.module.css';

export const TableToolbar: $FC = ({ children }) => {
	const hasValidChildren =
		(children instanceof Array && children.filter(Boolean).length) ||
		(typeof children === 'object' && children !== null);

	return hasValidChildren ? (
		// <Toolbar className={styles.tableToolbar} disableGutters>
		<div className={styles.tableToolbar}>
			{children}
		</div>
	) : (
		<>{children}</>
	);
};
