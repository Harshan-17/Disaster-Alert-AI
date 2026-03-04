import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Filter, TrendingUp, AlertCircle, Activity, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router';
import Header from '../components/Header';
import MapComponent from '../components/MapComponent';
import { currentAlerts, aiPredictions, indianStates } from '../data/mockData';

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = ['all', 'flood', 'earthquake', 'fire', 'cyclone', 'landslide'];

  const filteredAlerts = selectedFilter === 'all'
    ? currentAlerts
    : currentAlerts.filter(alert => alert.type === selectedFilter);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'medium': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'critical': return 'bg-red-200 text-red-900 border-red-400';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    const icons: { [key: string]: string } = {
      flood: '🌊',
      earthquake: '🌍',
      fire: '🔥',
      cyclone: '🌀',
      landslide: '⛰️'
    };
    return icons[type] || '⚠️';
  };

  const riskLevelDistribution = [
    { name: 'Low Risk', value: indianStates.filter(s => s.riskLevel === 'low').length, fill: '#10b981' },
    { name: 'Medium Risk', value: indianStates.filter(s => s.riskLevel === 'medium').length, fill: '#f59e0b' },
    { name: 'High Risk', value: indianStates.filter(s => s.riskLevel === 'high').length, fill: '#ef4444' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Live Risk Dashboard</h1>
              <p className="text-blue-100">Real-time disaster monitoring and AI predictions</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/ai-predictor"
                className="hidden sm:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Brain className="w-5 h-5" />
                AI Predictor
              </Link>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
            <AlertCircle className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-3xl font-bold mb-1">{currentAlerts.length}</div>
            <div className="text-sm text-red-100">Active Alerts</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
            <Activity className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-3xl font-bold mb-1">{indianStates.filter(s => s.riskLevel === 'high').length}</div>
            <div className="text-sm text-orange-100">High Risk Zones</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
            <TrendingUp className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-3xl font-bold mb-1">94.5%</div>
            <div className="text-sm text-green-100">AI Accuracy</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <Zap className="w-8 h-8 mb-2 opacity-80" />
            <div className="text-3xl font-bold mb-1">2.3s</div>
            <div className="text-sm text-blue-100">Alert Speed</div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Interactive Risk Map</h2>
            <p className="text-sm text-gray-600">Click on markers to view detailed information</p>
          </div>
          <MapComponent showAlerts={true} height="500px" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Alerts Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Disaster Type Filter */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">Filter by Disaster Type</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedFilter === filter
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Real-time Data Feed */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Real-time Alert Feed ({filteredAlerts.length})
              </h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {filteredAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="border-2 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getTypeIcon(alert.type)}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900 capitalize">{alert.type}</h4>
                          <p className="text-sm text-gray-600">{alert.location}, {alert.state}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{alert.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-900">Affected:</span>
                        <span className="text-gray-600 ml-1">{alert.affectedArea}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Time:</span>
                        <span className="text-gray-600 ml-1">
                          {alert.timestamp.toLocaleTimeString('en-IN', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Charts */}
          <div className="space-y-6">
            {/* Risk Level Indicator */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">State Risk Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={riskLevelDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* AI Accuracy Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">AI Model Accuracy</h3>
              <div className="space-y-3">
                {Object.entries(aiPredictions.accuracyMetrics).map(([key, value]) => (
                  <div key={key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="capitalize text-gray-700">{key}</span>
                      <span className="font-medium text-gray-900">{value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Incident Trend */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Weekly Incident Trend</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={aiPredictions.weeklyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="incidents" 
                    stroke="#3b82f6" 
                    fill="#93c5fd" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* AI Predictions Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-1">24-Hour AI Risk Predictions</h3>
            <p className="text-sm text-gray-600">Machine learning forecasts for different disaster types</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={aiPredictions.next24Hours}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="floodRisk" stroke="#3b82f6" name="Flood" strokeWidth={2} />
              <Line type="monotone" dataKey="earthquakeRisk" stroke="#8b5cf6" name="Earthquake" strokeWidth={2} />
              <Line type="monotone" dataKey="fireRisk" stroke="#ef4444" name="Fire" strokeWidth={2} />
              <Line type="monotone" dataKey="cycloneRisk" stroke="#10b981" name="Cyclone" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}