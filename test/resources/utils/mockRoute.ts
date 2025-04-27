import { faker } from '@faker-js/faker';

export const mockRoute = (route: Partial<Location> | string) => {
	/* @ts-expect-error - The operand of a 'delete' operator must be optional. */
	delete window.location;

	const isUrlOrRouteArg = typeof route === 'string';
	const isRouteArg = isUrlOrRouteArg && route.startsWith('/');

	const url = new URL((isUrlOrRouteArg && !isRouteArg) ? route : faker.internet.url());

	window.location = {
		hash: url.hash,
		host: url.host,
		hostname: url.hostname,
		href: url.href,
		origin: url.origin,
		pathname: url.pathname,
		port: url.port,
		protocol: url.protocol,
		search: url.search,
		...(isUrlOrRouteArg ? {} : location),
	} as Location & string;
};
