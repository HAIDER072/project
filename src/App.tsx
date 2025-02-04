import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchShipments } from './store/shipmentsSlice';
import { ShipmentTable } from './components/ShipmentTable';
import { ShipmentMap } from './components/ShipmentMap';
import { NewShipmentForm } from './components/NewShipmentForm';
import { Plus, RefreshCw } from 'lucide-react';
import { Shipment } from './types/shipment';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const shipments = useSelector((state: RootState) => state.shipments.items);
  const status = useSelector((state: RootState) => state.shipments.status);
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
  const [showNewShipmentForm, setShowNewShipmentForm] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchShipments());
    }
  }, [status, dispatch]);

  const handleRefresh = () => {
    dispatch(fetchShipments());
  };

  const handleNewShipment = (data: { containerId: string; origin: string; destination: string }) => {
    // TODO: Implement create shipment functionality
    console.log('Creating new shipment:', data);
    setShowNewShipmentForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Cargo Shipment Tracker</h1>
            <div className="space-x-4">
              <button
                onClick={handleRefresh}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </button>
              <button
                onClick={() => setShowNewShipmentForm(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Shipment
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <ShipmentTable
            shipments={shipments}
            onSelectShipment={setSelectedShipment}
          />

          {selectedShipment && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">
                Shipment Details - {selectedShipment.containerId}
              </h2>
              <ShipmentMap shipment={selectedShipment} />
            </div>
          )}
        </div>

        {showNewShipmentForm && (
          <NewShipmentForm
            onSubmit={handleNewShipment}
            onClose={() => setShowNewShipmentForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;