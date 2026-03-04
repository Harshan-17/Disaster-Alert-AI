import React, { useState } from 'react';
import { Shield, Upload, Send, BarChart, Users, AlertTriangle, TrendingUp, Database } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { currentAlerts, aiPredictions, indianStates } from '../data/mockData';

export default function Admin() {
  const { user, isAuthenticated } = useAuth();
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('high');

  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Access Required</h2>
            <p className="text-gray-600 mb-6">
              This area is restricted to administrators only. Please sign in with an admin account.
            </p>
            <p className="text-sm text-gray-500">
              Demo: Use "admin@example.com" to access admin panel
            </p>
          </div>
        </div>
      </div>
    );
  }

  const userStats = [
    { label: 'Total Users', value: '1.2M', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Alerts', value: currentAlerts.length, icon: AlertTriangle, color: 'from-red-500 to-red-600' },
    { label: 'AI Accuracy', value: '94.5%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { label: 'Data Points', value: '2.5M', icon: Database, color: 'from-purple-500 to-purple-600' },
  ];

  const disasterTypeData = [
    { name: 'Flood', value: 35, color: '#3b82f6' },
    { name: 'Earthquake', value: 20, color: '#8b5cf6' },
    { name: 'Fire', value: 15, color: '#ef4444' },
    { name: 'Cyclone', value: 25, color: '#10b981' },
    { name: 'Landslide', value: 5, color: '#f59e0b' },
  ];

  const handleSendBroadcast = () => {
    if (!broadcastMessage.trim()) {
      alert('Please enter a message');
      return;
    }
    alert(`Broadcast sent to ${selectedState === 'all' ? 'all states' : selectedState}!\n\nMessage: ${broadcastMessage}`);
    setBroadcastMessage('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Dataset uploaded: ${file.name}\n\nProcessing and training AI model...`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Admin Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Admin Control Panel</h1>
          </div>
          <p className="text-indigo-100">Disaster management and system monitoring</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {userStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white`}>
                <Icon className="w-8 h-8 mb-2 opacity-80" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Dataset */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-indigo-600" />
                <h2 className="font-semibold text-gray-900">Upload Dataset</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Upload new disaster data to train and improve the AI prediction model
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors">
                <input
                  type="file"
                  id="dataset-upload"
                  className="hidden"
                  accept=".csv,.json,.xlsx"
                  onChange={handleFileUpload}
                />
                <label htmlFor="dataset-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <div className="font-medium text-gray-900 mb-1">Click to upload dataset</div>
                  <div className="text-sm text-gray-500">CSV, JSON, or XLSX files supported</div>
                </label>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <div className="font-bold text-blue-900 text-lg">2.5M</div>
                  <div className="text-xs text-blue-700">Data Points</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <div className="font-bold text-green-900 text-lg">15K</div>
                  <div className="text-xs text-green-700">Datasets</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg text-center">
                  <div className="font-bold text-purple-900 text-lg">98%</div>
                  <div className="text-xs text-purple-700">Data Quality</div>
                </div>
              </div>
            </div>

            {/* Emergency Broadcast */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Send className="w-5 h-5 text-indigo-600" />
                <h2 className="font-semibold text-gray-900">Emergency Broadcast System</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Send manual alerts to users in specific regions
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select State/Region
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="all">All India</option>
                    {indianStates.map((state) => (
                      <option key={state.state} value={state.state}>
                        {state.state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Severity Level
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['low', 'medium', 'high', 'critical'].map((severity) => (
                      <button
                        key={severity}
                        onClick={() => setSelectedSeverity(severity)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedSeverity === severity
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {severity.charAt(0).toUpperCase() + severity.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alert Message
                  </label>
                  <textarea
                    value={broadcastMessage}
                    onChange={(e) => setBroadcastMessage(e.target.value)}
                    placeholder="Enter emergency alert message..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  onClick={handleSendBroadcast}
                  className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <Send className="w-5 h-5" />
                  Send Emergency Broadcast
                </button>
              </div>
            </div>

            {/* AI Model Performance */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart className="w-5 h-5 text-indigo-600" />
                <h2 className="font-semibold text-gray-900">AI Model Performance</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={Object.entries(aiPredictions.accuracyMetrics).map(([key, value]) => ({
                  name: key.charAt(0).toUpperCase() + key.slice(1),
                  accuracy: value
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis domain={[80, 100]} />
                  <Tooltip />
                  <Bar dataKey="accuracy" fill="#6366f1" radius={[8, 8, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Disaster Distribution */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Disaster Type Distribution</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={disasterTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {disasterTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">AI Model Updated</div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Dataset Uploaded</div>
                    <div className="text-xs text-gray-500">5 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Alert Sent to Kerala</div>
                    <div className="text-xs text-gray-500">8 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">System Maintenance</div>
                    <div className="text-xs text-gray-500">1 day ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-50">API Server</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Online</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-50">AI Model</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Active</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-50">Database</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Connected</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-50">Alert System</span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Ready</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
