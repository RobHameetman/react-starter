import { $FC, useCallback, useState } from 'react';
import { Grid } from '@nextui-org/react';
import { Button } from '@/utils/components/misc/Button';
import { DoubleChevronLeftIcon } from '@/utils/icons/DoubleChevronLeftIcon';
import { DoubleChevronRightIcon } from '@/utils/icons/DoubleChevronRightIcon';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { Testable } from '@/utils/types/props/Testable';
import { useBreakpoints, useSemanticAsProp } from '../../../../hooks';
import styles from './Sidebar.module.css';

/**
 * Compositional prop types for the {@link ViewSidebar} component.
 */
type ComposedProps = Polymorphic & Stylable & Testable;

/**
 * Prop types for the View.{@link ViewSidebar} component.
 */
export interface ViewSidebarProps extends ComposedProps {
	/**
	 * [Optional] Determines whether the sidebar should have a button which allows
	 * it to expand and contract.
	 * @defaultValue - `false`
	 */
	readonly elastic?: boolean;

	/**
	 * [Optional] Set to `true` to expand the sidebar by default.
	 * @defaultValue - `false`
	 */
	readonly expand?: boolean;

	/**
	 * [Optional] The "id" attribute of the root node.
	 * @defaultValue - `'main'`
	 */
	readonly id?: string;
}

/**
 * Render the view/page sidebar inside of this component. This component must be
 * included as a child of `<View />` for it to appear correctly.
 *
 * @example
 * ```TSX
 * <View>
 *   <View.Sidebar>
 *     {...}
 *   </View.Sidebar>
 * </View>
 * ```
 *
 * @param props - A {@link ViewSidebarProps} object.
 *
 * @returns A rendered page/view-level sidebar.
 */
export const Sidebar: $FC<SidebarProps> = ({
	as: _as = 'aside',
	className = '',
	children,
	elastic = false,
	expand = false,
	id = 'sidebar',
	testId = id,
	...props
}) => {
	const [expanded, setExpanded] = useState(expand);

	const As = useSemanticAsProp({ as: _as });
	const { isMobile } = useBreakpoints();

	const cssOverride = className ? ` ${className}` : '';
	const cssExpanded =
		(elastic && expanded) || !elastic ? ` ${styles.expanded}` : '';

	const handleClickSizeToggle = useCallback(() => {
		setExpanded((currentlyExpanded) => !currentlyExpanded);
	}, []);

	return (
		<As
			className={`${styles.sidebar}${cssExpanded}${cssOverride}`}
			id={id}
			tabIndex={-1}
			data-test-id={testId}
			{...props}
		>
			<Grid.Container className="h-full" gap={0}>
				<Grid xs={12} className={styles.content}>
					{children}
				</Grid>
				{elastic && (
					<Grid
						xs={12}
						className={styles.resize}
						onClick={handleClickSizeToggle}
					>
						<Button
							fill="outlined"
							icon={
								expanded ? (
									<DoubleChevronLeftIcon aria-hidden />
								) : (
									<DoubleChevronRightIcon aria-hidden />
								)
							}
						/>
					</Grid>
				)}
			</Grid.Container>
		</As>
	);
};
