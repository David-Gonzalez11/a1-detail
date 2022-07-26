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

const position = {
  lat: 33.6846,
  lng: -117.8265
};

function MyComponent() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  });

  const center = {
    lat: 33.6846,
    lng: -117.8265
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(
      navigator.geolocation.getCurrentPosition(function (position) {

      })
    );
    map.fitBounds(bounds);
    setMap(map);
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
