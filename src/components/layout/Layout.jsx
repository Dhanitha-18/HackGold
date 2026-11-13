import React, { createContext, useContext, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';
import ToastContainer from './ToastContainer';
import { useToast } from '../../hooks/useApp';

const ToastContext = createContext(null);
export const useToastContext = () => useContext(ToastContext);

export default function Layout({ children }) {
  const { toasts, addToast, removeToast } = useToast();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {/* 
        Parent flex container:
        - Sidebar is a direct in-flow flex child (sticky top-0 h-screen).
        - Main content column is flex-1 min-w-0.
        - Page container padding: 32px left/right, 28px top, 36px bottom on desktop (1440px-1700px).
      */}
      <div className="min-h-screen bg-[#FAF8F2] flex flex-row text-gray-800 antialiased selection:bg-[#C9A44C]/30 selection:text-[#14213D] w-full overflow-x-hidden">
        {/* Left Sidebar Component */}
        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((v) => !v)}
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
        />

        {/* Right Main Content Column */}
        <div className="flex-1 min-w-0 flex flex-col min-h-screen bg-[#FAF8F2]">
          {/* Top Header spans the exact width of the main content column */}
          <Header onMobileMenuToggle={() => setIsMobileOpen(true)} />

          {/* 
            Main Page Container:
            - Left padding: 32px (lg:px-8, sm:px-6, px-4)
            - Right padding: 32px (lg:px-8, sm:px-6, px-4)
            - Top padding: 28px (py-7)
            - Bottom padding: 36px (pb-24 lg:pb-12)
            - Equal left and right breathing space. Never touches the sidebar boundary or browser edge!
          */}
          <main className="flex-1 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 pb-24 lg:pb-12 box-border min-w-0">
            {children}
          </main>
        </div>

        {/* Mobile Bottom Navigation (only on mobile viewports < 768px) */}
        <BottomNav />

        {/* Global Toast Notifications */}
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </div>
    </ToastContext.Provider>
  );
}
