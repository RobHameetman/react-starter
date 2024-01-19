export class ChangeEvent extends Event {
	constructor(target: EventTarget, init: EventInit = {}) {
		super('change', { bubbles: true, ...init });

		// Object.setPrototypeOf(this, ChangeEvent.prototype);

		Object.defineProperty(this, 'currentTarget', {
			writable: false,
			value: target,
		});

		Object.defineProperty(this, 'target', {
			writable: false,
			value: target,
		});
	}
}
