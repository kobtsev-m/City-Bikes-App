import { PlacesAction, PlacesActionEnum, PlacesState } from './places.types';

const initialState: PlacesState = {
  places: [],
  activePlace: null
};

export const placesReducer = (
  state: PlacesState = initialState,
  action: PlacesAction
): PlacesState => {
  switch (action.type) {
    case PlacesActionEnum.SET_PLACES:
      return { ...state, places: action.payload };
    default:
      return state;
  }
};
