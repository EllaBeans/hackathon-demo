import React from 'react';

/**
 * ChartCard: consistent wrapper for chart blocks with title and actions
 * Props: title, subtitle, children, actions
 */
export default function ChartCard({ title, subtitle, children, actions }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-medium text-sm">{title}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
        {actions && <div>{actions}</div>}
      </div>
      <div>{children}</div>
    </div>
  );
}
