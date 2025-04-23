/// <reference types="@testing-library/jest-dom" />

declare namespace jest {
	/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
	interface Matchers<R, T> {
		toBeGqlMutation(): T;
		toBeGqlQuery(): T;
		toEqualZero(): T;
		toHaveExactRoute(...args: ReadonlyArray<string>): T;
		toHaveRoute(...args: ReadonlyArray<string>): T;
		toHaveTabIndex(expected: number): T;
		toQuery(name: string): T;
	}
}
