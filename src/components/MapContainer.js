import { useState } from "react";
import Map, {Source, Layer} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

import ReturnBtn from "./Buttons/ReturnBtn";

function MapContainer( { MAPBOX_TOKEN } ){
  const [viewport, setViewport] = useState();

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    ]
  };
  
  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf'
    }
  };
  
  return(
    <div id="map-container" className="width-75">
      <ReturnBtn />
      <Map 
        initialViewState={{
          longitude: -122.45,
          latitude: 37.78,
          zoom: 14
        }}
        style={{width: 1000, height: 800}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
  
    </div>
    
  )
}

export default MapContainer;