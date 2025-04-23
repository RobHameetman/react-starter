import { $FC, AnyActionArg, useReducer, useRef } from 'react';
import { INITIAL_PAGE_CONTEXT, PageContext } from '../PageContext';

/**
 * Store shared view state in the view context.
 *
 * @param props - React props. We should never be passing data through props to
 *                this Provider from <App>.
 */
export const PageProvider: $FC = ({ children }) => {
	const pageOverlay = useRef<HTMLDivElement | null>(null);

	// const [viewState, setViewState] = useState<PageContext>({
	// 	...INITIAL_PAGE_CONTEXT,
	// });

	// const [pageState, dispatch] = useReducer(...createReducer<PageContext>((set) => ({
	// 	...INITIAL_PAGE_CONTEXT,
	// 	appOverlayRef,
	// 	setDispatch: ($set) => $set(dispatch),
	// 	actions: {
	// 		setPageState: (updatedState: Partial<PageContext>) => set((state) => ({
	// 			...state,
	// 			...updatedState,
	// 		})),
	// 		showErrorNotification: (error: string) => set((state) => ({
	// 			...state,
	// 			error,
	// 		})),
	// 		showSuccessNotification: (success: string) => set((state) => ({
	// 			...state,
	// 			success,
	// 		})),
	// 		resetError: () => set((state) => ({
	// 			...state,
	// 			error: null,
	// 		})),
	// 		resetSuccess: () => set((state) => ({
	// 			...state,
	// 			success: null,
	// 		})),
	// 	},
	// })));

	const [pageState, dispatch] = useReducer((context: PageContext, ...actions: AnyActionArg) => {
		const [action] = actions;
		const { type, payload = null } = action;

		switch(type) {
			case 'SET_SLICE':
				return { ...context, state: { ...context.state, ...payload }};
			case 'UNSET_SLICE':
				const { [payload]: _, ...state } = context.state;

				return { ...context, state };
			default:
				return context;
		}
	}, { ...INITIAL_PAGE_CONTEXT, refs: { pageOverlay }});

	// const hideErrorNotification = () => dispatch({ type: 'HIDE_ERROR_NOTIFICATION' });
	// const hideSuccessNotification = () => dispatch({ type: 'HIDE_SUCCESS_NOTIFICATION' });

	// const showErrorNotification = (message: string) => dispatch({ type: 'SHOW_ERROR_NOTIFICATION', payload: message });
	// const showSuccessNotification = (message: string) => dispatch({ type: 'SHOW_SUCCESS_NOTIFICATION', payload: message });

	// const addRef = (key: string, ref: MutableRefObject<HTMLElement | null>) => dispatch({ type: 'ADD_REF', payload: { [key]: ref }});
	// const resetRef = (key: string) => dispatch({ type: 'RESET_REF', payload: key });
	// const removeRef = (key: string) => dispatch({ type: 'DELETE_REF', payload: key });

	const set = (slice: keyof PageContext['state'], state: Partial<PageContext['state']>) => dispatch({ type: 'SET_SLICE', payload: { [slice]: state }});
	const unset = (slice: keyof PageContext['state']) => dispatch({ type: 'UNSET_SLICE', payload: slice });
	const select = <U = unknown>(slice: keyof PageContext['state']) => (pageState.state[slice] as U);

	// const resetError = () =>
	// 	viewState.setViewState((_viewState) => ({
	// 		..._viewState,
	// 		error: null,
	// 	}));

	// const resetSuccess = () =>
	// 	setViewState((_viewState) => ({
	// 		..._viewState,
	// 		success: null,
	// 	}));

	// const showErrorNotification = (message: string) =>
	// 	setViewState((_viewState) => ({
	// 		..._viewState,
	// 		error: message,
	// 	}));

	// const showSuccessNotification =  (message: string) =>
	// 	setViewState((_viewState) => ({
	// 		..._viewState,
	// 		success: message,
	// 	}));

	// viewState.appOverlayRef = appOverlayRef;
	// viewState.resetError = resetError;
	// viewState.resetSuccess = resetSuccess;
	// viewState.showErrorNotification = showErrorNotification;
	// viewState.showSuccessNotification = showSuccessNotification;

	// viewState.setViewState = setViewState;

	return (
		<PageContext.Provider value={{ ...pageState, set, unset, select, dispatch }}>
			<div id="appOverlayRoot" ref={pageOverlay} />
			{children}
		</PageContext.Provider>
	);
};

export default PageProvider;
