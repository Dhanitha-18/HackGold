import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calculator, TrendingUp, Search, User } from 'lucide-react';

const mobileNavItems = [
  { to: '/dashboard', label: 'Home', icon: Home },
  { to: '/sell', label: 'Valuation', icon: Calculator },
  { to: '/rates', label: 'Rates', icon: TrendingUp },
  { to: '/huid', label: 'HUID', icon: Search },
  { to: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 px-2 py-1 shadow-lg">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 min-w-[56px] ${
                  isActive
                    ? 'text-[#C9A44C] font-bold scale-105'
                    : 'text-gray-500 hover:text-gray-900 font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1 rounded-xl transition-colors ${isActive ? 'bg-[#C9A44C]/15' : ''}`}>
                    <Icon size={19} strokeWidth={isActive ? 2.4 : 1.8} />
                  </div>
                  <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
