import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, ChevronDown, Menu, User, Settings, LogOut, HelpCircle } from 'lucide-react';
import { currentUser } from '../../data/mockData';

const routeTitles = {
  '/dashboard': 'Dashboard',
  '/sell': 'Sell Old Gold',
  '/valuations': 'My Valuations',
  '/certificates': 'My Certificates',
  '/huid': 'HUID Verification',
  '/profile': 'My Profile',
  '/help': 'Help & Support',
};

export default function TopBar({ onMobileMenuToggle }) {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const pageTitle = routeTitles[location.pathname] || 'GOLDTRUST AI';

  const notifications = [
    { id: 1, text: 'Your valuation GT-2024-001 is complete.', time: '2h ago', unread: true },
    { id: 2, text: 'Certificate CERT-GT-2024-001 is ready.', time: '1d ago', unread: true },
    { id: 3, text: 'New gold rate update available.', time: '2d ago', unread: false },
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center px-4 md:px-6 gap-4 sticky top-0 z-20 shadow-sm">
      {/* Mobile menu button */}
      <button
        onClick={onMobileMenuToggle}
        className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
      >
        <Menu size={20} />
      </button>

      {/* Page title */}
      <div className="flex-1">
        <h2 className="text-gray-800 font-semibold text-base md:text-lg">{pageTitle}</h2>
        <p className="text-gray-400 text-xs hidden md:block">
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => { setShowNotifications(v => !v); setShowDropdown(false); }}
            className="relative p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C9A44C] rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-fade-in">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800 text-sm">Notifications</h3>
                <span className="text-xs bg-[#C9A44C]/15 text-[#C9A44C] font-semibold px-2 py-0.5 rounded-full">
                  {notifications.filter(n => n.unread).length} new
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {notifications.map(n => (
                  <div key={n.id} className={`px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${n.unread ? 'bg-[#C9A44C]/3' : ''}`}>
                    <p className="text-sm text-gray-700">{n.text}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 border-t border-gray-100 text-center">
                <button className="text-xs text-[#C9A44C] font-semibold hover:underline">View all notifications</button>
              </div>
            </div>
          )}
        </div>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => { setShowDropdown(v => !v); setShowNotifications(false); }}
            className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl hover:bg-gray-50 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A44C] to-[#b8923a] flex items-center justify-center text-white text-sm font-bold">
              {currentUser.name.charAt(0)}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-800 leading-tight">{currentUser.name.split(' ')[0]}</p>
              <p className="text-xs text-gray-400">Customer</p>
            </div>
            <ChevronDown size={14} className="text-gray-400 hidden md:block" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-fade-in">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="font-semibold text-gray-800 text-sm">{currentUser.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{currentUser.email}</p>
              </div>
              <div className="py-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <User size={15} /> My Profile
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <Settings size={15} /> Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <HelpCircle size={15} /> Help & Support
                </button>
              </div>
              <div className="border-t border-gray-100 py-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                  <LogOut size={15} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close dropdowns */}
      {(showDropdown || showNotifications) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => { setShowDropdown(false); setShowNotifications(false); }}
        />
      )}
    </header>
  );
}
