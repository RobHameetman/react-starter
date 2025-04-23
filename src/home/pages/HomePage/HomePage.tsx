import { FC, ChangeEventHandler, useCallback, useRef, useState } from 'react';
// import { Card } from '@nextui-org/react';
import { Button } from '@/utils/components/misc/Button';
import { Checkbox } from '@/utils/components/forms/Checkbox';
import { Radio } from '@/utils/components/forms/Radio';
import { Card } from '@/utils/components/structure/Card';
import { useAuth } from '@/auth/hooks/useAuth';
import { useBreakpoints } from '@/utils/hooks/misc/useBreakpoints';
import { PressEventHandler } from '@/utils/types/handlers/PressEventHandler';
import { HoverEventHandler } from '@/utils/types/handlers/HoverEventHandler';
import { Page } from '@/utils/pages/Page';
import styles from './HomePage.module.css';

interface MyComponentProps {
	name: string;
	exp1: unknown;
}

/**
 * The page rendered at the root route "/". Add a description of your page here
 * in this comment as you create new pages.
 *
 * @returns The presentation logic for the entire home page as a React virtual
 * DOM.
 */
export const HomePage: FC = () => {
	const { signedIn } = useAuth();
	const { isMobile } = useBreakpoints();

	const ref = useRef<HTMLDivElement>(null);

	const [checked, setChecked] = useState(false);

	const handleHover = useCallback<HoverEventHandler<HTMLDivElement>>((e) => {
		console.log(`hovering over checkbox "${e.currentTarget.id}"`);
	}, []);

	const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
		(e) => {
			console.log(`value changed to ${e.currentTarget.value}`);
		},
		[],
	);

	const handlePress = useCallback<PressEventHandler<HTMLInputElement>>((e) => {
		console.group('handlePress()');
		console.log(e);
		console.dir(e.currentTarget);
		console.log(e.currentTarget.value);
		console.groupEnd();
	}, []);

	const handleClick = useCallback<PressEventHandler<HTMLButtonElement>>((e) => {
		console.group('handleClick()');
		console.dir(e.currentTarget);
		console.log(e.type);
		console.log('clicked!');
		console.groupEnd();
	}, []);

	return (
		<Page title="Home">
			<Page.Header />
			{!isMobile && <Page.Sidebar elastic />}
			<Page.Content>
				<Card className={styles.card} variant="bordered">
					<Card.Header className={styles.title}>Title</Card.Header>
					<Card.Divider />
					<Card.Body className={styles.content}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
						{/* <Checkbox.Group onPress={handlePress} vertical>
							<Checkbox>Tokyo</Checkbox>
							<Checkbox>Chicago</Checkbox>
							<Checkbox>Johannesburg</Checkbox>
							<Checkbox>Cairo</Checkbox>
							<Checkbox>Sydney</Checkbox>
						</Checkbox.Group> */}
						{/* <Checkbox onMouseLeave={handleHover}>Tokyo</Checkbox> */}
						{/* <Radio.Group label="Cities" vertical>
							<Radio value="tokyo" onPress={handlePress} disabled>
								Tokyo
							</Radio>
							<Radio value="chicago" onPress={handlePress}>
								Chicago
							</Radio>
							<Radio value="johannesburg" onPress={handlePress}>
								Johannesburg
							</Radio>
							<Radio value="cairo" onPress={handlePress}>
								Cairo
							</Radio>
							<Radio value="sydney" onPress={handlePress}>
								Sydney
							</Radio>
						</Radio.Group> */}
						<Radio value="tokyo" onChange={handleChange} ref={ref}>
							Tokyo
						</Radio>
					</Card.Body>
					<Card.Divider />
					<Card.Footer>
						<Button size="lg" rounded>
							Cancel
						</Button>
						<Button size="lg">Agree</Button>
					</Card.Footer>
				</Card>
			</Page.Content>
			{!isMobile && <Page.Sidebar id="sidebar-2" />}
			<Page.Footer sticky />
		</Page>
	);
};
