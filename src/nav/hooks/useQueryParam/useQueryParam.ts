import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { useRouter } from '../useRouter';

type QueryParam = string | string[] | undefined;

export interface HasParam {
	readonly param: QueryParam;
}

/**
 * Set a stateful query param in the URL.
 *
 * @returns The current value of the param and a function to set the param,
 * similar to how `useState()` works.
 */
export const useQueryParam = (paramName: string) => {
	const { queryParams, navigate } = useRouter();

	const params = new URLSearchParams(queryParams as Record<string, string>);

	const { param } = Object.defineProperty({ param: '' as QueryParam }, 'param', {
		writable: false,
		get: () => {
			const allParams = params.getAll(paramName);
			const { length } = allParams;

			if (length > 1) {
				return allParams;
			}

			if (length === 1) {
				const param = allParams.at(0);
				const splitParam = param?.split(',');

				return (splitParam?.length || -1) >= 1
					? splitParam?.length === 1
						? splitParam.at(0)
						: splitParam
					: undefined;
			}

			return undefined;
		},
	});

	const setParam = useCallback<Dispatch<SetStateAction<QueryParam>>>((value) => {
		const resolvedValue = typeof value === 'function' ? value(param) : value;
		const isArray = resolvedValue instanceof Array;
		const exists = param !== undefined;
		const willBeDeleted = (isArray && resolvedValue.length === 0) || resolvedValue === undefined;
		const valuesDoNotMatch = param !== resolvedValue;

		if (willBeDeleted && exists) {
			params.delete(paramName);
		} else if (!willBeDeleted && valuesDoNotMatch) {
			if (isArray) {
				resolvedValue.forEach((val) => params.append(paramName, val));
			} else {
				params.set(paramName, resolvedValue);
			}
		}

		navigate({
			...location,
			search: `?${params.toString()}`,
		});
	}, []);

	return [param, setParam] as const;
};

export default useQueryParam;
