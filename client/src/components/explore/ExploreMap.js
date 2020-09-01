import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";



import "../../App.css";

export default function ExploreMap(props) {
  
  // puts markers on a map
  // addMarker = (e) => {
  //   const {markers} = this.state.markers
  //   markers.push(e.latlng)
  //   this.setState({markers})
  // }



    // landmark coordinates
    const lat = props.coordinates[0]
    const long = props.coordinates[1]

    return (
      <Map
        center={[lat, long]} 
        zoom={13} 
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        { props.cityResults.map((position, idx) => 
          <Marker key={position.name} position={position.coordinates}>
          <Popup>
            <span>{position.name}</span> <br/>
            <img src={position.thumbnail} />  
            </Popup>
        </Marker>
        )}
      </Map>
    );
  
}