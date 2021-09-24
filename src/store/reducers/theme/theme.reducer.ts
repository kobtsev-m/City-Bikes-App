import { darkTheme } from 'app/styles';
import { ThemeAction, ThemeActionEnum, ThemeState } from './theme.types';

const initialState: ThemeState = {
  theme: darkTheme,
  isFirstLoading: true
};

export const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeAction
): ThemeState => {
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
