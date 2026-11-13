import React from 'react';

export function Card({ children, className = '', hover = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm ${hover ? 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer' : ''} transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', border = true }) {
  return (
    <div className={`px-5 py-4 ${border ? 'border-b border-gray-100' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`px-5 py-4 ${className}`}>
      {children}
    </div>
  );
}

export function StatsCard({ label, value, icon: Icon, iconBg = 'bg-[#C9A44C]/10', iconColor = 'text-[#C9A44C]', trend, trendLabel }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 font-medium">{label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
          {trendLabel && (
            <p className={`text-xs mt-1 font-medium ${trend >= 0 ? 'text-green-600' : 'text-red-500'}`}>
              {trend >= 0 ? '↑' : '↓'} {trendLabel}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
            <Icon size={20} className={iconColor} />
          </div>
        )}
      </div>
    </Card>
  );
}

export function InfoCard({ children, variant = 'info', className = '' }) {
  const variants = {
    info: 'bg-blue-50 border border-blue-100 text-blue-800',
    warning: 'bg-amber-50 border border-amber-100 text-amber-800',
    success: 'bg-green-50 border border-green-100 text-green-800',
    gold: 'bg-[#C9A44C]/8 border border-[#C9A44C]/20 text-[#8B6914]',
  };
  return (
    <div className={`rounded-xl p-4 text-sm ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
