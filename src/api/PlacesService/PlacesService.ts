import { BaseApi } from 'app/api/config';
import { IPlace, IPlaceDetails } from 'app/types';

export class PlacesService {
  static getPlaces = async () => {
    return BaseApi.get<{ networks: IPlace[] }>('/networks').then(
      ({ data }) => data.networks
    );
  };
  static getPlaceById = async (placeId: string) => {
    return BaseApi.get<{ network: IPlaceDetails }>(
      `/networks/${placeId}`
    ).then(({ data }) => data.network);
  };
}
