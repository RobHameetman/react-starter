import { $FC } from 'react';
import { useSemanticAsProp } from '@app/utils/hooks/react/useSemanticAsProp';
import { Polymorphic } from '@app/utils/types/props/Polymorphic';
import type { Stylable } from '@app/utils/types/props/Stylable';
import { Table } from '@app/utils/components/misc/Table';
import { Search } from '@app/utils/components/misc/Table/components/Search';
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
	as: _as = 'div',
	className = '',
	children,
	prop = false,
}) => {
	const RootNodeAs = useSemanticAsProp({ as: _as });

	const cssOverride = className ? ` ${className}` : '';

	return (
		<Table name="Inbox" initialData={[]} sortOptions={{}}>
			<Table.Toolbar>
				<Search searchAgainst={() => ''} />
			</Table.Toolbar>
		</Table>
	);
};
