import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

type Props = {}

const Map = (props: Props) => {
  return (
    <MapContainer center={[51.0980442, 17.0925103]} zoom={15} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.0982906, 17.0914464]}>
            <Popup>
              Harcerski Ośrodek Wodny Stanica <br /> ul.Kożuchowska 13, 51-631 Wrocław
            </Popup>
          </Marker>
    </MapContainer>
  )
}

export default Map