import { isMac } from '@/utils/functions/agent/device/isMac';

/**
 * A function to determine if a `'keydown'` or `'keyup'` event is unmodified and
 * could make keyboard focus styles visible.
 */
export const isUnmodifiedKeypress = (e: KeyboardEvent) =>
	!(
		e.metaKey ||
		e.ctrlKey ||
		(!isMac() && e.altKey) ||
		e.key === 'Control' ||
		e.key === 'Shift' ||
		e.key === 'Meta'
	);
