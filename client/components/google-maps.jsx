import React from 'react';
// import Geocode from './lat-long';
import { MarkerF, InfoWindowF, GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import ScheduleAppointment from './createAppointment';

const containerStyle = {
  width: '100%',
  height: '580px'
};

const center = {
  lat: 33.7678851,
  lng: -117.8907182
};
const markerStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -100%)'
};

const position = {
  lat: 33.7678851,
  lng: -117.8907182
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ''
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
          {/* onClick={props.onToggleOpen} */}
          <MarkerF style={markerStyle} position={position} >
           <InfoWindowF onCloseClick="" position={position}>
            <ScheduleAppointment />
                     </InfoWindowF>
          </MarkerF>
      </>
    </GoogleMap>
      )
    : <><div>Loading...</div></>;
}

export default React.memo(MyComponent);
