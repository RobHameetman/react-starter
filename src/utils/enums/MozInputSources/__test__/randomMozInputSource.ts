import { faker } from '@faker-js/faker';
import { isNumber } from '@/utils/functions/check/js/core/isNumber';
import { MOZ_INPUT_SOURCES, MozInputSources } from '../MozInputSources';

type Input = number | { min?: number; max?: number };

export const randomMozInputSource = (input: Input = { min: 0, max: 6 }) =>
	faker.helpers.arrayElement(
		MOZ_INPUT_SOURCES.filter(
			(_, index) =>
				(isNumber(input) && index >= input) ||
				(!isNumber(input) && index >= (input?.min || 0)),
		).filter((_, index) => !isNumber(input) && index <= (input?.max || 6)),
	) as MozInputSources;
