import * as React from 'react';

declare module 'react' {
	export interface $FunctionComponent<P = {}> {
		(props: PropsWithChildren<P>, context?: unknown): ReturnType<FunctionComponent<P>>;
		/**
		 * Note that we have to use key reference types here instead of simply
		 * extending the {@link FunctionComponent} type because doing so causes the
		 * `children` prop to be improperly typed as a union type.
		 */
		propTypes?: FunctionComponent<P>['propTypes'];
		contextTypes?: FunctionComponent<P>['contextTypes'];
		defaultProps?: FunctionComponent<P>['defaultProps'];
		displayName?: FunctionComponent<P>['displayName'];
	}

	export type $FC<P = {}> = $FunctionComponent<P>;

	export class $Component<P = {}, S = Record<string, unknown>> extends Component<PropsWithChildren<P>, S> {}
}
