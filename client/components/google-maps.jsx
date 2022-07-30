import React from 'react';
// import Geocode from './lat-long';
import { MarkerF, InfoWindowF } from '@react-google-maps/api';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const Marker = options => {
//   const [marker, setMarker] = React.useState();

//   React.useEffect(() => {
//     if (!marker) {
//       setMarker(new window.google.maps.Marker());
//     }

//     // remove marker from map on unmount
//     return () => {
//       if (marker) {
//         marker.setMap(null);
//       }
//     };
//   }, [marker]);
//   React.useEffect(() => {
//     if (marker) {
//       marker.setOptions(options);
//     }
//   }, [marker, options]);
//   return null;
// };

const containerStyle = {
  width: '100%',
  height: '550px'
};

const center = {
  lat: 33.684593,
  lng: -117.826467
};
const markerStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -100%)'
};

const position = {
  lat: 33.7343431,
  lng: -117.8092504
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: (process.env.API_KEY)
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
            {/* <InfoWindowF onCloseClick={}>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Wash me Now</button>

          </InfoWindowF> */}
          </MarkerF>
      </>
    </GoogleMap>
      )
    : <><div>nothing</div></>;
}

export default React.memo(MyComponent);
