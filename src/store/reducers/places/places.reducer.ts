import { PlacesService } from 'app/api';
import { IPlace } from 'app/types';
import { InferAction, InferThunk } from 'app/store';

const initialState = {
  places: [] as IPlace[],
  activePlace: null as IPlace | null
};

export const placesReducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLACES':
      return { ...state, places: action.payload };
    default:
      return state;
  }
};

export const placesActions = {
  setPlaces: (payload: IState['places']) => ({
    type: 'SET_PLACES' as const,
    payload
  }),
  setActivePlace: (payload: IState['activePlace']) => ({
    type: 'SET_ACTIVE_PLACE' as const,
    payload
  }),
  fetchPlaces: (): IThunk => async (dispatch, getState) => {
    if (getState().places.places.length) {
      return;
    }
    try {
      const places = await PlacesService.getPlaces();
      dispatch(placesActions.setPlaces(places));
    } catch (e) {
      console.log(e);
    }
  }
};

type IState = typeof initialState;
type IAction = InferAction<typeof placesActions>;
type IThunk = InferThunk<{ places: IState }>;
type IReducer = (state: IState, action: IAction) => IState;
