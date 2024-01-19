/* eslint-disable @typescript-eslint/naming-convention */
export const fakeCompoundComponent = ({ ...overrideProps } = {}) => {
	const Toggle = () => {};

	Toggle.On = () => {};

	Toggle.Off = () => {};

	return Object.assign(Toggle, overrideProps);
};
