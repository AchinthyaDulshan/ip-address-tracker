import React, { useEffect } from 'react'
import { MapContainer,Marker,Popup,TileLayer, useMap } from 'react-leaflet'


const Map = ({latitude,longitude}) => {

  return (
    <div className='w-full h-[55vh] lg:h-[60vh] 2xl:h-[75vh]'>
        <MapContainer
        center={[latitude,longitude]} zoom={13} style={{width:'100%',height:'100%'}}>
            <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

            <UpdateMapView latitude={latitude} longitude={longitude}/>
            <Marker position={[latitude,longitude]} >
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