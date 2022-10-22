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

// const center = {
//   lat: 33.6846,
//   lng: -117.8265
// };
const markerStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -100%)'
};

// function findLocation() {
//   const success = position => {
//     console.log(position);
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     console.log(longitude);
//     console.log(latitude);

//   };
//   const error = () => {
//     console.log('unable to retreuvce');
//   };
//   navigator.geolocation.getCurrentPosition(success, error);
// }
function MyComponent() {
  const [cord, setCords] = React.useState(null);

  // navigator.geolocation.getCurrentPosition(function (position) {
  //   console.log('Latitude is :', position.coords.latitude);
  //   console.log('Longitude is :', position.coords.longitude);
  // });
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  });

  const center = {
    lat: 33.7175,
    lng: -117.8311
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(
      navigator.geolocation.getCurrentPosition(function (position) {
        setCords({
          lat: position.coords.latitude,
          lng: position.coords.longitude

        });
      })
    );
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  // const position = {
  //   lat: 33.6846,
  //   lng: -117.8265
  // };
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
          <MarkerF style={markerStyle} position={cord}>
            <InfoWindowF onCloseClick="" position={cord}>
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
