import { useFonts, Montserrat_100Thin } from '@expo-google-fonts/montserrat';
import {
  OpenSans_400Regular,
  OpenSans_800ExtraBold
} from '@expo-google-fonts/open-sans';

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    OpenSans_400Regular,
    OpenSans_800ExtraBold
  });
  return { fontsLoaded };
};
