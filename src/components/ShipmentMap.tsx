import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Shipment } from '../types/shipment';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

interface ShipmentMapProps {
  shipment: Shipment;
}

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export function ShipmentMap({ shipment }: ShipmentMapProps) {
  const positions = shipment.route.map((loc) => [loc.lat, loc.lng] as [number, number]);
  const center: [number, number] = [shipment.currentLocation.lat, shipment.currentLocation.lng];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      className="rounded-lg shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((position, idx) => (
        <Marker key={idx} position={position} icon={customIcon}>
          <Popup>
            {shipment.route[idx].name}
            <br />
            {shipment.route[idx].timestamp && new Date(shipment.route[idx].timestamp).toLocaleString()}
          </Popup>
        </Marker>
      ))}
      <Polyline positions={positions} color="blue" />
    </MapContainer>
  );
}