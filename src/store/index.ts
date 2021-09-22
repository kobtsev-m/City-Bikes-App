import { applyMiddleware, combineReducers, createStore, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { themeReducer, themeActions } from './themeReducer/themeReducer';

export const store = createStore(
  combineReducers({
    theme: themeReducer
  }),
  applyMiddleware(thunk)
);

export const allActions = {
  ...themeActions
};

export type InferActions<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U extends (...args: any[]) => infer R
    ? R extends void
      ? never
      : U
    : U
  : never;

export type InferThunk = ThunkAction<
  void,
  typeof store.getState,
  unknown,
  Action
>;
