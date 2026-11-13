import React from 'react';
import { statusColors } from '../../data/mockData';

export function StatusBadge({ status }) {
  const color = statusColors[status] || 'bg-gray-100 text-gray-600';
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
        status === 'Completed' ? 'bg-green-500' :
        status === 'Pending' ? 'bg-amber-500' :
        status === 'Under Review' ? 'bg-blue-500' :
        'bg-gray-400'
      }`} />
      {status}
    </span>
  );
}

export function VerificationBadge({ status }) {
  const configs = {
    'Verified': 'bg-green-50 text-green-700 border border-green-200',
    'Not Verified': 'bg-red-50 text-red-700 border border-red-200',
    'Unable to Verify': 'bg-gray-50 text-gray-600 border border-gray-200',
  };
  const dots = {
    'Verified': 'bg-green-500',
    'Not Verified': 'bg-red-500',
    'Unable to Verify': 'bg-gray-400',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${configs[status] || configs['Unable to Verify']}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dots[status] || dots['Unable to Verify']}`} />
      {status}
    </span>
  );
}

export function AIStatusBadge({ status }) {
  const configs = {
    'Verified': 'bg-green-50 text-green-700',
    'Consistent': 'bg-green-50 text-green-700',
    'Missing': 'bg-amber-50 text-amber-700',
    'Needs Review': 'bg-orange-50 text-orange-700',
    'Incomplete': 'bg-amber-50 text-amber-700',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${configs[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
}
