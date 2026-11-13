import React from 'react';

export function Input({ label, error, hint, className = '', required, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white text-gray-800 placeholder:text-gray-400 transition-all
          ${error ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-[#C9A44C]'}
          focus:ring-2 focus:ring-[#C9A44C]/10 outline-none
        `}
        {...props}
      />
      {hint && !error && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Select({ label, error, hint, className = '', required, children, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white text-gray-800 transition-all appearance-none cursor-pointer
          ${error ? 'border-red-400' : 'border-gray-200 focus:border-[#C9A44C]'}
          focus:ring-2 focus:ring-[#C9A44C]/10 outline-none
        `}
        {...props}
      >
        {children}
      </select>
      {hint && !error && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Textarea({ label, error, hint, className = '', required, ...props }) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        className={`w-full px-3.5 py-2.5 text-sm border rounded-lg bg-white text-gray-800 placeholder:text-gray-400 transition-all resize-none
          ${error ? 'border-red-400' : 'border-gray-200 focus:border-[#C9A44C]'}
          focus:ring-2 focus:ring-[#C9A44C]/10 outline-none
        `}
        rows={4}
        {...props}
      />
      {hint && !error && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function ReadOnlyField({ label, value, className = '' }) {
  return (
    <div className={className}>
      {label && <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>}
      <div className="px-3.5 py-2.5 text-sm border border-gray-100 rounded-lg bg-gray-50 text-gray-800 font-medium">
        {value || '—'}
      </div>
    </div>
  );
}
