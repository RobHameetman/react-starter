import { DomNodeNamespaces } from '../DomNodeNamespaces';

export const fakeDomNodeNamespace = (key = 'DEFAULT') =>
	DomNodeNamespaces[key as keyof typeof DomNodeNamespaces] ||
	DomNodeNamespaces.DEFAULT;
