import { DomNodeNamespaces } from '@app/utils/enums/DomNodeNamespaces';

export const $div = document.createElement('div');
export const $svg = document.createElementNS(DomNodeNamespaces.SVG, 'svg');
