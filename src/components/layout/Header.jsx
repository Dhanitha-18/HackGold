import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell, ChevronDown, User, Settings, LogOut, HelpCircle,
  Gem, Menu, Sparkles
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function Header({ onMobileMenuToggle }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'Your valuation GT-2024-001 is complete.', time: '2h ago', unread: true },
    { id: 2, text: 'Certificate CERT-GT-2024-001 is ready.', time: '1d ago', unread: true },
    { id: 3, text: 'New 24K gold rate update: ₹10,000/g.', time: '2d ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200/80 shadow-xs transition-all w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left section: Hamburger (Mobile) + Brand Name & Tagline */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onMobileMenuToggle}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              title="Open Navigation"
            >
              <Menu size={22} />
            </button>

            <div
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A44C] to-[#b8923a] flex items-center justify-center text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                <Gem size={17} />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-lg font-serif font-bold text-[#14213D] leading-none tracking-wide">
                  GOLDTRUST <span className="text-[#8B6914]">AI</span>
                </h1>
                <p className="text-[9px] uppercase tracking-widest font-bold text-[#8B6914] mt-0.5">
                  KNOW YOUR GOLD
                </p>
              </div>
            </div>
          </div>

          {/* Right section: Notification Bell + Customer Profile/Avatar */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications((v) => !v);
                  setShowDropdown(false);
                }}
                className="relative p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                title="Notifications"
              >
                <Bell size={19} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C9A44C] rounded-full ring-2 ring-white" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white text-gray-800 rounded-2xl shadow-xl border border-gray-150 z-50 animate-fade-in overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 bg-[#FAF8F2] border-b border-gray-100">
                    <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wider">Notifications</h3>
                    <span className="text-[10px] bg-[#C9A44C]/20 text-[#8B6914] font-bold px-2 py-0.5 rounded-full">
                      {notifications.filter((n) => n.unread).length} New
                    </span>
                  </div>
                  <div className="divide-y divide-gray-50 max-h-60 overflow-y-auto">
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
                      className="text-xs text-[#8B6914] font-bold hover:underline cursor-pointer"
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
                <div className="w-8 h-8 rounded-lg bg-[#14213D] border border-[#C9A44C]/60 flex items-center justify-center text-[#E5D5A5] font-serif font-bold text-xs shadow-xs">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="hidden sm:block text-left pr-0.5">
                  <p className="text-xs font-bold text-gray-800 leading-tight">{currentUser.name.split(' ')[0]}</p>
                  <p className="text-[10px] text-emerald-700 font-semibold leading-tight">Verified</p>
                </div>
                <ChevronDown size={13} className="text-gray-400 hidden sm:block" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-60 bg-white text-gray-800 rounded-2xl shadow-xl border border-gray-150 z-50 animate-fade-in overflow-hidden">
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
                      <User size={14} className="text-[#8B6914]" /> My Profile & Account
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/profile?tab=valuations');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <Sparkles size={14} className="text-[#8B6914]" /> My Valuations
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/profile?tab=certificates');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <Sparkles size={14} className="text-[#8B6914]" /> My Certificates
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/help');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      <HelpCircle size={14} className="text-[#8B6914]" /> Help & Support
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
                      <LogOut size={14} /> Logout
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
