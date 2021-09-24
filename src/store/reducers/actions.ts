import { themeActions } from './theme/theme.reducer';
import { placesActions } from './places/places.reducer';

export const actions = {
  ...themeActions,
  ...placesActions
};
