import { isNonEmptyArray } from '@app/utils/functions/check/js/specialized/isNonEmptyArray';
import { isNonEmptyObject } from '../../check/js/specialized';

export const cssClasses = (...args: ReadonlyArray<unknown>) => {
	const classes: Array<string> = [];

	args.forEach((arg) => {
		if (!arg) {
			return;
		}

		const argType = typeof arg;

		switch (argType) {
			case 'string':
			case 'number':
				classes.push(String(arg));

				break;
			case 'object':
				if (isNonEmptyArray(arg)) {
					const inner = cssClasses(...arg);

					if (inner) {
						classes.push(inner);
					}
				}

				if (isNonEmptyObject(arg)) {
					Object.entries(arg).forEach(([key, value]) => {
						if (value) {
							classes.push(key);
						}
					});
				}

				break;
			default:
				break;
		}
	});

	return classes.join(' ');
};
