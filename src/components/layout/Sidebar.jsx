import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  FileText,
  Search,
  User,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Gem,
  X,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/sell', icon: ShoppingBag, label: 'Sell Old Gold' },
  { to: '/valuations', icon: ClipboardList, label: 'My Valuations' },
  { to: '/certificates', icon: FileText, label: 'My Certificates' },
  { to: '/huid', icon: Search, label: 'HUID Verification' },
  { to: '/profile', icon: User, label: 'My Profile' },
];

const NavItem = ({ to, icon: Icon, label, collapsed, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
      ${isActive
        ? 'bg-[#C9A44C]/15 text-[#C9A44C] font-semibold'
        : 'text-gray-300 hover:bg-white/8 hover:text-white'
      }`
    }
    title={collapsed ? label : undefined}
  >
    {({ isActive }) => (
      <>
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-[#C9A44C] rounded-r-full" />
        )}
        <Icon size={18} className="shrink-0" />
        {!collapsed && (
          <span className="text-sm truncate">{label}</span>
        )}
        {collapsed && (
          <span className="absolute left-full ml-3 px-2 py-1 text-xs bg-[#1e3a5f] text-white rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-lg">
            {label}
          </span>
        )}
      </>
    )}
  </NavLink>
);

export default function Sidebar({ collapsed, onToggleCollapse, isMobileOpen, onCloseMobile }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('[DEMO] Logout functionality will be connected to authentication in a later stage.');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-[#14213D] flex flex-col z-40 transition-all duration-300
          ${collapsed ? 'w-16' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 px-4 py-5 border-b border-white/10 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C9A44C] to-[#b8923a] flex items-center justify-center shrink-0">
            <Gem size={16} className="text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-white font-bold text-sm leading-tight tracking-wide">GOLDTRUST AI</h1>
              <p className="text-[#C9A44C] text-[10px] font-medium tracking-widest uppercase">Know Your Gold</p>
            </div>
          )}
          {/* Mobile close */}
          <button
            onClick={onCloseMobile}
            className="ml-auto text-gray-400 hover:text-white lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {!collapsed && (
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-semibold px-3 mb-3">
              Navigation
            </p>
          )}
          {navItems.map(item => (
            <NavItem
              key={item.to}
              {...item}
              collapsed={collapsed}
              onClick={onCloseMobile}
            />
          ))}
        </nav>

        {/* Bottom items */}
        <div className="border-t border-white/10 px-3 py-3 space-y-1">
          <NavItem
            to="/help"
            icon={HelpCircle}
            label="Help & Support"
            collapsed={collapsed}
            onClick={onCloseMobile}
          />
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all text-sm ${collapsed ? 'justify-center' : ''}`}
          >
            <LogOut size={18} className="shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>

        {/* Collapse toggle — desktop only */}
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex absolute -right-3 top-20 w-6 h-6 bg-[#14213D] border border-white/20 rounded-full items-center justify-center text-gray-400 hover:text-white hover:bg-[#1e3a5f] transition-all"
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </aside>
    </>
  );
}
