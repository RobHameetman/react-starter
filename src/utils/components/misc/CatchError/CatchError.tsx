import { Component, ErrorInfo, FC, PropsWithChildren, ReactNode } from 'react';
import { noop } from '@/utils/functions/misc/noop';
import { ErrorPage } from '@/utils/pages/ErrorPage';

export interface CatchErrorProps {
	readonly as?: string | ReactNode | FC<Partial<Error>>;
	readonly silent?: boolean;
	readonly onError?: (error: Error, info: ErrorInfo) => void;
}

export interface CatchErrorState extends PropsWithChildren<CatchErrorProps> {
	readonly error: Error | null;
	readonly stack: ErrorInfo | null;
}

export class CatchError extends Component<
	PropsWithChildren<CatchErrorProps>,
	CatchErrorState
> {
	static getDerivedStateFromError(error: Error, state: CatchErrorState) {
		return Object.freeze({
			...state,
			error,
		});
	}

	static getDerivedStateFromProps(
		props: CatchErrorProps,
		state: CatchErrorState,
	) {
		return Object.freeze({
			...state,
			...props,
		});
	}

	readonly state = Object.freeze({
		as: <ErrorPage />,
		children: null,
		error: null,
		silent: false,
		stack: null,
		onError: noop,
	});

	componentDidCatch(error: Error, stack: ErrorInfo) {
		const { silent, onError } = this.state;

		if (!silent) {
			console.error(stack);
		}

		onError(error);

		this.setState(
			Object.freeze({
				...this.state,
				stack,
			}),
		);
	}

	componentDidMount() {
		const { props, state } = this;

		this.setState(
			Object.freeze({
				...state,
				...props,
			}),
		);
	}

	render() {
		const hasError = this.state.error !== null;
		const { as, children } = this.state;

		/* @ts-expect-error - Property 'as' does not exist on type 'JSX.IntrinsicElements'. */
		const $as = typeof as === 'string' ? <as /> : as;

		return hasError ? $as : children;
	}
}
