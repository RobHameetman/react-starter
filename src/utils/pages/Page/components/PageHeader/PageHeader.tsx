import { $FC } from 'react';
// import { Dropdown, Navbar, Input, Link } from '@nextui-org/react';
import { useAuth } from '@/auth/hooks/useAuth';
import { Input } from '@/utils/components/forms/Input';
// import { Select } from '@/utils/components/forms/Select';
import { Kbd } from '@/utils/components/info/Kbd';
import { Link } from '@/utils/components/navigation/Link';
import { Navbar } from '@/utils/components/navigation/Navbar';
import { Dropover } from '@/utils/components/overlays/Dropover';
import { Avatar } from '@/utils/components/misc/Avatar';
import { Button } from '@/utils/components/misc/Button';
import { Logo } from '@/utils/components/misc/Logo';
import { useBreakpoints } from '@/utils/hooks/misc/useBreakpoints';
import { DarkModeIcon } from '@/utils/icons/DarkModeIcon';
import { LightModeIcon } from '@/utils/icons/LightModeIcon';
import { useTheme } from '@/utils/hooks/misc/useTheme';
import type { Stylable } from '@/utils/types/props/Stylable';
import type { Testable } from '@/utils/types/props/Testable';
import styles from './PageHeader.module.css';

const Command: $FC = () => (
	<Kbd className="searchBarCommand" modifiedBy="command">
		K
	</Kbd>
);

/**
 * Compositional prop types for the {@link PageHeader} component.
 */
type ComposedProps = Stylable & Testable;

/**
 * Prop types for the {@link PageHeader} component.
 */
export interface PageHeaderProps extends Stylable, Testable {
	/**
	 * [Optional] Determines whether the footer should always stick to the bottom
	 * of the page.
	 * @defaultValue - `false`
	 */
	readonly sticky?: boolean;
}

/**
 * Render a header at the top of the page. This component must be included as a
 * child of `<View />` for it to appear correctly.
 *
 * @example
 * ```TSX
 * <View>
 *   <View.Header />
 *   {...}
 * </View>
 * ```
 *
 * @param props - A {@link PageHeaderProps} object.
 *
 * @returns A rendered page/view-level header.
 */
export const PageHeader: $FC<Record<string, unknown>> = ({
	className = '',
	children,
	sticky = false,
	testId = 'navbar',
}) => {
	/*
	 * const items = {
	 * 	Home: {
	 * 		href: '/',
	 * 		icon: 'home',
	 * 	},
	 * 	History: {
	 * 		href: '/',
	 * 		icon: 'home',
	 * 	},,
	 * 	Pricing: '/pricing',
	 * };
	 */

	const { signedIn } = useAuth();

	const { isMobile } = useBreakpoints();
	const { isDark, setDarkTheme, setLightTheme } = useTheme();

	const cssSticky = sticky || isMobile ? ` ${styles.sticky}` : '';
	const cssOverride = className ? ` ${className}` : '';

	return (
		<Navbar
			className={`${styles.header}${cssSticky}${cssOverride}`}
			maxWidth="fluid"
			data-test-id={testId}
			isCompact
		>
			{/* {isMobile && <Navbar.Toggle aria-label="menu" />} */}
			{!signedIn && (
				<Navbar.Branding className={isMobile ? 'justify-center' : ''}>
					<Link href="/">
						<Logo className={isMobile ? 'inline-flex grow' : ''} withVersion />
					</Link>
				</Navbar.Branding>
			)}
			{isMobile ? (
				// <Navbar.Collapse>
				// 	<Navbar.CollapseItem>History</Navbar.CollapseItem>
				// </Navbar.Collapse>
				<></>
			) : (
				/* History */
				<Navbar.Content className="px-3">
					<Dropover placement="bottom-right">
						<Navbar.Item className="text-2xl cursor-pointer">
							<Dropover.Trigger>
								<span className="material-icons">history</span>
							</Dropover.Trigger>
						</Navbar.Item>
						<Dropover.Menu aria-label="History">
							<Dropover.Item key="Item1">Item 1</Dropover.Item>
							<Dropover.Item key="Item2">Item 2</Dropover.Item>
							<Dropover.Item key="Item3">Item 3</Dropover.Item>
							<Dropover.Item key="Item4">Item 4</Dropover.Item>
							<Dropover.Item key="Item5">Item 5</Dropover.Item>
							<Dropover.Item key="Item6">Item 6</Dropover.Item>
						</Dropover.Menu>
					</Dropover>
				</Navbar.Content>
			)}
			{/* Search */}
			{!isMobile && (
				<Navbar.Content className="grow px-3 justify-end">
					<Navbar.Item>
						<Button
							className="text-black"
							icon={isDark ? <DarkModeIcon /> : <LightModeIcon />}
							onPress={isDark ? setLightTheme : setDarkTheme}
							fill="transparent"
							auto
						/>
					</Navbar.Item>
					<Input
						// animated={false}
						// contentRight={<Command />}
						// contentRightStyling={false}
						placeholder="Search..."
						// size="xs"
						// shadow={false}
					/>
				</Navbar.Content>
			)}
			{isMobile ? (
				<Navbar.Content>
					<div className=""></div>
				</Navbar.Content>
			) : (
				<Navbar.Content gap={10} className="justify-end">
					<Navbar.Item className="text-2xl cursor-pointer">
						<Link className="text-current" href="/notifications">
							<span className="material-icons">inbox</span>
						</Link>
					</Navbar.Item>
					<Navbar.Item>
						<Link className="text-current" href="/support">
							<span className="material-icons">help</span>
						</Link>
					</Navbar.Item>
					{signedIn ? (
						<Dropover placement="bottom-right">
							<Navbar.Item>
								<Dropover.Trigger>
									<Avatar
										// src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
										size="sm"
										squared
									/>
								</Dropover.Trigger>
							</Navbar.Item>
							<Dropover.Menu
								aria-label="User menu actions"
								color="warning"
								// onAction={(actionKey) => console.log({ actionKey })}
								disabledKeys={['member_since']}
							>
								<Dropover.Item key="profile" className="h-16">
									<span className="flex font-bold text-lg">ZRider</span>
									<span className="text-sm">zoey@example.com</span>
								</Dropover.Item>
								<Dropover.Item
									key="member_since"
									textColor="default"
									withDivider
								>
									<span className="font-bold flex text-sm uppercase">
										Member Since
									</span>
									<span className="text-xs">Jan 10, 2018</span>
								</Dropover.Item>
								<Dropover.Item key="settings" withDivider>
									<Link className="text-black" href="/settings">
										My Settings
									</Link>
								</Dropover.Item>
								<Dropover.Item key="team_settings">
									<Link className="text-black" href="/settings">
										Team Settings
									</Link>
								</Dropover.Item>
								<Dropover.Item key="analytics" withDivider>
									Analytics
								</Dropover.Item>
								<Dropover.Item key="system">System</Dropover.Item>
								<Dropover.Item key="configurations">
									Configurations
								</Dropover.Item>
								<Dropover.Item key="help_and_feedback" withDivider>
									<Link className="text-black" href="/support">
										Help & Feedback
									</Link>
								</Dropover.Item>
								<Dropover.Item key="logout" withDivider color="error">
									Log Out
								</Dropover.Item>
							</Dropover.Menu>
						</Dropover>
					) : (
						<Navbar.Item>
							<Button
								as={Link}
								href="/login"
								size="sm"
								onClick={() => console.log('Clicked!')}
							>
								Sign In
							</Button>
						</Navbar.Item>
					)}
				</Navbar.Content>
			)}
			{children}
		</Navbar>
	);
};

export default PageHeader;
