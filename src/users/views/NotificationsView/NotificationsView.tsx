import { FC, useState } from 'react';
import { useAuth } from '@/auth/hooks/useAuth';
import { Button } from '@/utils/components/misc/Button';
import { ButtonFills } from '@/utils/components/misc/Button/enums/ButtonFills';
import { View } from '@/utils/views/View';
import { Inbox } from '../../components/Inbox';
import styles from './NotificationsView.module.css';

/**
 * The view rendered at the route "/notifications". Users who are checking their
 * in-app notificiations may do so here.
 *
 * @returns The presentation logic for the entire home page as a React virtual
 * DOM.
 */
export const NotificationsView: FC = () => {
	const [content, setContent] = useState('inbox');
	const { signedIn } = useAuth();

	return (
		<View title="Notifications">
			<View.Header />
			<View.Sidebar>
				<Button fill={ButtonFills.transparent} align="left" fullWidth>
					<span className="material-icons">inbox</span>
					Inbox
				</Button>
				<Button fill={ButtonFills.transparent} align="left" fullWidth>
					<span className="material-icons">bookmark</span>
					Saved
				</Button>
				<Button fill={ButtonFills.transparent} align="left" fullWidth>
					<span className="material-icons">done</span>
					Done
				</Button>
			</View.Sidebar>
			<View.Content className="p-10">
				{/* <Inbox /> */}
				<Button.Group fill="outlined" size="xs">
					<Button>All</Button>
					<Button>Read</Button>
					<Button>Unread</Button>
				</Button.Group>
				<Button.Group fill="outlined" size="sm">
					<Button fullWidth>All</Button>
					<Button>Read</Button>
					<Button>Unread</Button>
				</Button.Group>
				<Button.Group fill="outlined">
					<Button>All</Button>
					<Button>Read</Button>
					<Button>Unread</Button>
				</Button.Group>
				<Button.Group fill="outlined" size="lg">
					<Button>All</Button>
					<Button>Read</Button>
					<Button>Unread</Button>
				</Button.Group>
				<Button.Group fill="outlined" size="xl" vertical toggleable>
					<Button id="btn1">All</Button>
					<Button id="btn2">Read</Button>
					<Button id="btn3">Unread</Button>
				</Button.Group>
				{/* Single Buttonuuuu's */}
				<Button fill="filled" size="xs">
					XS
				</Button>
				<Button fill="filled" size="sm">
					SM
				</Button>
				<Button fill="filled" size="md">
					MD
				</Button>
				<Button fill="filled" size="lg">
					LG
				</Button>
				<Button fill="filled" size="xl">
					XL
				</Button>
				{/* <div className="f0">f0: Lorem ipsum dolor sit amet</div>
				<div className="f12">f12: Lorem ipsum dolor sit amet</div>
				<div className="f11">f11: Lorem ipsum dolor sit amet</div>
				<div className="f10">f10: Lorem ipsum dolor sit amet</div>
				<div className="f9">f9: Lorem ipsum dolor sit amet</div>
				<div className="f8">f8: Lorem ipsum dolor sit amet</div>
				<div className="f7">f7: Lorem ipsum dolor sit amet</div>
				<div className="f6">f6: Lorem ipsum dolor sit amet</div>
				<div className="f5">f5: Lorem ipsum dolor sit amet</div>
				<div className="f4">f4: Lorem ipsum dolor sit amet</div>
				<div className="f3">f3: Lorem ipsum dolor sit amet</div>
				<div className="f2">f2: Lorem ipsum dolor sit amet</div>
				<div className="f1">f1: Lorem ipsum dolor sit amet</div> */}
			</View.Content>
		</View>
	);
};
