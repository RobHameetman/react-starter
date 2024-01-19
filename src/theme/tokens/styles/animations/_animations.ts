export type DurationInSeconds = `${number}s`;
export type DurationInMillieconds = `${number}ms`;
export type Duration = DurationInMillieconds | DurationInSeconds;

export enum TransitionProperties {
	All = 'all',
	Transform = 'transform',
	Width = 'width',
}

export type TransitionProperty = `${TransitionProperties}`;

export type TransitionShorthand =
	| `${TransitionProperty} ${Duration} ${Duration}`
	| `${TransitionProperty} ${Duration}`;

export type Transition =
	| TransitionShorthand
	| `${TransitionShorthand}, ${TransitionShorthand}`;
