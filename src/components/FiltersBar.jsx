import React from 'react';

/**
 * FiltersBar
 * Props:
 *  - dateFrom, dateTo, onDateFromChange, onDateToChange
 *  - department, onDepartmentChange
 */
export default function FiltersBar({ dateFrom, dateTo, onDateFromChange, onDateToChange, department, onDepartmentChange }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 items-center mb-6">
      <div className="flex items-center gap-3">
        <label className="text-xs text-gray-600">From</label>
        <input type="date" value={dateFrom} onChange={(e) => onDateFromChange && onDateFromChange(e.target.value)} className="border border-gray-200 rounded px-2 py-1 text-sm" />
      </div>
      <div className="flex items-center gap-3">
        <label className="text-xs text-gray-600">To</label>
        <input type="date" value={dateTo} onChange={(e) => onDateToChange && onDateToChange(e.target.value)} className="border border-gray-200 rounded px-2 py-1 text-sm" />
      </div>
      <div className="flex items-center gap-3">
        <label className="text-xs text-gray-600">Department</label>
        <select value={department} onChange={(e) => onDepartmentChange && onDepartmentChange(e.target.value)} className="border border-gray-200 rounded px-2 py-1 text-sm">
          <option value="All">All</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Product">Product</option>
        </select>
      </div>
      <div className="ml-auto text-sm text-gray-500">Filters are client-side for preview only</div>
    </div>
  );
}
