import { CachedForm } from '../CachedForm';
import { fakeFormFields } from '../../FormFields/__test__';
import { randomFormMode } from '../../../enums/FormModes/__test__';

export const fakeCachedForm = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		fields: fakeFormFields(),
		mode: randomFormMode(),
		...overrideProps,
	} as CachedForm);
