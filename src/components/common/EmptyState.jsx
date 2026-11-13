import React from 'react';
import { InboxIcon } from 'lucide-react';
import Button from './Button';

export default function EmptyState({ icon: Icon = InboxIcon, title, description, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
        <Icon size={28} className="text-gray-400" />
      </div>
      <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
      {description && <p className="text-sm text-gray-500 max-w-xs">{description}</p>}
      {actionLabel && onAction && (
        <div className="mt-5">
          <Button onClick={onAction} variant="gold" size="md">{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}
