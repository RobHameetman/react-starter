import { fakeCompoundComponent } from '../../CompoundComponent/__test__';

/* eslint-disable @typescript-eslint/naming-convention */
export const fakeCC = ({ ...overrideProps } = {}) =>
	fakeCompoundComponent(overrideProps);
