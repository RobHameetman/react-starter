import { $FC, useCallback, useState } from 'react';
// import { Grid } from '@nextui-org/react';
import { Button } from '@/utils/components/misc/Button';
import { Grid } from '@/utils/components/structure/Grid';
import { DoubleChevronLeftIcon } from '@/utils/icons/DoubleChevronLeftIcon';
import { DoubleChevronRightIcon } from '@/utils/icons/DoubleChevronRightIcon';
import type { Polymorphic } from '@/utils/types/props/Polymorphic';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { Testable } from '@/utils/types/props/Testable';
import { useBreakpoints } from '@/utils/hooks/misc/useBreakpoints';
import styles from './PageSidebar.module.css';

/**
 * Compositional prop types for the {@link PageSidebar} component.
 */
type ComposedProps = Polymorphic & Stylable & Testable;

/**
 * Prop types for the View.{@link PageSidebar} component.
 */
export interface PageSidebarProps extends ComposedProps {
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
 * @param props - A {@link PageSidebarProps} object.
 *
 * @returns A rendered page/view-level sidebar.
 */
export const PageSidebar: $FC<PageSidebarProps> = ({
	as: As = 'aside',
	className = '',
	children,
	elastic = false,
	expand = false,
	id = 'sidebar',
	testId = id,
	...props
}) => {
	const [expanded, setExpanded] = useState(expand);
	const { isMobile } = useBreakpoints();

	const cssOverride = className ? ` ${className}` : '';
	const cssExpanded =
		(elastic && expanded) || !elastic ? ` ${styles.expanded}` : '';

	const handleClickSizeToggle = useCallback(() => {
		setExpanded((currentlyExpanded: boolean) => !currentlyExpanded);
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

export default PageSidebar;
