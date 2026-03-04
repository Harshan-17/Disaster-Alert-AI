import React from 'react';
import { MapPin, Activity } from 'lucide-react';
import { indianStates, currentAlerts } from '../data/mockData';

interface MapComponentProps {
  showAlerts?: boolean;
  height?: string;
}

export default function MapComponent({ showAlerts = true, height = '500px' }: MapComponentProps) {
  const [selectedState, setSelectedState] = React.useState<string | null>(null);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-yellow-500';
      case 'medium': return 'bg-orange-500';
      case 'high': return 'bg-red-500';
      case 'critical': return 'bg-red-700';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="relative bg-gray-100 rounded-xl overflow-hidden" style={{ height }}>
      {/* Map Container */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
        {/* Simulated India Map with State Markers */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-full">
            {/* India outline placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-300 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-2 opacity-20" />
                <p className="text-sm opacity-50">Interactive Map of India</p>
              </div>
            </div>

            {/* State Markers */}
            {indianStates.map((state, index) => {
              const positions = [
                { top: '30%', left: '70%' }, // Maharashtra
                { top: '75%', left: '50%' }, // Kerala
                { top: '65%', left: '60%' }, // Tamil Nadu
                { top: '60%', left: '50%' }, // Karnataka
                { top: '35%', left: '40%' }, // Gujarat
                { top: '20%', left: '60%' }, // Uttarakhand
                { top: '35%', left: '80%' }, // West Bengal
                { top: '25%', left: '85%' }, // Assam
              ];

              return (
                <div
                  key={state.state}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={positions[index]}
                  onClick={() => setSelectedState(state.state)}
                >
                  {/* State Marker */}
                  <div
                    className="w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-transform group-hover:scale-125"
                    style={{ backgroundColor: getRiskColor(state.riskLevel) }}
                  >
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  
                  {/* State Label */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-1 rounded shadow-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="font-medium">{state.state}</div>
                    <div className="text-gray-500">{state.activeAlerts} alerts</div>
                  </div>
                </div>
              );
            })}

            {/* Alert Markers */}
            {showAlerts && currentAlerts.slice(0, 5).map((alert, index) => {
              const alertPositions = [
                { top: '75%', left: '52%' }, // Kochi
                { top: '20%', left: '62%' }, // Dehradun
                { top: '45%', left: '75%' }, // Visakhapatnam
                { top: '60%', left: '48%' }, // Bandipur
                { top: '28%', left: '78%' }, // Darjeeling
              ];

              return (
                <div
                  key={alert.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                  style={alertPositions[index]}
                >
                  <div className={`w-4 h-4 rounded-full ${getSeverityColor(alert.severity)} ring-4 ring-white shadow-lg`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 space-y-2">
        <div className="text-xs font-medium text-gray-700 mb-2">Risk Levels</div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-gray-600">Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="text-xs text-gray-600">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-xs text-gray-600">High</span>
        </div>
      </div>

      {/* Selected State Info */}
      {selectedState && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-900">{selectedState}</h3>
            <button
              onClick={() => setSelectedState(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
          {indianStates.find(s => s.state === selectedState) && (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Active Alerts:</span>
                <span className="font-medium">
                  {indianStates.find(s => s.state === selectedState)?.activeAlerts}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Risk Level:</span>
                <span className={`font-medium capitalize`}>
                  {indianStates.find(s => s.state === selectedState)?.riskLevel}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
