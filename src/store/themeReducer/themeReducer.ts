import { Reducer } from 'react';
import { InferActions, InferThunk } from 'app/store';
import { DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from 'app/styles';

const initialState: IState = {
  theme: darkTheme
};

export const themeReducer: Reducer<IState, IActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export const themeActions = {
  setTheme: (theme: DefaultTheme) => ({ type: 'SET_THEME', payload: theme }),
  toggleTheme: (): IThunk => (dispatch, getState) => {
    const {
      theme: { theme }
    } = getState();
    console.log(theme.mode);
    if (theme.mode === 'light') {
      dispatch(themeActions.setTheme(darkTheme));
    } else {
      dispatch(themeActions.setTheme(lightTheme));
    }
  }
};

type IState = {
  theme: DefaultTheme;
};
type IActions = InferActions<typeof themeActions>;
type IThunk = InferThunk<IState>;
