import { Dispatch } from 'react';
import { applyMiddleware, createStore, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/reducers';
import { actions } from './reducers/actions';

export const store = createStore(reducers, applyMiddleware(thunk));

export { actions };

export type AppState = ReturnType<typeof reducers>;

export type InferAction<T> = T extends {
  [k: string]: (...args: any[]) => infer U;
}
  ? U extends (...args: any[]) => Promise<void>
    ? never
    : U
  : never;

export type InferThunk<T> = (
  dispatch: Dispatch<AnyAction>,
  getState: () => T
) => Promise<void>;
