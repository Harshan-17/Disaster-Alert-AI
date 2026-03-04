import React from 'react';
import { Link, useLocation } from 'react-router';
import { AlertTriangle, Home, Map, Bell, Shield, Info, LogOut, User, Brain } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Live Dashboard', href: '/dashboard', icon: Map },
    { name: 'AI Predictor', href: '/ai-predictor', icon: Brain },
    { name: 'Alerts', href: '/alerts', icon: Bell },
    { name: 'About', href: '/about', icon: Info },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-red-600 p-2 rounded-lg group-hover:bg-red-700 transition-colors">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Disaster Alert</div>
              <div className="text-xs text-gray-500">Real-time Monitoring</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
            {isAuthenticated && user?.role === 'admin' && (
              <Link
                to="/admin"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/admin')
                    ? 'bg-red-50 text-red-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Shield className="w-4 h-4" />
                Admin
              </Link>
            )}
          </nav>

          {/* User Menu */}
          <div className="flex items-center gap-2">
            {isAuthenticated && user ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:block text-right">
                  <div className="text-sm font-medium text-gray-900">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.location || 'Location not set'}</div>
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
                <button
                  onClick={logout}
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <User className="w-4 h-4" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <nav className="flex overflow-x-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex-1 flex flex-col items-center gap-1 px-3 py-2 text-xs ${
                  isActive(item.href)
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
          {isAuthenticated && user?.role === 'admin' && (
            <Link
              to="/admin"
              className={`flex-1 flex flex-col items-center gap-1 px-3 py-2 text-xs ${
                isActive('/admin')
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600'
              }`}
            >
              <Shield className="w-5 h-5" />
              Admin
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}