import React, { FC, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
  CardFieldInput,
  useConfirmPayment
} from '@stripe/stripe-react-native';
import { StripeService } from 'app/api';
import { useAppActions, useAppSelector } from 'app/hooks';
import { PlacesNavigationProps } from 'app/navigation';
import { Layout } from 'app/components/template';
import { Box, ClassicLoader, CustomButton } from 'app/components/atoms';
import {
  CustomCardField,
  CustomTextInput,
  StationText
} from './StationOrder.styles';

type CardDetails = CardFieldInput.Details | null;

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
    const clientSecretData = await StripeService.getClientSecret(10000, 'rub');
    const { clientSecret, error: getSecretError } = clientSecretData;
    if (getSecretError) {
      Alert.alert('Some error occured');
      setIsLoading(false);
      return;
    }
    const paymentIntentData = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails: { email }
    });
    const { paymentIntent, error: confirmPaymentError } = paymentIntentData;
    if (confirmPaymentError) {
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
        <CustomCardField
          postalCodeEnabled={false}
          placeholder={{ number: '4242 4242 4242 4242' }}
          onCardChange={(cardDetails) => setCardDetails(cardDetails)}
        />
        <CustomButton
          background='accent'
          color='background'
          onPress={handlePay}
          disabled={isLoading}
        >
          Pay
        </CustomButton>
      </Box>
    </Layout>
  );
};

interface IProps {
  route: PlacesNavigationProps<'Station'>['route'];
}
