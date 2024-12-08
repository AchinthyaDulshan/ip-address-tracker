import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import markerIcon from '../assets/images/icon-location.svg'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ latitude, longitude }) => {

  //create a custom icon
  const customIcon = new L.Icon({
    iconUrl: markerIcon, // Path to your SVG
    iconSize: [25, 30], // Size of the icon
    iconAnchor: [15, 30], // Anchor point for the icon (relative to the icon)
  });

  return (
    // create div for map 
    <div className='w-full h-[55vh] lg:h-[60vh] 2xl:h-[75vh]'>
      {/* map container  */}
      <MapContainer center={[latitude, longitude]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
        <UpdateMapView latitude={latitude} longitude={longitude} />
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>A sample popup for this marker!</Popup>
        </Marker>
      </MapContainer>
    </div>

  )
}

// Component to dynamically update map view
const UpdateMapView = ({ latitude, longitude }) => {
  const map = useMap();

  React.useEffect(() => {
    if (latitude && longitude) {
      map.setView([latitude, longitude], map.getZoom());
    }
  }, [latitude, longitude, map]);

  return null;
};

export default Map