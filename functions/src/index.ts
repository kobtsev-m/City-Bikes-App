import * as functions from 'firebase-functions';
import Stripe from 'stripe';

const stripe = new Stripe(functions.config().stripe.secret_key, {
  apiVersion: '2020-08-27'
});

export const completeStripePayment = functions.https.onRequest(
  async (request, response) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: request.body.amount,
        currency: request.body.currency,
        payment_method_types: ['card']
      });
      response.send({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      response.send({ error });
    }
  }
);
