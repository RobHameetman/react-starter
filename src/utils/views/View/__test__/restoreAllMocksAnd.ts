export const restoreAllMocksAnd = (then: unknown) => {
	jest.restoreAllMocks();

	return then;
};
