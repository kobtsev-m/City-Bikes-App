import { BaseApi } from 'app/api/config';
import { IPlace } from 'app/types';

export class PlacesService {
  static getPlaces = async () => {
    return BaseApi.get<{ networks: IPlace[] }>('/networks').then(
      ({ data }) => data.networks
    );
  };
}
