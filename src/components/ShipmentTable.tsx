import React from 'react';
import { format } from 'date-fns';
import { Package, Truck, Clock, AlertCircle } from 'lucide-react';
import { Shipment } from '../types/shipment';

interface ShipmentTableProps {
  shipments: Shipment[];
  onSelectShipment: (shipment: Shipment) => void;
}

export function ShipmentTable({ shipments, onSelectShipment }: ShipmentTableProps) {
  const getStatusIcon = (status: Shipment['status']) => {
    switch (status) {
      case 'in-transit':
        return <Truck className="w-5 h-5 text-blue-500" />;
      case 'delivered':
        return <Package className="w-5 h-5 text-green-500" />;
      case 'delayed':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Container ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Current Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ETA
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {shipments.map((shipment) => (
            <tr
              key={shipment.id}
              onClick={() => onSelectShipment(shipment)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {shipment.containerId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {shipment.currentLocation.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(shipment.eta), 'PPp')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(shipment.status)}
                  <span className="capitalize">{shipment.status}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(shipment.updatedAt), 'PPp')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}