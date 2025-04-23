import { FC } from 'react';
import { useLogError } from '@/log/hooks/useLogError';
import { DEFAULT_ERROR } from '../../constants/DEFAULT_ERROR';
import { Page } from '../Page';

/**
 * Render a page to display when an error occurs.
 *
 * @returns A rendered error page with an error message.
 */
export const ErrorPage: FC<Partial<Error>> = (
	error = DEFAULT_ERROR,
) => {
	const { message } = error;

	useLogError({
		auto: true,
		message: `Service "${process.env.APP_NAME}" crashed`,
		error: error as Error,
		extra: error.stack,
	});

	return (
		<Page title="Not Found">
			<Page.Header />
			<Page.Content>
				{/**
				 * @TODO
				 */}
			</Page.Content>
			<Page.Footer />
		</Page>
	);
};

export default ErrorPage;
