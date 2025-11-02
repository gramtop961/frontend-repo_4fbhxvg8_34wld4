import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import CustomCursor from './components/CustomCursor';
import SectionRenderer from './components/SectionRenderer';

const mainSections = ['hero', 'intro', 'philosophy', 'core-me', 'featured-work', 'contact'];
const aboutSections = ['about-hero', 'about-story', 'about-values', 'about-journey', 'about-detail'];
const projectSections = ['projects-hero', 'project-1', 'project-2', 'project-3', 'project-4', 'project-5'];
const detailSections = ['detail-hero', 'detail-overview', 'detail-challenge', 'detail-solution', 'detail-impact'];

export default function App() {
  const [currentView, setCurrentView] = useState('main'); // 'main' | 'about' | 'projects' | 'project-detail'
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const lockRef = useRef(false);

  const getCurrentSections = useCallback(() => {
    switch (currentView) {
      case 'about':
        return aboutSections;
      case 'projects':
        return projectSections;
      case 'project-detail':
        return detailSections;
      case 'main':
      default:
        return mainSections;
    }
  }, [currentView]);

  const sections = getCurrentSections();

  const isDarkAtIndex = useCallback((idx) => {
    // Alternate light/dark for rhythm: even -> light, odd -> dark
    return idx % 2 === 1;
  }, []);

  const isDark = isDarkAtIndex(currentSection);

  const handleWheel = useCallback(
    (e) => {
      if (lockRef.current) return;

      const delta = e.deltaY;
      if (Math.abs(delta) < 10) return;

      const dir = delta > 0 ? 1 : -1;
      const next = currentSection + dir;
      if (next < 0 || next >= sections.length) return;

      lockRef.current = true;
      setScrollLocked(true);
      setCurrentSection(next);
      // timing lockout to avoid scroll spam (sync with animation duration)
      window.setTimeout(() => {
        lockRef.current = false;
        setScrollLocked(false);
      }, 900);
    },
    [currentSection, sections.length]
  );

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      handleWheel(e);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [handleWheel]);

  const goToView = useCallback((view) => {
    setCurrentView(view);
    setCurrentSection(0);
  }, []);

  const onOpenProject = useCallback(() => {
    setCurrentView('project-detail');
    setCurrentSection(0);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <CustomCursor />
      <Navigation currentView={currentView} onChangeView={goToView} isDark={isDark} />
      <ProgressIndicator total={sections.length} current={currentSection} isDark={isDark} />

      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <div key={`${currentView}-${currentSection}`} className="w-full h-full">
            <SectionRenderer
              view={currentView}
              section={sections[currentSection]}
              isDark={isDark}
              onOpenProject={onOpenProject}
            />
          </div>
        </AnimatePresence>
      </div>

      {/* Subtle instruction footer */}
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] ${
        isDark ? 'text-white/50' : 'text-neutral-700/70'
      }`}>
        SCROLL TO TURN THE PAGE
      </div>
    </div>
  );
}
