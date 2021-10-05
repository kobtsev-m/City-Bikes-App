import axios from 'axios';
import Constants from 'expo-constants';

const paymentUrl = Constants?.manifest?.extra?.stripe?.paymentUrl;

export class StripeService {
  static getClientSecret = async (amount: number, currency: string) => {
    const paymentData = {
      amount,
      currency
    };
    return axios.post(paymentUrl, paymentData).then(({ data }) => data);
  };
}
