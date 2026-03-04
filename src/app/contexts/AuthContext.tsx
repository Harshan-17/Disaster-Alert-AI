import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
  location?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  updateLocation: (location: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock login - simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Determine if admin based on email
    const isAdmin = email.includes('admin');
    
    setUser({
      id: '1',
      name: email.split('@')[0],
      email,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
      role: isAdmin ? 'admin' : 'user',
      location: 'Mumbai, Maharashtra'
    });
  };

  const loginWithGoogle = async () => {
    // Mock Google login
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setUser({
      id: '2',
      name: 'Google User',
      email: 'user@gmail.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=google',
      role: 'user',
      location: 'Bengaluru, Karnataka'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateLocation = (location: string) => {
    if (user) {
      setUser({ ...user, location });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        loginWithGoogle,
        logout,
        updateLocation
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
