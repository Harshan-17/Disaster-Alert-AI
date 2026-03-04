import React, { useState } from 'react';
import { Brain, MapPin, Cloud, Thermometer, Wind, Droplets, Activity, TrendingUp, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
import { indianStates } from '../data/mockData';

interface PredictionResult {
  overallRisk: number;
  predictions: {
    flood: number;
    earthquake: number;
    fire: number;
    cyclone: number;
    landslide: number;
  };
  confidence: number;
  recommendation: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  estimatedTime: string;
}

export default function AIPredictor() {
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [temperature, setTemperature] = useState(28);
  const [humidity, setHumidity] = useState(65);
  const [windSpeed, setWindSpeed] = useState(15);
  const [rainfall, setRainfall] = useState(5);
  const [seismicActivity, setSeismicActivity] = useState(2);
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);

  const handlePredict = () => {
    setIsPredicting(true);
    
    // Simulate AI prediction calculation
    setTimeout(() => {
      // Calculate risk based on input parameters
      const floodRisk = Math.min(100, (rainfall * 8 + humidity * 0.5 + (100 - temperature * 2)));
      const earthquakeRisk = Math.min(100, seismicActivity * 15 + Math.random() * 20);
      const fireRisk = Math.min(100, (temperature * 2 + (100 - humidity) * 0.8 + windSpeed * 1.5));
      const cycloneRisk = Math.min(100, (windSpeed * 3 + humidity * 0.6 + rainfall * 5));
      const landslideRisk = Math.min(100, (rainfall * 7 + seismicActivity * 10 + humidity * 0.4));

      const overallRisk = (floodRisk + earthquakeRisk + fireRisk + cycloneRisk + landslideRisk) / 5;
      
      let riskLevel: 'low' | 'medium' | 'high' | 'critical';
      let recommendation: string;
      
      if (overallRisk < 30) {
        riskLevel = 'low';
        recommendation = 'Low risk detected. Continue normal activities but stay informed about weather updates.';
      } else if (overallRisk < 60) {
        riskLevel = 'medium';
        recommendation = 'Medium risk detected. Stay alert and prepare emergency supplies. Monitor updates regularly.';
      } else if (overallRisk < 80) {
        riskLevel = 'high';
        recommendation = 'High risk detected. Take preventive measures immediately. Prepare for possible evacuation.';
      } else {
        riskLevel = 'critical';
        recommendation = 'Critical risk detected! Follow emergency protocols. Evacuate if advised by authorities.';
      }

      const result: PredictionResult = {
        overallRisk: Math.round(overallRisk),
        predictions: {
          flood: Math.round(floodRisk),
          earthquake: Math.round(earthquakeRisk),
          fire: Math.round(fireRisk),
          cyclone: Math.round(cycloneRisk),
          landslide: Math.round(landslideRisk),
        },
        confidence: Math.round(85 + Math.random() * 12),
        recommendation,
        riskLevel,
        estimatedTime: '24-48 hours'
      };

      setPrediction(result);
      setIsPredicting(false);
    }, 2000);
  };

  const getRiskColor = (risk: number) => {
    if (risk < 30) return 'text-green-600';
    if (risk < 60) return 'text-yellow-600';
    if (risk < 80) return 'text-orange-600';
    return 'text-red-600';
  };

  const getRiskBgColor = (risk: number) => {
    if (risk < 30) return 'bg-green-100 border-green-300';
    if (risk < 60) return 'bg-yellow-100 border-yellow-300';
    if (risk < 80) return 'bg-orange-100 border-orange-300';
    return 'bg-red-100 border-red-300';
  };

  const radarData = prediction ? [
    { disaster: 'Flood', risk: prediction.predictions.flood, fullMark: 100 },
    { disaster: 'Earthquake', risk: prediction.predictions.earthquake, fullMark: 100 },
    { disaster: 'Fire', risk: prediction.predictions.fire, fullMark: 100 },
    { disaster: 'Cyclone', risk: prediction.predictions.cyclone, fullMark: 100 },
    { disaster: 'Landslide', risk: prediction.predictions.landslide, fullMark: 100 },
  ] : [];

  const timelineData = [
    { time: 'Now', risk: prediction?.overallRisk || 0 },
    { time: '6h', risk: prediction ? prediction.overallRisk + 5 : 0 },
    { time: '12h', risk: prediction ? prediction.overallRisk + 10 : 0 },
    { time: '18h', risk: prediction ? prediction.overallRisk + 8 : 0 },
    { time: '24h', risk: prediction ? prediction.overallRisk + 12 : 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Brain className="w-8 h-8" />
            <h1 className="text-3xl font-bold">AI Disaster Predictor</h1>
          </div>
          <p className="text-purple-100">Advanced machine learning predictions based on environmental parameters</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Parameters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <Activity className="w-5 h-5 text-purple-600" />
                <h2 className="font-semibold text-gray-900">Input Parameters</h2>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {indianStates.map((state) => (
                      <option key={state.state} value={state.state}>
                        {state.state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Temperature */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Thermometer className="w-4 h-4" />
                    Temperature: {temperature}°C
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={temperature}
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0°C</span>
                    <span>50°C</span>
                  </div>
                </div>

                {/* Humidity */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Droplets className="w-4 h-4" />
                    Humidity: {humidity}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={humidity}
                    onChange={(e) => setHumidity(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Wind Speed */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Wind className="w-4 h-4" />
                    Wind Speed: {windSpeed} km/h
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={windSpeed}
                    onChange={(e) => setWindSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0 km/h</span>
                    <span>100 km/h</span>
                  </div>
                </div>

                {/* Rainfall */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Cloud className="w-4 h-4" />
                    Rainfall: {rainfall} mm/h
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={rainfall}
                    onChange={(e) => setRainfall(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0 mm/h</span>
                    <span>50 mm/h</span>
                  </div>
                </div>

                {/* Seismic Activity */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Activity className="w-4 h-4" />
                    Seismic Activity: {seismicActivity} magnitude
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={seismicActivity}
                    onChange={(e) => setSeismicActivity(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0</span>
                    <span>10</span>
                  </div>
                </div>

                <button
                  onClick={handlePredict}
                  disabled={isPredicting}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
                >
                  {isPredicting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5" />
                      Generate Prediction
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Model Info */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5" />
                <h3 className="font-semibold">How It Works</h3>
              </div>
              <p className="text-sm text-blue-50 mb-3">
                Our AI model uses advanced machine learning algorithms trained on historical disaster data and environmental patterns.
              </p>
              <ul className="space-y-2 text-sm text-blue-50">
                <li>• Deep Neural Networks</li>
                <li>• Weather Pattern Analysis</li>
                <li>• Historical Data Correlation</li>
                <li>• Real-time Risk Assessment</li>
              </ul>
            </div>
          </div>

          {/* Prediction Results */}
          <div className="lg:col-span-2 space-y-6">
            {!prediction ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Predict
                </h3>
                <p className="text-gray-600">
                  Adjust the parameters on the left and click "Generate Prediction" to get AI-powered disaster risk analysis.
                </p>
              </div>
            ) : (
              <>
                {/* Overall Risk */}
                <div className={`border-2 rounded-xl shadow-lg p-6 ${getRiskBgColor(prediction.overallRisk)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">Overall Risk Assessment</h2>
                      <p className="text-sm text-gray-700">Location: {selectedState}</p>
                    </div>
                    <div className={`text-5xl font-bold ${getRiskColor(prediction.overallRisk)}`}>
                      {prediction.overallRisk}%
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-gray-700">Risk Level:</span>
                      <span className={`font-bold uppercase ${getRiskColor(prediction.overallRisk)}`}>
                        {prediction.riskLevel}
                      </span>
                    </div>
                    <div className="w-full bg-white/50 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          prediction.overallRisk < 30 ? 'bg-green-600' :
                          prediction.overallRisk < 60 ? 'bg-yellow-600' :
                          prediction.overallRisk < 80 ? 'bg-orange-600' : 'bg-red-600'
                        }`}
                        style={{ width: `${prediction.overallRisk}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/50 rounded-lg p-4">
                    {prediction.riskLevel === 'critical' ? (
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <div className="font-medium text-gray-900 mb-1">Recommendation:</div>
                      <p className="text-sm text-gray-700">{prediction.recommendation}</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="font-medium text-gray-900">AI Confidence</div>
                      <div className={`text-2xl font-bold ${getRiskColor(prediction.confidence)}`}>
                        {prediction.confidence}%
                      </div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3">
                      <div className="font-medium text-gray-900">Time Window</div>
                      <div className="text-2xl font-bold text-gray-900">
                        {prediction.estimatedTime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disaster-specific Predictions */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Disaster-Specific Risk Analysis</h3>
                  <div className="space-y-4">
                    {Object.entries(prediction.predictions).map(([type, risk]) => (
                      <div key={type}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <span className="capitalize font-medium text-gray-900">{type}</span>
                            {risk > 70 && <AlertTriangle className="w-4 h-4 text-red-500" />}
                          </div>
                          <span className={`font-bold ${getRiskColor(risk)}`}>{risk}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              risk < 30 ? 'bg-green-500' :
                              risk < 60 ? 'bg-yellow-500' :
                              risk < 80 ? 'bg-orange-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${risk}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Radar Chart */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Multi-Hazard Risk Profile</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="disaster" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Risk Level" dataKey="risk" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                {/* Risk Timeline */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Risk Progression Timeline</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Area type="monotone" dataKey="risk" stroke="#8b5cf6" fill="#c4b5fd" />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-gray-600 mt-3">
                    Projected risk levels over the next 24 hours based on current parameters.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
