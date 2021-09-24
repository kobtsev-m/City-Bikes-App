import axios from 'axios';

export const BaseApi = axios.create({
  baseURL: 'https://api.citybik.es/v2/'
});
