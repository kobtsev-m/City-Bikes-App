import axios from 'axios';
import Constants from 'expo-constants';

const paymentUrl = Constants?.manifest?.extra?.stripe?.paymentUrl;

export class StripeService {
  static getClientSecret = async (amount: number, currency: string) => {
    return axios
      .post(paymentUrl, { amount, currency })
      .then(({ data }) => data);
  };
}
