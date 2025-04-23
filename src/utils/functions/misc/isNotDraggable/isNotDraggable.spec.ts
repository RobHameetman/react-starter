import { onTest } from '@@/utils/onTest';
import { isNotDraggable } from './isNotDraggable';

describe('isNotDraggable()', () => {
	let result: unknown = null;
	let error: Error | null = null;
	let index = 1;

	beforeEach(() => {
		try {
			result = onTest(index, {
				1: () => {
					const target = document.createElement('div');

					target.draggable = true;

					return isNotDraggable(target);
				},
				2: () => {
					const target = document.createElement('div');

					target.draggable = false;

					return isNotDraggable(target);
				},
				3: () => {
					const target = document.createElementNS(
						'http://www.w3.org/2000/svg',
						'svg',
					);

					return isNotDraggable(target);
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		error = null;
		result = null;

		index++;
	});

	it('should return `false` when the target is a draggable HTML element', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(result).toBe(false);
	});

	it('should return `true` when the target is a non-draggable HTML element', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(result).toBe(true);
	});

	it('should return `true` when the target is an SVG element', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(result).toBe(true);
	});
});
