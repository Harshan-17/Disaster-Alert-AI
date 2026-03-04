import React from 'react';
import { Link } from 'react-router';
import { AlertTriangle, MapPin, Download, TrendingUp, Shield, Users, Phone, Brain } from 'lucide-react';
import Header from '../components/Header';
import MapComponent from '../components/MapComponent';
import { currentAlerts } from '../data/mockData';

export default function Home() {
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

  const stats = [
    { label: 'Active Alerts', value: currentAlerts.length, icon: AlertTriangle, color: 'text-red-600' },
    { label: 'States Monitored', value: '28', icon: MapPin, color: 'text-blue-600' },
    { label: 'AI Accuracy', value: '94.5%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Users Protected', value: '1.2M', icon: Users, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">System Active • Real-time Monitoring</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real-Time Disaster Alert System
            </h1>
            
            <p className="text-xl md:text-2xl text-red-50 mb-8">
              AI-powered early warning system protecting millions across India
            </p>

            {/* Emergency Alert Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                View Live Dashboard
              </Link>
              <Link
                to="/ai-predictor"
                className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Brain className="w-5 h-5" />
                AI Predictor
              </Link>
              <button className="px-8 py-4 bg-red-900 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors border-2 border-white/30 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Emergency: 112
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl shadow-lg p-6">
                <Icon className={`w-8 h-8 ${stat.color} mb-3`} />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Live Risk Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Live Disaster Risk Map</h2>
          <p className="text-gray-600">Real-time monitoring across all Indian states</p>
        </div>
        <MapComponent showAlerts={true} height="600px" />
      </section>

      {/* Current Alerts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Current Active Alerts</h2>
          <p className="text-gray-600">Latest disaster notifications from across India</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {currentAlerts.slice(0, 4).map((alert) => (
            <div
              key={alert.id}
              className="bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{getTypeIcon(alert.type)}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 capitalize">{alert.type}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {alert.location}, {alert.state}
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(alert.severity)}`}>
                  {alert.severity.toUpperCase()}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{alert.description}</p>

              <div className="space-y-2 mb-4">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Affected Area:</span>
                  <span className="text-gray-600 ml-2">{alert.affectedArea}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium text-gray-900">Time:</span>
                  <span className="text-gray-600 ml-2">
                    {alert.timestamp.toLocaleTimeString('en-IN', { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      hour12: true 
                    })}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="font-medium text-blue-900 text-sm mb-2">Safety Instructions:</div>
                <ul className="text-sm text-blue-800 space-y-1">
                  {alert.instructions.slice(0, 2).map((instruction, idx) => (
                    <li key={idx}>• {instruction}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            View All Alerts
            <TrendingUp className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Prepared, Stay Safe</h2>
            <p className="text-blue-100 text-lg mb-8">
              Get instant notifications and stay ahead of disasters. Join millions of Indians staying safe with our AI-powered alert system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/login"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Create Account
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <span className="font-bold text-white">Disaster Alert</span>
              </div>
              <p className="text-sm">Real-time disaster monitoring and early warning system for India.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Live Dashboard</Link></li>
                <li><Link to="/alerts" className="hover:text-white transition-colors">Alert System</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Emergency</h3>
              <ul className="space-y-2 text-sm">
                <li>NDRF: 011-26105763</li>
                <li>Emergency: 112</li>
                <li>Fire: 101</li>
                <li>Ambulance: 102</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Government Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            © 2026 Disaster Alert System. All rights reserved. | Built for public safety.
          </div>
        </div>
      </footer>
    </div>
  );
}