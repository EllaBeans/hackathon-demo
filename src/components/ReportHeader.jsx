import React from 'react';

/**
 * ReportHeader
 * Props:
 *  - title, author, updated
 *  - onBack: function
 *  - actions: optional React node for action buttons
 */
export default function ReportHeader({ title, author, updated, onBack, actions }) {
  return (
    <div className="flex items-start justify-between gap-6 mb-6">
      <div className="flex items-start gap-4">
        <button onClick={onBack} className="inline-flex items-center rounded-md px-3 py-2 bg-white border border-gray-200 text-sm text-gray-700 shadow-sm hover:bg-gray-50" aria-label="Back to reports">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="mr-2" aria-hidden>
            <path d="M12 15l-5-5 5-5" stroke="#374151" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <div>
          <div className="text-xl font-semibold text-gray-900 leading-tight">{title}</div>
          <div className="text-sm text-gray-500">{author} • {updated}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {actions}
      </div>
    </div>
  );
}
