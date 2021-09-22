import { ThunkAction } from 'redux-thunk';
import { RootState } from 'app/store';
import { DefaultTheme } from 'styled-components';

export interface ThemeState {
  theme: DefaultTheme;
  isFirstLoading: boolean;
}

export enum ThemeActionEnum {
  SET_THEME = 'SET_THEME'
}

interface SetThemeAction {
  type: ThemeActionEnum.SET_THEME;
  payload: DefaultTheme;
}

export type ThemeAction = SetThemeAction;

export type ThemeThunk = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  ThemeAction
>;
