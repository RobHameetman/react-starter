import { AuthContext } from '../AuthContext';

export const fakeAuthContext = ({
	...overrideProps
}: Record<string, unknown> = {}): AuthContext => ({
	key: '',
	...overrideProps,
});
