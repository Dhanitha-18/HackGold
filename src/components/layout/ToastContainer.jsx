import React from 'react';
import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';

const toastConfig = {
  success: { icon: CheckCircle, bg: 'bg-white border-l-4 border-green-500', text: 'text-gray-800', iconColor: 'text-green-500' },
  error: { icon: AlertCircle, bg: 'bg-white border-l-4 border-red-500', text: 'text-gray-800', iconColor: 'text-red-500' },
  info: { icon: Info, bg: 'bg-white border-l-4 border-blue-500', text: 'text-gray-800', iconColor: 'text-blue-500' },
  warning: { icon: AlertTriangle, bg: 'bg-white border-l-4 border-amber-500', text: 'text-gray-800', iconColor: 'text-amber-500' },
};

function Toast({ toast, onRemove }) {
  const config = toastConfig[toast.type] || toastConfig.info;
  const Icon = config.icon;

  return (
    <div className={`flex items-start gap-3 ${config.bg} ${config.text} px-4 py-3 rounded-lg shadow-lg max-w-sm w-full animate-fade-in`}>
      <Icon size={18} className={`${config.iconColor} shrink-0 mt-0.5`} />
      <p className="flex-1 text-sm">{toast.message}</p>
      <button onClick={() => onRemove(toast.id)} className="text-gray-400 hover:text-gray-600 shrink-0">
        <X size={14} />
      </button>
    </div>
  );
}

export default function ToastContainer({ toasts, onRemove }) {
  if (!toasts.length) return null;
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      {toasts.map(t => (
        <Toast key={t.id} toast={t} onRemove={onRemove} />
      ))}
    </div>
  );
}
