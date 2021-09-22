import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from 'app/styles';
import { ThemeActionEnum, ThemeState, ThemeThunk } from './theme.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const themeActions = {
  setTheme: (theme: DefaultTheme) => ({
    type: ThemeActionEnum.SET_THEME,
    payload: theme
  }),
  toggleTheme: (): ThemeThunk => async (dispatch, getState) => {
    const { theme, isFirstLoading } = getState().theme as ThemeState;
    const themeMode = (await AsyncStorage.getItem('@themeMode')) ?? theme.mode;
    if (isFirstLoading && themeMode === 'light') {
      dispatch(themeActions.setTheme(lightTheme));
    } else if (isFirstLoading && themeMode === 'dark') {
      dispatch(themeActions.setTheme(darkTheme));
    } else if (themeMode === 'light') {
      dispatch(themeActions.setTheme(darkTheme));
    } else {
      dispatch(themeActions.setTheme(lightTheme));
    }
  }
};
