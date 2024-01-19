export const changeEventWith = (target: unknown) =>
	expect.objectContaining({
		event: expect.objectContaining({
			type: 'change',
		}),
		target,
	});
