import { RouterProvider } from 'react-router';
import { AuthProvider } from './contexts/AuthContext';
import { router } from './routes';

// src/app/App.tsx
export default function App() {
  return (
    <div style={{ padding: 40, color: 'black' }}>
      <h1>Disaster Alert App</h1>
      <p>If you see this, routing/Auth are the issue.</p>
    </div>
  );
}
