import React from 'react';

export default function GlossaryLink({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-sm text-indigo-600 hover:underline">
      {label}
    </a>
  );
}
