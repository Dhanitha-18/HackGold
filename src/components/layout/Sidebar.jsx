import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Scale,
  Gem,
  Search,
  TrendingUp,
  User,
  ClipboardList,
  FileText,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles
} from 'lucide-react';
import { currentUser } from '../../data/mockData';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/sell', icon: Scale, label: 'Sell Old Gold', badge: 'Primary' },
  { to: '/buy', icon: Gem, label: 'Buy New Gold', badge: 'Soon' },
  { to: '/huid', icon: Search, label: 'Verify HUID' },
  { to: '/rates', icon: TrendingUp, label: "Today's Rates" },
  { to: '/valuations', icon: ClipboardList, label: 'My Valuations' },
  { to: '/certificates', icon: FileText, label: 'My Certificates' },
  { to: '/profile', icon: User, label: 'My Profile' },
];

export default function Sidebar({ collapsed, onToggleCollapse, isMobileOpen, onCloseMobile }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    alert('[DEMO] Logout functionality will be connected to authentication in a later stage.');
  };

  return (
    <>
      {/* Mobile backdrop overlay - only active when drawer opened on small screens */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* 
        Sidebar container:
        - Mobile: fixed off-canvas drawer (z-50, slide-in)
        - Desktop (lg:): relative flex child (z-30, in document flow, sticky top-0, h-screen)
        - Expanded width: 250px (w-[250px] shrink-0)
        - Collapsed width: 86px (w-[86px] shrink-0)
        - Both states physically occupy their exact column in the flex container!
      */}
      <aside
        style={{ width: collapsed ? '86px' : '250px' }}
        className={`
          fixed top-0 left-0 h-screen bg-[#14213D] text-white flex flex-col z-50
          transition-all duration-300 ease-in-out border-r border-[#C9A44C]/25 shadow-xl shrink-0
          lg:static lg:z-30 lg:h-screen lg:sticky
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Brand Header */}
        <div className={`flex items-center gap-3 px-4 py-5 border-b border-white/10 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          <div
            onClick={() => {
              navigate('/dashboard');
              onCloseMobile();
            }}
            className="flex items-center gap-3 cursor-pointer group min-w-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A44C] to-[#DDAA35] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Gem size={20} className="text-white" />
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <h1 className="text-white font-serif font-bold text-base leading-tight tracking-wider truncate">
                  GOLDTRUST <span className="text-[#C9A44C]">AI</span>
                </h1>
                <p className="text-[#C9A44C] text-[10px] font-semibold tracking-widest uppercase">
                  Know Your Gold
                </p>
              </div>
            )}
          </div>

          {/* Close button on mobile */}
          <button
            onClick={onCloseMobile}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 lg:hidden transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto overflow-x-hidden">
          {!collapsed && (
            <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold px-3 mb-2">
              Menu
            </p>
          )}

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.to;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onCloseMobile}
                title={collapsed ? item.label : undefined}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative
                  ${isActive
                    ? 'bg-[#C9A44C] text-[#14213D] font-bold shadow-md'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white font-medium'
                  }
                  ${collapsed ? 'justify-center px-2' : ''}
                `}
              >
                <Icon size={19} className={`shrink-0 ${isActive ? 'text-[#14213D]' : 'text-gray-400 group-hover:text-white'}`} />

                {!collapsed && (
                  <span className="text-xs truncate flex-1">{item.label}</span>
                )}

                {!collapsed && item.badge && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold uppercase tracking-wider ${
                    isActive ? 'bg-[#14213D] text-[#E5D5A5]' : 'bg-[#C9A44C]/20 text-[#E5D5A5]'
                  }`}>
                    {item.badge}
                  </span>
                )}

                {/* Floating tooltip when collapsed */}
                {collapsed && (
                  <div className="absolute left-full ml-3 px-3 py-1.5 text-xs bg-[#14213D] text-white border border-[#C9A44C]/40 rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                    {item.label}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer info & Logout */}
        <div className="border-t border-white/10 p-3 space-y-1">
          <NavLink
            to="/help"
            onClick={onCloseMobile}
            className={({ isActive }) => `
              flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-colors
              ${isActive ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'}
              ${collapsed ? 'justify-center px-2' : ''}
            `}
            title={collapsed ? 'Help & Support' : undefined}
          >
            <HelpCircle size={17} className="shrink-0" />
            {!collapsed && <span>Help & Support</span>}
          </NavLink>

          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors ${
              collapsed ? 'justify-center px-2' : ''
            }`}
            title={collapsed ? 'Logout' : undefined}
          >
            <LogOut size={17} className="shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>

        {/* Desktop collapse toggle floating button */}
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex absolute -right-3.5 top-5 w-7 h-7 bg-[#14213D] border-2 border-[#C9A44C] rounded-full items-center justify-center text-[#C9A44C] hover:bg-[#C9A44C] hover:text-[#14213D] shadow-md transition-all cursor-pointer z-50"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </aside>
    </>
  );
}
