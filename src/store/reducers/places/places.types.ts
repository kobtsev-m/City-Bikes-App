import { ThunkAction } from 'redux-thunk';
import { AppState } from 'app/store';
import { IPlace } from 'app/types';

export interface PlacesState {
  places: IPlace[];
  activePlace: IPlace | null;
}

export enum PlacesActionEnum {
  SET_PLACES = 'SET_PLACES',
  SET_ACTIVE_PLACE = 'SET_ACTIVE_PLACE'
}

export interface SetPlaces {
  type: PlacesActionEnum.SET_PLACES;
  payload: PlacesState['places'];
}

export interface SetActivePlace {
  type: PlacesActionEnum.SET_ACTIVE_PLACE;
  payload: PlacesState['activePlace'];
}

export type PlacesAction = SetPlaces | SetActivePlace;

export type PlacesThunk = ThunkAction<
  Promise<void>,
  AppState,
  unknown,
  PlacesAction
>;
