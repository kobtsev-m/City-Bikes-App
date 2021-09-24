import axios from 'axios';
import { IPlace } from 'app/types';

const baseApi = axios.create({
  baseURL: 'https://api.citybik.es/v2/'
});

export class PlacesService {
  static getPlaces = async () => {
    return baseApi
      .get<{ networks: IPlace[] }>('/networks')
      .then(({ data }) => data.networks);
  };
}
