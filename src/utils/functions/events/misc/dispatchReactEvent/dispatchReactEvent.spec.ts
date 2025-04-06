import { faker } from '@faker-js/faker';
import { capitalize } from '@/utils/functions/string/capitalize';
import { dispatchReactEvent } from './dispatchReactEvent';

let hasReactPropsKey = true;
let hasReactProps = true;
let hasHandlerKey = true;
let hasValidHandler = true;

describe('dispatchReactEvent()', () => {
	let mockOnChange: jest.Mock | null = null;
	let error: Error | null = null;

	beforeEach(() => {
		try {
			mockOnChange = jest.fn();

			const $element = document.createElement('input') as HTMLInputElement &
				Record<string, unknown>;

			const __reactProps = {} as Record<string, unknown>;
			const eventType = 'change';
			const handler = `on${capitalize(eventType)}`;

			if (hasHandlerKey) {
				__reactProps[handler] = hasValidHandler ? mockOnChange : null;

				if (!hasReactProps) {
					hasHandlerKey = false;
				}
			} else {
				hasHandlerKey = true;
				hasValidHandler = false;
			}

			if (hasReactPropsKey) {
				$element[`__reactProps${faker.string.alphanumeric(8)}`] = hasReactProps
					? __reactProps
					: null;

				if (hasReactProps && hasHandlerKey && hasValidHandler) {
					hasReactPropsKey = false;
				}
			} else {
				hasReactPropsKey = true;
				hasReactProps = false;
			}

			dispatchReactEvent({
				target: $element,
				event: new Event(eventType),
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		mockOnChange = null;
		error = null;
	});

	it('should call the correct React prop function when event is dispatched', () => {
		expect(mockOnChange).toBeCalled();
		expect(error).toBeNull();
	});

	it('should throw an error if no "__reactProps" key exists on the target', () => {
		expect(error).not.toBeNull();
	});

	it('should throw an error if no valid React props exist on the target', () => {
		expect(error).not.toBeNull();
	});

	it("should throw an error if the method name does not exist on the target's React props", () => {
		expect(error).not.toBeNull();
	});

	it("should throw an error if the method on the target's React props is invalid", () => {
		expect(error).not.toBeNull();
	});
});
