import React from 'react';
import {
  MarkerF,
  InfoWindowF,
  GoogleMap,
  useJsApiLoader
} from '@react-google-maps/api';
import ScheduleAppointment from './create-appointment';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const markerStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -100%)'
};

// const position = {
//   lat: 33.6846,
//   lng: -117.8265
// };

function MyComponent() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  });
  const [position, setPosition] = React.useState({
    lat: 33.6846,
    lng: -117.8265
  });
  const [center, setCenter] = React.useState({
    lat: 33.6846,
    lng: -117.8265
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
        setPosition({ lat: latitude, lng: longitude });
        map.panTo({ lat: latitude, lng: longitude });
      },
      error => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded
    ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          <MarkerF style={markerStyle} position={position}>
            <InfoWindowF onCloseClick="" position={position}>
              <ScheduleAppointment />
            </InfoWindowF>
          </MarkerF>
        </>
      </GoogleMap>
    </>
      )
    : (
    <>
      <div className="lds-dual-ring text-center">
        <h1>Loading...</h1>
      </div>
    </>
      );
}

export default React.memo(MyComponent);
