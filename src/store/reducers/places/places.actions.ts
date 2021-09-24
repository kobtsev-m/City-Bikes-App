import { PlacesService } from 'app/api';
import {
  PlacesActionEnum,
  PlacesThunk,
  SetPlaces,
  SetActivePlace
} from './places.types';

export const placesActions = {
  setPlaces: (payload: SetPlaces['payload']): SetPlaces => ({
    type: PlacesActionEnum.SET_PLACES,
    payload
  }),
  setActivePlace: (payload: SetActivePlace['payload']): SetActivePlace => ({
    type: PlacesActionEnum.SET_ACTIVE_PLACE,
    payload
  }),
  fetchPlaces: (): PlacesThunk => async (dispatch, getState) => {
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
