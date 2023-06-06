/**
 * Retrieve the subdomain of the current URL.
 *
 * @returns The subdomain string of the current URL if it exists, or `undefined`
 * either if the subdomain is `'www'` or if the current URL does not have any
 * subdomain.
 */
export const getSubdomain = () => {
	let urlSubdomain: string | undefined;
	const subdomains = location.hostname.split('.');

	if (subdomains.length > 2) {
		urlSubdomain = subdomains[0] !== 'www' ? subdomains[0] : undefined;
	}

	return urlSubdomain;
};
