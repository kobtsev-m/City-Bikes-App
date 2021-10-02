import React, { FC, useEffect, useState } from 'react';
import { Alert, Button } from 'react-native';
import Constants from 'expo-constants';
import {
  CardField,
  CardFieldInput,
  useConfirmPayment
} from '@stripe/stripe-react-native';
import { useAppActions, useAppSelector } from 'app/hooks';
import { PlacesNavigationProps } from 'app/navigation';
import { Layout } from 'app/components/template';
import { Box, ClassicLoader } from 'app/components/atoms';
import { CustomTextInput, StationText } from './StationOrder.styles';
import axios from 'axios';

type CardDetails = CardFieldInput.Details | null;

const paymentCompleteUrl = Constants?.manifest?.stripe?.paymentCompleteUrl;

export const StationOrder: FC<IProps> = (props) => {
  const { route } = props;
  const { placeId, stationId } = route.params;

  const { confirmPayment } = useConfirmPayment();
  const { activeStation } = useAppSelector((state) => state.places);
  const { fetchActiveStation } = useAppActions();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [cardDetails, setCardDetails] = useState<CardDetails>(null);

  useEffect(() => {
    fetchActiveStation(placeId, stationId);
  }, []);

  const handlePay = async () => {
    if (!cardDetails?.complete || !email) {
      Alert.alert('Please, enter e-mail and complete card details');
      return;
    }
    setIsLoading(true);
    const { data } = await axios.post(paymentCompleteUrl, {
      amount: 1000,
      currency: 'usd'
    });
    const { clientSecret } = data;
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails: { email }
    });
    if (error) {
      Alert.alert('Some error occured');
    } else if (paymentIntent) {
      Alert.alert('Success!');
    }
    setIsLoading(false);
  };

  if (activeStation?.id !== stationId) {
    return (
      <Layout>
        <ClassicLoader />
      </Layout>
    );
  }
  return (
    <Layout>
      <StationText>Name: {activeStation.name}</StationText>
      <StationText>Empty slots: {activeStation.empty_slots}</StationText>
      <Box mt={20}>
        <CustomTextInput
          autoCapitalize='none'
          placeholder='E-mail'
          keyboardType='email-address'
          onChange={(value) => setEmail(value.nativeEvent.text)}
        />
        <CardField
          cardStyle={{
            backgroundColor: '#FFFFFF',
            textColor: '#000000'
          }}
          style={{
            width: '100%',
            height: 50,
            marginVertical: 30
          }}
          postalCodeEnabled={false}
          placeholder={{ number: '4242 4242 4242 4242' }}
          onCardChange={(cardDetails) => setCardDetails(cardDetails)}
        />
        <Button title='Pay' onPress={handlePay} disabled={isLoading} />
      </Box>
    </Layout>
  );
};

interface IProps {
  route: PlacesNavigationProps<'Station'>['route'];
}
