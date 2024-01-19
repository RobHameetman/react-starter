import type { EventHandler, SyntheticEvent } from 'react';
import type { RenderHookResult } from '@testing-library/react';
import type { UseCheckboxInputHandlersInput } from '../useCheckboxInputHandlers';

export type CurrentTarget = Partial<EventTarget & HTMLInputElement>;
export type Handler = EventHandler<SyntheticEvent>;
export type Props = UseCheckboxInputHandlersInput;
export type PropsFactory = (input?: Partial<Props>) => Props;
export type Result = Record<string, Handler>;
export type Render = RenderHookResult<Result, Props>;
