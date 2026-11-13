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
        Pure structural flex layout:
        - Sidebar is a direct flex child in the flow on desktop (lg:relative / lg:translate-x-0).
        - Sidebar NEVER uses position:fixed on desktop, so it physically occupies its column (256px or 86px).
        - The main content area is flex-1 min-w-0, guaranteed to start immediately after the sidebar boundary.
        - Absolute zero chance of sidebar overlapping or hiding dashboard content!
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

          {/* Main Page Content Area */}
          <main className="flex-1 w-full px-5 sm:px-8 md:px-10 lg:px-12 py-6 md:py-8 pb-24 lg:pb-12 box-border">
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
