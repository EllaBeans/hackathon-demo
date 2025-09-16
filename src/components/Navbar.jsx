// React functional component for the main navigation bar
// Purpose: Top navigation bar with logo, app name, and user avatar
import React, { useState } from 'react';

export function Navbar({ userName = 'User', avatarUrl }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow-sm border-b border-gray-200 px-7 py-2 h-14">
      <div className="flex items-center gap-3">
        {/* Hamburger icon */}
        <button className="mr-2 p-1 rounded hover:bg-gray-100 focus:outline-none">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-gray-500"><rect y="5" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="17" width="24" height="2" rx="1" fill="currentColor"/></svg>
        </button>
        {/* App logo: prefer an attached PNG at /logo.png (public root). Falls back to inline SVG if unavailable. */}
        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
          {/** showCustom toggles off if the PNG fails to load so the fallback SVG appears */}
          <img
            src="/logo.png"
            alt="App logo"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="absolute" aria-hidden>
            <rect width="24" height="24" rx="6" fill="#E0E7FF"/>
            <path d="M7 12h10M12 7v10" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-semibold text-[20px] leading-tight text-gray-900 tracking-tight" style={{fontFamily:'Segoe UI, Arial, sans-serif'}}>Microsoft Viva Insights</span>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-xs text-gray-600 font-medium flex items-center gap-1">
          {/* Partition icon */}
          <svg width="16" height="16" fill="none" viewBox="0 0 20 20" className="text-gray-400"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/><circle cx="10" cy="10" r="3" fill="currentColor" className="text-indigo-400"/></svg>
          Partition: Global Partition
        </span>
        {/* Top-right menu icons */}
        <button className="p-1 rounded hover:bg-gray-100 focus:outline-none">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-gray-500"><circle cx="10" cy="10" r="1.5" fill="currentColor"/><circle cx="16" cy="10" r="1.5" fill="currentColor"/><circle cx="4" cy="10" r="1.5" fill="currentColor"/></svg>
        </button>
        <img
          src={avatarUrl || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userName)}
          alt={userName}
          className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
        />
      </div>
    </nav>
  );
}
