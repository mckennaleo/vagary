import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "../../App.css";

export default class ExploreMap extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [
        {coordinates: [41.008538, 28.977921], name: "Basilica Cisterns"}, 
        {coordinates: [40.989060, 29.041661], name: "Tombili (Cat Statue)"}, 
        {coordinates: [41.005596, 28.976803], name: "The Blue Mosque"},
        {coordinates: [41.010863, 28.968090], name: "Grand Bazaar"},
        {coordinates: [40.990552, 29.024703], name: "Fazıl Bey’s Turkish Coffee"}

      ]
    };
    console.log("MARKERS", this.state.markers)
  }

  addMarker = (e) => {
    console.log("This is e", e)
    const {markers} = this.state.markers
    markers.push(e.latlng)
    this.setState({markers})
  }
  render() {
  console.log("THIS.STATE", this.state)
    const lat = this.props.coordinates[0];
    const long = this.props.coordinates[1];
        console.log("PROPS", this.props)
    return (
      <Map
        center={[lat, long]} 
        onClick={this.addMarker}
        zoom={13} 
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        { this.state.markers.map((position, idx) => 
          <Marker key={position.name} position={position.coordinates}>
          <Popup>
            <span>{position.name}</span> {/* Add <br> Thumbnail*/}
          </Popup>
        </Marker>
        )}
      </Map>
    );
  }
}