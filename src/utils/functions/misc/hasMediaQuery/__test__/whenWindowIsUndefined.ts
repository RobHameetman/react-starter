import { mockWindow } from '@@/mocks/misc/mockWindow';

export const whenWindowIsUndefined = () => {
	const query = '(prefers-color-scheme: dark)';

	mockWindow();

	return query;
};
