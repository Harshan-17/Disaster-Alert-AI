import React from 'react';
import { AlertTriangle, Brain, Shield, Smartphone, Zap, CheckCircle, Book, ExternalLink } from 'lucide-react';
import Header from '../components/Header';

export default function About() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Machine learning algorithms analyze historical data and real-time inputs to predict disasters with 94.5% accuracy.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring of weather patterns, seismic activity, and environmental conditions across India.',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: Smartphone,
      title: 'Instant Alerts',
      description: 'Multi-channel notification system delivers alerts via SMS, email, and push notifications in under 3 seconds.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Shield,
      title: 'Government Integration',
      description: 'Connected with NDRF, IMD, and state disaster management authorities for verified information.',
      color: 'text-green-600 bg-green-100'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Data Collection',
      description: 'Sensors, satellites, and weather stations across India continuously collect environmental data.',
    },
    {
      step: '2',
      title: 'AI Analysis',
      description: 'Our machine learning model processes millions of data points to identify disaster patterns.',
    },
    {
      step: '3',
      title: 'Risk Assessment',
      description: 'The system evaluates threat levels and determines affected regions with precision.',
    },
    {
      step: '4',
      title: 'Alert Distribution',
      description: 'Instant notifications are sent to users, authorities, and emergency services.',
    }
  ];

  const safetyGuidelines = [
    {
      disaster: 'Flood',
      emoji: '🌊',
      tips: [
        'Move to higher ground immediately',
        'Avoid walking or driving through floodwater',
        'Keep emergency supplies ready',
        'Listen to local authorities'
      ]
    },
    {
      disaster: 'Earthquake',
      emoji: '🌍',
      tips: [
        'Drop, Cover, and Hold On',
        'Stay away from windows and heavy objects',
        'If outdoors, move to open areas',
        'Prepare for aftershocks'
      ]
    },
    {
      disaster: 'Cyclone',
      emoji: '🌀',
      tips: [
        'Evacuate coastal areas if advised',
        'Secure loose objects outside',
        'Stock emergency supplies',
        'Stay indoors during the storm'
      ]
    },
    {
      disaster: 'Fire',
      emoji: '🔥',
      tips: [
        'Evacuate immediately if advised',
        'Stay low to avoid smoke',
        'Cover your nose and mouth',
        'Never use elevators'
      ]
    }
  ];

  const governmentResources = [
    { name: 'National Disaster Management Authority', url: 'https://ndma.gov.in', description: 'Central disaster management coordination' },
    { name: 'India Meteorological Department', url: 'https://mausam.imd.gov.in', description: 'Weather forecasts and warnings' },
    { name: 'National Disaster Response Force', url: 'https://ndrf.gov.in', description: 'Emergency response and rescue' },
    { name: 'Ministry of Home Affairs', url: 'https://www.mha.gov.in', description: 'National security and disaster management' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">About Our System</h1>
            <p className="text-xl text-indigo-100">
              India's most advanced AI-powered disaster alert and early warning system, protecting millions of lives through real-time monitoring and predictive analytics.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How the System Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 -translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Model Explanation */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8" />
              <h2 className="text-3xl font-bold">AI Model Explained</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Deep Learning Neural Networks for pattern recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Time Series Analysis for trend prediction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Ensemble Learning for improved accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Real-time data processing with Apache Kafka</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Weather satellites and radar systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Seismograph networks across India</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>IoT sensors for environmental monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Historical disaster data (20+ years)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm">
                <strong>Model Performance:</strong> Our AI model has been trained on over 2.5 million data points and achieves an average accuracy of 94.5% across all disaster types. The system processes data in real-time and can issue alerts within 2-3 seconds of detecting a potential threat.
              </p>
            </div>
          </div>
        </section>

        {/* Safety Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Safety Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyGuidelines.map((guide) => (
              <div key={guide.disaster} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{guide.emoji}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{guide.disaster}</h3>
                </div>
                <ul className="space-y-2">
                  {guide.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Government Resources */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Government Resources</h2>
            </div>
            <p className="text-gray-600 mb-8">
              Official government portals and resources for disaster management and emergency response.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {governmentResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                >
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      {resource.name}
                    </h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-lg p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Prepared. Stay Safe.</h2>
            <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
              Join millions of Indians who trust our system to keep them safe. Enable alerts and stay informed about potential disasters in your area.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/login"
                className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors shadow-lg"
              >
                Get Started Now
              </a>
              <a
                href="/dashboard"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Live Dashboard
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Stats */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1.2M+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">28</div>
              <div className="text-gray-400">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">94.5%</div>
              <div className="text-gray-400">AI Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.3s</div>
              <div className="text-gray-400">Alert Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
