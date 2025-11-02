import React from 'react';

export default function ProgressIndicator({ total, current, isDark }) {
  const base = isDark ? 'bg-white/20' : 'bg-neutral-900/20';
  const active = isDark ? 'bg-white' : 'bg-neutral-900';

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-1 rounded-full transition-all duration-300 ${
            i === current ? `${active} h-6` : `${base} h-3`
          }`}
        />
      ))}
    </div>
  );
}
