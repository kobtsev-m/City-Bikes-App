import { Reducer } from 'redux';
import { GooglePlacesService, PlacesService } from 'app/api';
import { IPlace, IStation, IPlaceDetails } from 'app/types';
import { InferAction, InferThunk } from 'app/store';

const PLACES_MAX = 30;

const initialState = {
  places: [] as IPlace[],
  placesDetails: {} as Record<string, IPlaceDetails>,
  activePlace: null as IPlaceDetails | null,
  activeStation: null as IStation | null
};

export const placesReducer: IReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLACES':
      return { ...state, places: action.payload };
    case 'SET_PLACES_DETAILS':
      return { ...state, placesDetails: action.payload };
    case 'SET_ACTIVE_PLACE':
      return { ...state, activePlace: action.payload };
    case 'SET_ACTIVE_STATION':
      return { ...state, activeStation: action.payload };
    default:
      return state;
  }
};

export const placesActions = {
  setPlaces: (payload: IState['places']) => ({
    type: 'SET_PLACES' as const,
    payload
  }),
  setPlacesDetails: (payload: IState['placesDetails']) => ({
    type: 'SET_PLACES_DETAILS' as const,
    payload
  }),
  setActivePlace: (payload: IState['activePlace']) => ({
    type: 'SET_ACTIVE_PLACE' as const,
    payload
  }),
  setActiveStation: (payload: IState['activeStation']) => ({
    type: 'SET_ACTIVE_STATION' as const,
    payload
  }),
  fetchPlaces: (): IThunk => async (dispatch, getState) => {
    if (getState().places.places.length) {
      return;
    }
    try {
      const places = await PlacesService.getPlaces();
      const placesPromises = places.slice(0, PLACES_MAX).map((place) => {
        const address = `${place.name}+${place.location.city}`;
        const { latitude: lat, longitude: lng } = place.location;
        return GooglePlacesService.getPlacePhoto(address, lat, lng).then(
          (photoUrl) => (photoUrl ? { ...place, photoUrl } : place)
        );
      });
      Promise.all(placesPromises).then((placesWithPhoto) => {
        dispatch(placesActions.setPlaces(placesWithPhoto));
      });
    } catch (e) {
      console.log(e);
    }
  },
  fetchActivePlace:
    (placeId: string): IThunk =>
    async (dispatch, getState) => {
      let activePlace = getState().places.placesDetails[placeId];
      if (activePlace) {
        dispatch(placesActions.setActivePlace(activePlace));
      }
      try {
        activePlace = await PlacesService.getPlaceById(placeId);
        const { placesDetails } = getState().places;
        const newPlacesDetails = {
          ...placesDetails,
          [placeId]: activePlace
        };
        dispatch(placesActions.setActivePlace(activePlace));
        dispatch(placesActions.setPlacesDetails(newPlacesDetails));
      } catch (e) {
        console.log(e);
      }
    },
  fetchActiveStation:
    (placeId: string, stationId: string): IThunk =>
    async (dispatch, getState) => {
      const activePlace = getState().places.placesDetails[placeId];
      if (!activePlace) {
        await placesActions.fetchActivePlace(placeId)(dispatch, getState);
      }
      const activeStation = activePlace.stations.find(
        (station) => station.id === stationId
      );
      if (!activeStation) {
        return;
      }
      dispatch(placesActions.setActiveStation(activeStation));
    }
};

type IState = typeof initialState;
type IAction = InferAction<typeof placesActions>;
type IThunk = InferThunk<{ places: IState }>;
type IReducer = Reducer<IState, IAction>;
