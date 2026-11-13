import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  Bell, ChevronDown, User, Settings, LogOut, HelpCircle,
  Gem, Home, ShoppingBag, Search, TrendingUp, Sparkles
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'Your valuation GT-2024-001 is complete.', time: '2h ago', unread: true },
    { id: 2, text: 'Certificate CERT-GT-2024-001 is ready.', time: '1d ago', unread: true },
    { id: 3, text: 'New 24K gold rate update: ₹10,000/g.', time: '2d ago', unread: false },
  ];

  const navLinks = [
    { to: '/dashboard', label: 'Home' },
    { to: '/sell', label: 'Sell Old Gold' },
    { to: '/buy', label: 'Buy New Gold' },
    { to: '/huid', label: 'Verify HUID' },
    { to: '/rates', label: "Today's Rates" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#14213D] text-white shadow-md border-b border-[#C9A44C]/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18 gap-4">
          {/* Brand Logo & Tagline */}
          <div
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A44C] to-[#DDAA35] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Gem size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg md:text-xl tracking-wider text-white">
                  GOLDTRUST <span className="text-[#C9A44C]">AI</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#C9A44C]/20 text-[#E5D5A5] border border-[#C9A44C]/30 uppercase">
                  Portal
                </span>
              </div>
              <p className="text-[10px] md:text-xs text-[#E5D5A5] font-medium tracking-wider hidden xs:block">
                Know Your Gold. Know Its True Worth.
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#C9A44C] text-[#14213D] font-bold shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Header Controls: Notification + Profile Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications((v) => !v);
                  setShowDropdown(false);
                }}
                className="relative p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                title="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C9A44C] rounded-full ring-2 ring-[#14213D]" />
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
                      className="text-xs text-[#C9A44C] font-bold hover:underline"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar / Shortcut */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDropdown((v) => !v);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-white/10 transition-colors text-left"
              >
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-[#C9A44C] to-[#DDAA35] border border-white/20 flex items-center justify-center text-[#14213D] font-bold text-sm shadow-inner">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="hidden lg:block text-left pr-1">
                  <p className="text-xs font-bold text-white leading-tight">{currentUser.name.split(' ')[0]}</p>
                  <p className="text-[10px] text-[#E5D5A5]">Verified</p>
                </div>
                <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 top-full mt-2 w-60 bg-white text-gray-800 rounded-2xl shadow-2xl border border-gray-100 z-50 animate-fade-in overflow-hidden">
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
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <User size={15} className="text-[#C9A44C]" /> My Profile & Account
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/profile?tab=valuations');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Sparkles size={15} className="text-[#C9A44C]" /> My Valuations
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/profile?tab=certificates');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Sparkles size={15} className="text-[#C9A44C]" /> My Certificates
                    </button>
                    <button
                      onClick={() => {
                        setShowDropdown(false);
                        navigate('/help');
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
                      className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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

      {/* Subtle gold decorative gradient line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent opacity-80" />

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
