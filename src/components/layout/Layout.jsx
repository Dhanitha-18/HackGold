import React, { createContext, useContext } from 'react';
import Header from './Header';
import BottomNav from './BottomNav';
import ToastContainer from './ToastContainer';
import { useToast } from '../../hooks/useApp';

const ToastContext = createContext(null);
export const useToastContext = () => useContext(ToastContext);

export default function Layout({ children }) {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <ToastContext.Provider value={addToast}>
      <div className="min-h-screen bg-[#FAF8F2] flex flex-col text-gray-800 antialiased selection:bg-[#C9A44C]/30 selection:text-[#14213D]">
        {/* Modern Top Header (Desktop + Mobile) */}
        <Header />

        {/* Main Content Area: Responsive container with balanced margins and padding, no sidebar clipping */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8 pb-20 md:pb-12">
          {children}
        </main>

        {/* Mobile Bottom Navigation (Visible only on mobile/tablet screens < 768px) */}
        <BottomNav />

        {/* Global Toast Notifications */}
        <ToastContainer toasts={toasts} onRemove={removeToast} />
      </div>
    </ToastContext.Provider>
  );
}
