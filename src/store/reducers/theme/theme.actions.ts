import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from 'app/styles';
import { ThemeActionEnum, ThemeState, ThemeThunk } from './theme.types';

const THEME_KEY = '@theme';

export const themeActions = {
  setTheme: (theme: DefaultTheme) => ({
    type: ThemeActionEnum.SET_THEME,
    payload: theme
  }),
  toggleTheme: (): ThemeThunk => async (dispatch, getState) => {
    const { theme, isFirstLoading } = getState().theme as ThemeState;
    let themeMode = theme.mode as string;
    if (isFirstLoading) {
      themeMode = (await AsyncStorage.getItem(THEME_KEY)) ?? theme.mode;
    }
    if (themeMode === lightTheme.mode) {
      dispatch(themeActions.setTheme(darkTheme));
      await AsyncStorage.setItem(THEME_KEY, lightTheme.mode);
    } else {
      dispatch(themeActions.setTheme(lightTheme));
      await AsyncStorage.setItem(THEME_KEY, darkTheme.mode);
    }
  }
};
