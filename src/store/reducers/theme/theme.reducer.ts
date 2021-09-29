import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reducer } from 'redux';
import { darkTheme, lightTheme } from 'app/styles';
import { InferAction, InferThunk } from 'app/store';

const THEME_KEY = '@theme';

const initialState = {
  theme: darkTheme,
  isFirstLoading: true
};

export const themeReducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
        isFirstLoading: false
      };
    default:
      return state;
  }
};

export const themeActions = {
  setTheme: (payload: IState['theme']) => ({
    type: 'SET_THEME' as const,
    payload
  }),
  toggleTheme: (): IThunk => async (dispatch, getState) => {
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

type IState = typeof initialState;
type IAction = InferAction<typeof themeActions>;
type IThunk = InferThunk<{ theme: IState }>;
type IReducer = Reducer<IState, IAction>;
