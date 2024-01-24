import React, { useState } from "react";
import { GoogleMap, useLoadScript, OverlayView } from "@react-google-maps/api";
import { FaMapMarkerAlt } from "react-icons/fa";

const mapContainerStyle = {
  width: "80vw",
  height: "80vh",
};
const center = {
  lat: -7.997595650650975, // default latitude
  lng: 112.70142089431876, // default longitude
};

export default function TestingMap() {
  const [position, setPosition] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCwtwSZmkOwajOw3Kqn00WynmVqwPUf_gQ",
  });

  console.log(position);

  function handleMapClick(event) {
    setPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setContext;
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const iconComponent = <FaMapMarkerAlt size={30} color="red" />; // Customize the size and color

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={position ? position : center}
        onClick={handleMapClick}
      >
        {position && (
          <OverlayView
            position={position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)",
              }}
            >
              {iconComponent}
            </div>
          </OverlayView>
        )}
      </GoogleMap>
    </div>
  );
}
