import { faker } from '@faker-js/faker';
import { fakePressEvent } from '@app/utils/types/events/PressEvent/__test__';
import { createRipple } from './createRipple';

let counter = 0;

describe('createRipple()', () => {
	let $testBtn: HTMLSpanElement | null = null;
	let $testRipple: HTMLSpanElement | null = null;
	let error: Error | null = null;
	let mockCreateElement: jest.Mock | null = null;

	beforeEach(() => {
		try {
			jest.useFakeTimers();

			$testBtn = document.createElement('button');
			$testRipple = document.createElement('span');

			mockCreateElement = jest.fn(() => $testRipple);

			jest
				.spyOn(document, 'createElement')
				.mockImplementation(mockCreateElement);

			const event = fakePressEvent<HTMLElement>({ currentTarget: $testBtn });
			const x = faker.number.int({ min: 0, max: 100 });
			const y = faker.number.int({ min: 0, max: 90 });

			createRipple({ event, x, y });
			counter += 1;

			if (counter % 4 === 0) {
				jest.runAllTimers();
			}
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		if (counter % 4 !== 0) {
			jest.runAllTimers();
		}

		jest.clearAllTimers();
		jest.restoreAllMocks();

		$testBtn = null;
		$testRipple = null;
		error = null;
		mockCreateElement = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should create a span element with the class "ripple"', () => {
		expect(mockCreateElement).toBeCalledWith('span');
		expect($testRipple).toHaveClass('ripple');
	});

	it('should append the current event target element with the ripple', () => {
		expect($testBtn).toContainElement($testRipple);
	});

	it('should remove the ripple after the animation ends', () => {
		expect($testBtn).not.toContainElement($testRipple);
	});
});
