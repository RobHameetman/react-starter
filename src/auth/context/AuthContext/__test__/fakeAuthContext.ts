import { fakeUser } from '@/users/types/User/__test__';
import { AuthContext } from '../AuthContext';

export const fakeAuthContext = ({
	...overrideProps
}: Record<string, unknown> = {}): AuthContext => ({
	clientId: '',
	clientSecret: '',
	redirectUri: '',
	signedIn: false,
	user: fakeUser() as AuthContext['user'],
	...overrideProps,
});
