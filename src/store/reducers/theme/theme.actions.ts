import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkTheme, lightTheme } from 'app/styles';
import { ThemeThunk, ThemeActionEnum, SetTheme } from './theme.types';

const THEME_KEY = '@theme';

export const themeActions = {
  setTheme: (payload: SetTheme['payload']): SetTheme => ({
    type: ThemeActionEnum.SET_THEME,
    payload
  }),
  toggleTheme: (): ThemeThunk => async (dispatch, getState) => {
    const { theme, isFirstLoading } = getState().theme;
    let themeMode: string = theme.mode;
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
