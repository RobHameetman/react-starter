import { $FC } from 'react';
import { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import { Table } from '@/utils/components/misc/Table';
import { Search } from '@/utils/components/misc/Table/components/Search';
import styles from './Inbox.module.css';

type ComposedProps = Polymorphic & Stylable;

/**
 * Prop types for {@link Inbox}.
 */
export interface InboxProps extends ComposedProps {
	/**
	 * [Optional] The position of the form buttons.
	 * @defaultValue - `false`
	 */
	readonly prop?: boolean;
}

/**
 * @TODO - A short description of the component here.
 */
export const Inbox: $FC<InboxProps> = ({
	as: As = Table,
	className = '',
	children,
	prop = false,
}) => {
	const cssOverride = className ? ` ${className}` : '';

	return (
		<As name="Inbox" initialData={[]} sortOptions={{}}>
			<Table.Toolbar>
				<Search searchAgainst={() => ''} />
			</Table.Toolbar>
		</As>
	);
};
