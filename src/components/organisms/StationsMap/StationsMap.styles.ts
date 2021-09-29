import styled, { DefaultTheme } from 'styled-components/native';
import MapView from 'react-native-maps';

const getMapStyle = (theme: DefaultTheme) => [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: theme.color.grey
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'all',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#000000'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#000000'
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: theme.color.background
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: theme.color.background
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: theme.color.layout
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: theme.color.layout
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: theme.color.layout
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: theme.color.layout
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: theme.color.layout
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color:
          theme.mode === 'light' ? theme.color.grey : theme.color.background
      },
      {
        lightness: theme.mode === 'light' ? 0 : 20
      }
    ]
  }
];

export const StyledMapView = styled(MapView).attrs((props) => ({
  customMapStyle: getMapStyle(props.theme)
}))<{ height: number }>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: 10px;
`;

export const CalloutContainer = styled.View`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const MarkerText = styled.Text`
  color: #000;
  font-family: 'Montserrat_400Regular';
  font-size: 15px;
  margin-bottom: 2px;
`;

export const MarkerTextBold = styled(MarkerText)`
  font-family: 'Montserrat_700Bold';
  margin-bottom: 0;
`;

export const MarkerButton = styled.Button.attrs((props) => ({
  color: props.theme.color.accent
}))`
  font-family: 'Montserrat_400Regular';
  font-size: 15px;
`;
