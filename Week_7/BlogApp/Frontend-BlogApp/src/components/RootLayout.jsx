import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

import {useAuth} from '../stores/authStore'
import { useEffect } from 'react';

function RootLayout() {
  
  const checkAuth = useAuth((state) => state.checkAuth);

useEffect(() => {
  checkAuth();
}, []);

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text-primary)] transition-colors duration-200">
      <Header />
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;