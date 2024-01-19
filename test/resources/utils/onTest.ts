export type TestMap<T = void> = Record<number, (() => T) | (() => Promise<T>)>;

export const onTest = <T = void>(currentTest: number, testMap: TestMap<T>) => {
	if (testMap[currentTest] === undefined) {
		return null;
	}

	return testMap[currentTest]();
};
