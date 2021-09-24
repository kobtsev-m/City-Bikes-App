import { themeActions } from './theme/theme.actions';
import { placesActions } from './places/places.actions';

export const actions = {
  ...themeActions,
  ...placesActions
};
