/**
 * Filter an array of boolean an expressions and return the count of how many
 * are `false`.
 *
 * @param criteria - An array of boolean expressions.
 *
 * @returns A `number` which is the count of how many expressions are `false`.
 */
export const criteriaCount = (criteria: ReadonlyArray<boolean>) => {
	return criteria.filter((c) => c === false).length;
};
