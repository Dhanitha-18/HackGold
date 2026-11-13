import React from 'react';

const variants = {
  gold: 'bg-gradient-to-r from-[#C9A44C] to-[#b8923a] text-white hover:from-[#b8923a] hover:to-[#a07d2e] shadow-sm hover:shadow-md hover:-translate-y-0.5',
  navy: 'bg-[#14213D] text-white hover:bg-[#1e3a5f] hover:-translate-y-0.5',
  outline: 'bg-white text-[#14213D] border border-gray-200 hover:border-[#C9A44C] hover:text-[#C9A44C] hover:-translate-y-0.5',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
  danger: 'bg-red-500 text-white hover:bg-red-600 hover:-translate-y-0.5',
  success: 'bg-[#16865B] text-white hover:bg-[#127048] hover:-translate-y-0.5',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs rounded-lg',
  md: 'px-4 py-2.5 text-sm rounded-lg',
  lg: 'px-6 py-3 text-sm rounded-xl font-semibold',
  xl: 'px-8 py-3.5 text-base rounded-xl font-semibold',
};

export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-200 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon size={15} />}
      {children}
      {!loading && Icon && iconPosition === 'right' && <Icon size={15} />}
    </button>
  );
}
