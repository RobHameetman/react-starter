import { FC } from 'react';
import { useLogError } from '@app/log/hooks/useLogError';
import { DEFAULT_ERROR } from '../../constants/DEFAULT_ERROR';
import { View } from '../View';

/**
 * Render a page to display when an error occurs.
 *
 * @returns A rendered error page with an error message.
 */
export const ErrorView: FC<Partial<Error>> = (
	error = DEFAULT_ERROR,
	info: string,
) => {
	const { message } = error;

	useLogError({
		auto: true,
		message: `Service "${process.env.APP_NAME}" crashed`,
		error: error as Error,
		extra: info,
	});

	return (
		<View title="Not Found">
			<View.NavBar />
			<View.Content>
				{/**
				 * @TODO
				 */}
			</View.Content>
			<View.Footer />
		</View>
	);
};
