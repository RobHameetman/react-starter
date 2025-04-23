import type { EventHandler, SyntheticEvent } from 'react';
import type { RenderHookResult } from '@testing-library/react';
import type { UseRadioInputHandlersInput } from '../useRadioInputHandlers';

export type CurrentTarget = Partial<EventTarget & HTMLInputElement>;
export type Handler = EventHandler<SyntheticEvent>;
export type Props = UseRadioInputHandlersInput;
export type PropsFactory = (input?: Partial<Props>) => Props;
export type Result = Record<string, Handler>;
export type Render = RenderHookResult<Result, Props>;
