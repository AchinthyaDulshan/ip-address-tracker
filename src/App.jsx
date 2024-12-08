import React, {useState } from 'react'
import SearchByIpComponent from './components/SearchByIpComponent'
import Map from './components/Map'

const App = () => {

  const [longitude, setLongitude] = useState(-0.09);
  const [latitude, setLatitude] = useState(51.505)


  return (
    <div className='w-screen h-dvh'>
      <SearchByIpComponent setLatitude={setLatitude} setLongitude={setLongitude}/>
      <Map latitude={latitude} longitude={longitude}/>
    </div>
  )
}

export default App