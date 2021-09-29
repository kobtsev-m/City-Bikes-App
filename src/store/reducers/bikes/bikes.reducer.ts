import { Reducer } from 'redux';
import { InferAction, InferThunk } from 'app/store';

const initialState = {
  bikeId: 0
};

export const bikesReducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BIKE_ID':
      return { ...state, bikeId: action.payload };
    default:
      return state;
  }
};

export const bikesActions = {
  setBikeId: (payload: IState['bikeId']) => ({
    type: 'SET_BIKE_ID' as const,
    payload
  })
};

type IState = typeof initialState;
type IAction = InferAction<typeof bikesActions>;
type IThunk = InferThunk<{ bikes: IState }>;
type IReducer = Reducer<IState, IAction>;
