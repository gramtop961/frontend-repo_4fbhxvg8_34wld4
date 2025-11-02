import React from 'react';

const NavButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
      active ? 'text-white/90' : 'text-white/60 hover:text-white/90'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    {label}
  </button>
);

export default function Navigation({ currentView, onChangeView, isDark }) {
  // Top minimal nav that adapts color based on background
  const base = isDark ? 'text-white' : 'text-neutral-900';
  const subtle = isDark ? 'bg-white/10' : 'bg-neutral-900/10';
  const border = isDark ? 'border-white/20' : 'border-neutral-900/20';
  const textMuted = isDark ? 'text-white/70' : 'text-neutral-700';

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <div className={`mt-6 flex items-center gap-6 rounded-full ${subtle} backdrop-blur-md border ${border} px-4 py-2 pointer-events-auto`}>        
        <div className={`text-[10px] tracking-[0.35em] ${textMuted}`}>MICHAEL TANDYO</div>
        <div className={`${base} flex items-center`}>|</div>
        <NavButton
          label="HOME"
          active={currentView === 'main'}
          onClick={() => onChangeView('main')}
        />
        <NavButton
          label="ABOUT"
          active={currentView === 'about'}
          onClick={() => onChangeView('about')}
        />
        <NavButton
          label="PROJECTS"
          active={currentView === 'projects'}
          onClick={() => onChangeView('projects')}
        />
      </div>
    </div>
  );
}
