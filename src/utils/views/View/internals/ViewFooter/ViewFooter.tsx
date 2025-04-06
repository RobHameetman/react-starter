import { $FC } from 'react';
import { Avatar, Grid, useTheme } from '@nextui-org/react';
import { useBreakpoints } from '@/utils/hooks/misc/useBreakpoints';
import type { Stylable } from '@/utils/types/props';
import styles from './ViewFooter.module.css';

/**
 * Compositional prop types for the {@link ViewFooter} component.
 */
type ComposedProps = Stylable;

/**
 * Prop types for the {@link ViewFooter} component.
 */
export interface ViewFooterProps extends ComposedProps {
	/**
	 * [Optional] Determines whether the footer should always stick to the bottom
	 * of the page.
	 * @defaultValue - `false`
	 */
	readonly sticky?: boolean;
}

/**
 * Render a footer at the bottom of the page. This component must be included as
 * a child of `<View />` for it to appear correctly.
 *
 * @example
 * ```TSX
 * <View>
 *   {...}
 *   <View.Footer />
 * </View>
 * ```
 *
 * @returns A rendered page/view-level footer.
 */
export const ViewFooter: $FC<ViewFooterProps> = ({
	className = '',
	sticky = false,
}) => {
	const { isDark } = useTheme();

	const { isMobile } = useBreakpoints();

	const cssHeight = isMobile ? 'h-16' : 'h-64';
	const cssSticky = sticky || isMobile ? styles.sticky : '';

	return (
		<footer
			className={`w-full ${cssHeight} ${styles.footer} ${cssSticky} ${className}`}
		>
			<Grid.Container gap={2} justify="center" className="p-0">
				{isMobile ? (
					<>
						<Grid xs={1} className="p-1.5" />
						<Grid xs={2} className="flex-col justify-center items-center p-1.5">
							<span className="material-icons md-36 text-3xl">
								phone_iphone
							</span>
							<span className="text-xs">Posts</span>
						</Grid>
						<Grid xs={2} className="flex-col justify-center items-center p-1.5">
							<span className="material-icons md-36 text-3xl">mail</span>
							<span className="text-xs">Inbox</span>
						</Grid>
						<Grid xs={2} className="flex-col justify-center items-center p-1.5">
							<Avatar
								bordered
								as="button"
								color="warning"
								size="md"
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
							/>
						</Grid>
						<Grid xs={2} className="flex-col justify-center items-center p-1.5">
							<span className="material-icons md-36 text-3xl">search</span>
							<span className="text-xs">Search</span>
						</Grid>
						<Grid xs={2} className="flex-col justify-center items-center p-1.5">
							<span className="material-icons md-36 text-3xl">settings</span>
							<span className="text-xs">Settings</span>
						</Grid>
						<Grid xs={1} className="p-1.5" />
					</>
				) : (
					<>
						<Grid xs={4} className="flex-col" />
						<Grid xs={4} className="flex-col" />
						<Grid xs={4} className="flex-col" />
					</>
				)}
			</Grid.Container>
		</footer>
	);
};

export default ViewFooter;
