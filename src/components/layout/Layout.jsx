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
      <div className="min-h-screen bg-[#FAF8F2] flex flex-row text-gray-800 antialiased selection:bg-[#C9A44C]/30 selection:text-[#14213D] relative overflow-x-hidden">
        {/* Left Sidebar (Desktop persistent, Mobile drawer) */}
        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((v) => !v)}
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
        />

        {/* Right Content Area:
            - flex-1 and min-w-0 ensures proper flexbox shrinking/expansion without overflow.
            - marginLeft smoothly tracks sidebar width on desktop (w-64 = 16rem = 256px, w-20 = 5rem = 80px).
            - on mobile (lg:hidden), sidebar is an off-canvas drawer, so ml is 0.
        */}
        <div
          className={`flex-1 min-w-0 flex flex-col transition-[margin-left] duration-300 ease-in-out ${
            collapsed ? 'lg:ml-20' : 'lg:ml-64'
          }`}
        >
          {/* Top Header spans the full width of the main content area */}
          <Header onMobileMenuToggle={() => setIsMobileOpen(true)} />

          {/* Main page content area: Full width of the remaining viewport with healthy padding */}
          <main className="flex-1 w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 pb-24 lg:pb-12 box-border">
            {children}
          </main>
        </div>

        {/* Mobile Bottom Navigation (only visible on mobile screens < 768px) */}
        <BottomNav />

        {/* Global Toast Notifications */}
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </div>
    </ToastContext.Provider>
  );
}
