import { startTransition, useCallback, useMemo } from 'react';
import {
	Location,
	NavigateFunction,
	Path,
	useLocation,
	useNavigate,
	useParams,
	useResolvedPath,
} from 'react-router';
// import { createFromReadableStream } from 'react-server-dom-webpack/client';
import { useQueryParams } from '../useQueryParams';

export type Param = string | Record<string, string | undefined>;

export interface UseRouterResult<T extends Param = Param> {
	readonly pathname: Location['pathname'];
	readonly queryParams: Record<string, string>;
	readonly search: Location['search'];
	readonly params: ReturnType<typeof useParams<T>>;
	readonly match: Path['pathname'];
	readonly location: Location;
	readonly navigate: NavigateFunction;
}

/**
 * This hook centralizes data from 'react-router' to make it easier to use.
 *
 * @returns Data from 'react-router'.
 */
export const useRouter = <T extends Param = Param>(): UseRouterResult<T> => {
	const params = useParams<T>();
	const queryParams = useQueryParams();
	const location = useLocation();
	const { pathname: match } = useResolvedPath('');
	const _navigate = useNavigate();
	const { pathname, search } = location;

	const navigate = useCallback<NavigateFunction>(
		(...args) => {
			/* @ts-expect-error - Type 'number' is not assignable to type 'To'. */
			startTransition(() => _navigate(...args));
		},
		[_navigate],
	);

	return useMemo<UseRouterResult<T>>(
		() => ({
			pathname,
			queryParams,
			search,
			params,
			match,
			location,
			navigate,
		}),
		[pathname, queryParams, search, params, match, location, navigate],
	);
};

export default useRouter;
