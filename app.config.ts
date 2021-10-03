import 'dotenv/config';

export default {
  name: 'city-bikes-app',
  slug: 'city-bikes-app',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/img/icon.png',
  splash: {
    image: './src/assets/img/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.kobtsev-m.city-bikes-app',
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_KEY
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/img/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './src/assets/img/favicon.png'
  },
  extra: {
    stripe: {
      publishableKey: process.env.SRTIPE_PUBLISHABLE_KEY,
      paymentUrl: process.env.STRIPE_PAYMENT_URL
    },
    googleMaps: {
      key: process.env.GOOGLE_MAPS_KEY
    }
  }
};
