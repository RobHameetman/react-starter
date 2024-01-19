/**
 * Determines whether or not a pointer target is not draggable.
 *
 * @param element - A potentially draggable pointer target.
 *
 * @returns `true` if the element is not draggable, `false` otherwise.
 */
export const isNotDraggable = (target: Element) =>
	!(target instanceof HTMLElement) || !target.draggable;
