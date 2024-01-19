/**
 * Returns the initials of a given name.
 *
 * @param name - A string representing a person's name.
 *
 * @returns The initials of the given name.
 */
export const getInitials = (name?: string) => {
	if (!name) {
		return undefined;
	}

	const safeName = name
		.replace(/[^\p{L}\p{Z}]+/gu, '')
		.replace(/\p{Z}+/gu, ' ')
		.trim();

	if (!safeName) {
		return undefined;
	}

	if (safeName.length === 2 && safeName === safeName.toUpperCase()) {
		return safeName;
	}

	const names = safeName.toUpperCase().split(' ');
	const [forename, ...remainingNames] = names;
	const [surname] = remainingNames.reverse();

	return names.length === 1
		? forename.charAt(0)
		: `${forename.charAt(0)}${surname.charAt(0)}`;
};
