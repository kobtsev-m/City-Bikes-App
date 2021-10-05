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
    bundleIdentifier: 'com.kobtsev-m.city-bikes-app',
    buildNumber: '1.0.0',
    supportsTablet: true,
    config: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_KEY
    }
  },
  android: {
    package: 'com.kobtsev_m.city_bikes_app',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './src/assets/img/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './src/assets/img/favicon.png'
  },
  plugins: [
    [
      '@stripe/stripe-react-native',
      {
        merchantIdentifier: 'com.kobtsev_m.city_bikes_app',
        enableGooglePay: true
      }
    ]
  ],
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
