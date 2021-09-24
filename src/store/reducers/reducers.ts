import { combineReducers } from 'redux';
import { themeReducer } from './theme/theme.reducer';
import { placesReducer } from './places/places.reducer';

export const reducers = combineReducers({
  theme: themeReducer,
  places: placesReducer
});
