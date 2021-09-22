import { Reducer } from 'react';
import { darkTheme } from 'app/styles';
import { ThemeAction, ThemeActionEnum, ThemeState } from './theme.types';

const initialState: ThemeState = {
  theme: darkTheme,
  isFirstLoading: true
};

export const themeReducer: Reducer<ThemeState, ThemeAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ThemeActionEnum.SET_THEME:
      return {
        ...state,
        theme: action.payload,
        isFirstLoading: false
      };
    default:
      return state;
  }
};
