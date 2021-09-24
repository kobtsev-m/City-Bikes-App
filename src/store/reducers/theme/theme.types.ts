import { ThunkAction } from 'redux-thunk';
import { AppState } from 'app/store';
import { DefaultTheme } from 'styled-components';

export interface ThemeState {
  theme: DefaultTheme;
  isFirstLoading: boolean;
}

export enum ThemeActionEnum {
  SET_THEME = 'SET_THEME'
}

export interface SetTheme {
  type: ThemeActionEnum.SET_THEME;
  payload: ThemeState['theme'];
}

export type ThemeAction = SetTheme;

export type ThemeThunk = ThunkAction<
  Promise<void>,
  AppState,
  unknown,
  ThemeAction
>;
