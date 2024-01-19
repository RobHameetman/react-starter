const DEFAULT_PREFIX = '$app';
const map = new Map();

/**
 * Generate a unique ID.
 */
export const uniqueId = (prefix = DEFAULT_PREFIX) => {
	const isDefault = prefix === DEFAULT_PREFIX;
	let counter = map.get(prefix) || 0;

	counter++;
	map.set(prefix, counter);

	return isDefault ? String(counter) : `${prefix}${counter}`;
};
