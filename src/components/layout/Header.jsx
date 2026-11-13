import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Bell, ChevronDown, User, Settings, LogOut, HelpCircle,
  Gem, Menu, Sparkles
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

const routeTitles = {
  '/dashboard': 'Customer Dashboard',
  '/sell': 'Sell Old Gold — Valuation',
  '/buy': 'Buy New Gold (Coming Soon)',
  '/huid': 'BIS Hallmark & HUID Verification',
  '/rates': "Today's Gold Reference Rates",
  '/valuations': 'My Valuations History',
  '/certificates': 'Digital Certificates Library',
  '/profile': 'My Profile & Account',
  '/help': 'Help & Support',
};

export default function Header({ onMobileMenuToggle }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const pageTitle = routeTitles[location.pathname] || 'GOLDTRUST AI';

  const notifications = [
    { id: 1, text: 'Your valuation GT-2024-001 is complete.', time: '2h ago', unread: true },
    { id: 2, text: 'Certificate CERT-GT-2024-001 is ready.', time: '1d ago', unread: true },
    { id: 3, text: 'New 24K gold rate update: ₹10,000/g.', time: '2d ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200/80 shadow-xs transition-all w-full">
      {/* Matched padding with main page container: px-4 sm:px-6 lg:px-8 */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 gap-4">
          {/* Left section: Hamburger (Mobile) + Current Page Breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onMobileMenuToggle}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              title="Open Navigation"
            >
              <Menu size={22} />
            </button>

            <div className="min-w-0">
              <h2 className="text-base sm:text-lg md:text-xl font-serif font-bold text-gray-900 truncate">
                {pageTitle}
              </h2>
              <p className="text-[11px] text-gray-500 hidden sm:block">
                Transparent Gold Valuation & Verification Platform
              </p>
            </div>
          </div>

          {/* Right section: Reference Rate Pill, Notification Bell, User Avatar */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Quick Live Rate Chip */}
            <div
              onClick={() => navigate('/rates')}
              className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#FAF8F2] hover:bg-[#C9A44C]/10 border border-[#C9A44C]/30 text-gray-800 transition-colors cursor-pointer"
              title="Click to view all rates"
            >
              <span className="w-2 h-2 rounded-full bg-[#16865B] animate-pulse" />
              <div className="text-left text-xs">
                <span className="text-[10px] uppercase font-bold text-gray-400 block leading-tight">24K Rate</span>
                <span className="font-bold text-[#14213D] leading-tight">₹10,000/g</span>
              </div>
            </div>

            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications((v) => !v);
                  setShowDropdown(false);
                }}
                className="relative p-2.5 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                title="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#C9A44C] rounded-full ring-2 ring-white" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fade-in overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#FAF8F2] border-b border-gray-100">
                    <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wider">Notifications</h3>
                    <span className="text-[10px] bg-[#C9A44C]/20 text-[#8B6914] font-bold px-2 py-0.5 rounded-full">
                      {notifications.filter((n) => n.unread).length} New
                    </span>
                  </div>
                  <div className="divide-y divide-gray-50 max-h-64 overflow-y-auto">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${
                          n.unread ? 'bg-[#C9A44C]/5' : ''
                        }`}
                      >
                        <p className="text-xs text-gray-700 leading-snug">{n.text}</p>
                        <p className="text-[10px] text-gray-400 mt-1">{n.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2.5 bg-gray-50 text-center border-t border-gray-100">
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-xs text-[#C9A44C] font-bold hover:underline cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDropdown((v) => !v);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-gray-100 transition-colors text-left cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#14213D] to-[#1e3a5f] border-2 border-[#C9A44C] flex items-center justify-center text-[#E5D5A5] font-serif font-bold text-sm shadow-sm">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="hidden sm:block text-left pr-1">
                  <p className="text-xs font-bold text-gray-800 leading-tight">{currentUser.name.split(' ')[0]}</p>
                  <p className="text-[10px] text-emerald-700 font-semibold leading-tight">KYC Verified</p>
                </div>
                <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fade-in overflow-hidden">
                  <div className="px-4 py-3 bg-[#FAF8F2] border-b border-gray-100">
                    <p className="font-bold text-gray-900 text-xs">{currentUser.name}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 truncate">{currentUser.email}</p>
                  </div>
                  <div className="p-1.5">
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/profile');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <User size={15} className="text-[#C9A44C]" /> My Profile & Account
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/profile?tab=valuations');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <Sparkles size={15} className="text-[#C9A44C]" /> My Valuations
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/profile?tab=certificates');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <Sparkles size={15} className="text-[#C9A44C]" /> My Certificates
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/help');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <HelpCircle size={15} className="text-[#C9A44C]" /> Help & Support
                    </button>
                  </div>
                  <div className="border-t border-gray-100 p-1.5">
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        alert('[DEMO] Logout simulated.');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <LogOut size={15} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for dropdowns */}
      {(showDropdown || showNotifications) && (
        <div
          className="fixed inset-0 z-40 bg-black/10"
          onClick={() => {
            setShowDropdown(false);
            setShowNotifications(false);
          }}
        />
      )}
    </header>
  );
}
