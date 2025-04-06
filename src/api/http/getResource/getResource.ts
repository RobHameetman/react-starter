import {
	GetRequestInput,
	getRequest as _getRequest,
} from '@/utils/functions/http/getRequest';
import { Errors } from '@/utils/types/misc/Errors';

/**
 * @TODO - Import this from elsewhere.
 */
export type Resource = Record<string, unknown>;

/**
 * @TODO - Import this from elsewhere if necessary.
 */
export type ResourceError = Error | Errors;

/**
 * A type alias used to avoid line breaks on line 39.
 */
type Input = Omit<
	GetRequestInput<Resource, ResourceError>,
	'at' | '_dependencies'
>;

/**
 * Functional dependencies used in the {@link getResource()} function. This
 * object is provided in tests for mocking and spying.
 */
export interface GetResourceInputDependencies {
	/**
	 * Makes an HTTP GET request.
	 */
	readonly getRequest?: typeof _getRequest;
}

/**
 * Destructured arguments provided to the {@link getResource()} function.
 */
export interface GetResourceInput extends Input {
	/**
	 * The ID of the resource to get.
	 */
	readonly id: string;

	/**
	 * [Optional] Used in tests for mocking and spying.
	 * @defaultValue - `{}`
	 */
	readonly _dependencies?: GetResourceInputDependencies;
}

/**
 * @TODO
 *
 * @param input - A {@link GetResourceInput} object used for destructuring.
 */
export const getResource = ({
	id,
	_dependencies = {},
	...requestOptions
}: GetResourceInput) => {
	const { getRequest = _getRequest } = _dependencies;

	return getRequest<Resource, ResourceError>({
		at: `/resource/${id}`,
		...requestOptions,
	});
};
