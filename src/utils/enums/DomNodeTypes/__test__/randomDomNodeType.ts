import { faker } from '@faker-js/faker';
import { DOM_NODE_TYPES, DomNodeType } from '../DomNodeTypes';

const deprecatedTypes = [
	'ENTITY_NODE',
	'ENTITY_REFERENCE_NODE',
	'NOTATION_NODE',
];

export const randomDomNodeType = ({
	includeDeprecated = false,
}: Record<string, unknown> = {}) =>
	faker.helpers.arrayElement(
		DOM_NODE_TYPES.filter((type) =>
			includeDeprecated ? true : !deprecatedTypes.includes(type),
		),
	) as DomNodeType;
