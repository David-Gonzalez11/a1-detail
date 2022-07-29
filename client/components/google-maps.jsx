import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '550px'
};

const center = {
  lat: 33.684593,
  lng: -117.826467
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ('AIzaSyAo0By35tJCwdWM5mMSY-o2hQKmdOQ3WoM')
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded
    ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}

    >

      { /* Child components, such as markers, info windows, etc. */}
      <>

      </>
    </GoogleMap>
      )
    : <></>;
}

export default React.memo(MyComponent);
