import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import "../../App.css";

export default function ExploreMap(props) {
  // landmark coordinates
  const lat = props.coordinates[0];
  const long = props.coordinates[1];

  return (
    <article>
      <Map center={[lat, long]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {props.cityResults.map((position, idx) => (
          <Marker
            key={position.name}
            position={position.coordinates}
            // toggles popup on hover
            onMouseOver={(e) => {
              e.target.openPopup();
            }}
            onMouseOut={(e) => {
              e.target.closePopup();
            }}
            onClick={(e) => {}}
          >
            <Popup>
              <span>{position.name}</span> <br />
              <img src={position.thumbnail} />
            </Popup>
          </Marker>
        ))}
      </Map>
    </article>
  );
}
