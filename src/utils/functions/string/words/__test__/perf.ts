/* import { performance } from 'perf_hooks'; */
import { words } from '../words';

export const perf = (fn: () => ReturnType<typeof words>) => {
	performance.mark('start');
	fn();
	performance.mark('end');

	const { duration } = performance.measure('perf', 'start', 'end');

	performance.clearMarks();
	performance.clearMeasures();

	console.log(duration);

	return duration;
};
