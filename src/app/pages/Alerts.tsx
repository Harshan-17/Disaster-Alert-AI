import React, { useState } from 'react';
import { MapPin, Bell, Mail, Phone, History, Settings, Save } from 'lucide-react';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { alertHistory, emergencyContacts, indianStates } from '../data/mockData';

export default function Alerts() {
  const { user, isAuthenticated, updateLocation } = useAuth();
  const [location, setLocation] = useState(user?.location || '');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(true);
  const [selectedDisasterTypes, setSelectedDisasterTypes] = useState<string[]>([
    'flood', 'earthquake', 'fire', 'cyclone', 'landslide'
  ]);

  const handleSaveSettings = () => {
    if (user) {
      updateLocation(location);
      alert('Settings saved successfully!');
    }
  };

  const handleLocationDetect = () => {
    // Mock location detection
    const randomState = indianStates[Math.floor(Math.random() * indianStates.length)];
    const detectedLocation = `${randomState.districts[0]}, ${randomState.state}`;
    setLocation(detectedLocation);
  };

  const toggleDisasterType = (type: string) => {
    if (selectedDisasterTypes.includes(type)) {
      setSelectedDisasterTypes(selectedDisasterTypes.filter(t => t !== type));
    } else {
      setSelectedDisasterTypes([...selectedDisasterTypes, type]);
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'emergency': return '🚨';
      case 'fire': return '🔥';
      case 'police': return '👮';
      case 'medical': return '🏥';
      case 'disaster': return '⚠️';
      default: return '📞';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Bell className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In Required</h2>
            <p className="text-gray-600 mb-6">
              Please sign in to access alert settings and notification management.
            </p>
            <a
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Sign In to Continue
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-2">Alert Management</h1>
          <p className="text-purple-100">Configure your notification preferences and view alert history</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location Settings */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-purple-600" />
                <h2 className="font-semibold text-gray-900">Location Detection</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Set your location to receive relevant disaster alerts for your area.
              </p>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleLocationDetect}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Detect
                </button>
              </div>
              {location && (
                <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-800">
                  📍 Current location: <span className="font-medium">{location}</span>
                </div>
              )}
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-purple-600" />
                <h2 className="font-semibold text-gray-900">Notification Preferences</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">Email Alerts</div>
                      <div className="text-sm text-gray-600">Receive alerts via email</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailAlerts}
                      onChange={(e) => setEmailAlerts(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">SMS Alerts</div>
                      <div className="text-sm text-gray-600">Receive alerts via SMS</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={smsAlerts}
                      onChange={(e) => setSmsAlerts(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium text-gray-900">Push Notifications</div>
                      <div className="text-sm text-gray-600">Receive browser notifications</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pushAlerts}
                      onChange={(e) => setPushAlerts(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>
              </div>

              {/* Disaster Type Selection */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-3">Alert Types</h3>
                <div className="flex flex-wrap gap-2">
                  {['flood', 'earthquake', 'fire', 'cyclone', 'landslide'].map((type) => (
                    <button
                      key={type}
                      onClick={() => toggleDisasterType(type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDisasterTypes.includes(type)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSaveSettings}
                className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Settings
              </button>
            </div>

            {/* Alert History */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <History className="w-5 h-5 text-purple-600" />
                <h2 className="font-semibold text-gray-900">Alert History</h2>
              </div>
              <div className="space-y-3">
                {alertHistory.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="capitalize font-medium text-gray-900">{alert.type}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                          {alert.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">{alert.location}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {alert.date.toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      alert.severity === 'critical' ? 'bg-red-100 text-red-800' :
                      alert.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                      alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {alert.severity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-red-600" />
                <h2 className="font-semibold text-gray-900">Emergency Contacts</h2>
              </div>
              <div className="space-y-3">
                {emergencyContacts.slice(0, 7).map((contact, index) => (
                  <a
                    key={index}
                    href={`tel:${contact.number}`}
                    className="block p-3 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{getCategoryIcon(contact.category)}</span>
                      <span className="text-sm font-medium text-gray-900 group-hover:text-red-600">
                        {contact.service}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-red-600">{contact.number}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-semibold mb-3">💡 Safety Tips</h3>
              <ul className="space-y-2 text-sm text-blue-50">
                <li>• Keep emergency contacts saved</li>
                <li>• Prepare an emergency kit</li>
                <li>• Know evacuation routes</li>
                <li>• Stay updated with alerts</li>
                <li>• Follow local authorities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
