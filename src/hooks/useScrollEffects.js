import { useEffect } from 'react';

export default function useScrollEffects(rootRef, setActiveSection) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.matchMedia) return undefined;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reveals = Array.from(root.querySelectorAll('[data-reveal]'));
    const sections = Array.from(root.querySelectorAll('main > section[id]'));
    let observer;
    let frame = 0;

    const setupMotion = () => {
      observer?.disconnect();
      const motionAvailable = !preference.matches && 'IntersectionObserver' in window;
      root.classList.toggle('motion-ready', motionAvailable);
      if (!motionAvailable) {
        reveals.forEach(element => element.classList.add('is-revealed'));
        return;
      }
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            // Reset only fully offscreen content, so revisiting a section replays it.
            const bounds = entry.target.getBoundingClientRect();
            if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) {
              entry.target.classList.remove('is-revealed');
            }
          }
        });
      }, { threshold: 0 });
      reveals.forEach(element => observer.observe(element));
    };

    const updateScroll = () => {
      frame = 0;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', scrollRange > 0 ? Math.min(1, window.scrollY / scrollRange) : 0);
      root.classList.toggle('has-scrolled', window.scrollY > 32);
      let current = 'home';
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 180) current = section.id;
      });
      setActiveSection(current);
    };

    const scheduleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    setupMotion();
    updateScroll();
    preference.addEventListener('change', setupMotion);
    window.addEventListener('scroll', scheduleScroll, { passive: true });
    window.addEventListener('resize', scheduleScroll);
    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      preference.removeEventListener('change', setupMotion);
      window.removeEventListener('scroll', scheduleScroll);
      window.removeEventListener('resize', scheduleScroll);
      root.classList.remove('motion-ready');
    };
  }, [rootRef, setActiveSection]);
}
