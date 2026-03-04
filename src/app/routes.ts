import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Admin from './pages/Admin';
import About from './pages/About';
import Login from './pages/Login';
import AIPredictor from './pages/AIPredictor';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/alerts',
    Component: Alerts,
  },
  {
    path: '/ai-predictor',
    Component: AIPredictor,
  },
  {
    path: '/admin',
    Component: Admin,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);