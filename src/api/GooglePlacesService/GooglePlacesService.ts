import axios from 'axios';
import Constants from 'expo-constants';

const key = Constants?.manifest?.extra?.googleMaps?.key;

const GeocodingApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/json',
  params: { key }
});

const PlaceDetailsApi = axios.create({
  baseURL: 'https:maps.googleapis.com/maps/api/place/details/json',
  params: { key }
});

const getPlacePhotoUrl = (photoRef: string) => {
  const basePhotoUrl = 'https://maps.googleapis.com/maps/api/place/photo';
  return `${basePhotoUrl}?maxwidth=720&photo_reference=${photoRef}&key=${key}`;
};

export class GooglePlacesService {
  static getPlacePhoto = (address: string, lat: number, lng: number) => {
    return GeocodingApi.get('', {
      params: { address, bounds: `${lat},${lng}|${lat},${lng}` }
    })
      .then(({ data }) => {
        const placeid = data.results?.[0]?.place_id;
        return PlaceDetailsApi.get('', { params: { placeid } });
      })
      .then(({ data }) => {
        const photoRef = data.result?.photos?.[0]?.photo_reference;
        if (!photoRef) {
          return null;
        }
        return getPlacePhotoUrl(photoRef);
      });
  };
}
