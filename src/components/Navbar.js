import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import StudioLogo from './StudioLogo';

const Navbar = ({ navItems, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKey = event => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = event => {
      if (!navRef.current?.contains(event.target)) setIsMenuOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = event => { if (event.matches) setIsMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      desktop.removeEventListener('change', onResize);
    };
  }, [isMenuOpen]);

  const navigate = id => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const isNavItemActive = item => activeSection === item.id || item.children?.some(child => activeSection === child.id);

  return (
    <header className="site-header" ref={navRef}>
      <div className="reading-progress" aria-hidden="true" />
      <nav className="studio-container nav-bar" aria-label="Main navigation">
        <a href="#home" className="brand-link" onClick={() => navigate('home')} aria-label="NK Build Studio home"><StudioLogo /></a>
        <div className="desktop-nav">
          {navItems.map(item => item.children ? (
            <div key={item.id} className="nav-dropdown">
              <a href={`#${item.id}`} className={`nav-link nav-link--dropdown ${isNavItemActive(item) ? 'is-active' : ''}`} aria-current={isNavItemActive(item) ? 'location' : undefined} onClick={() => navigate(item.id)}>
                {item.label}<ChevronDown size={14} />
              </a>
              <div className="nav-dropdown-menu" aria-label={`${item.label} menu`}>
                {item.children.map(child => (
                  <a key={child.id} href={`#${child.id}`} className="nav-dropdown-link" onClick={() => navigate(child.id)}>
                    <span>{child.label}</span><ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a key={item.id} href={`#${item.id}`} className={`nav-link ${isNavItemActive(item) ? 'is-active' : ''}`} aria-current={isNavItemActive(item) ? 'location' : undefined} onClick={() => navigate(item.id)}>{item.label}</a>
          ))}
        </div>
        <a href="#contact" className="nav-cta studio-button" onClick={() => navigate('contact')}>Let's talk <ArrowUpRight size={17} /></a>
        <button ref={toggleRef} type="button" className="menu-toggle" aria-label="Toggle Menu" title={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMenuOpen(open => !open)}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`} inert={!isMenuOpen}>
        <div className="mobile-menu-inner studio-container">
          {navItems.map((item, index) => item.children ? (
            <div key={item.id} className="mobile-nav-group">
              <a href={`#${item.id}`} className={`mobile-nav-link ${isNavItemActive(item) ? 'is-active' : ''}`} aria-current={isNavItemActive(item) ? 'location' : undefined} onClick={() => navigate(item.id)}><span><small>0{index + 1}</small>{item.label}</span><ChevronDown size={18} /></a>
              <div className="mobile-subnav">
                {item.children.map(child => (
                  <a key={child.id} href={`#${child.id}`} className="mobile-subnav-link" onClick={() => navigate(child.id)}>
                    <span>{child.label}</span><ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a key={item.id} href={`#${item.id}`} className={`mobile-nav-link ${isNavItemActive(item) ? 'is-active' : ''}`} aria-current={isNavItemActive(item) ? 'location' : undefined} onClick={() => navigate(item.id)}><span><small>0{index + 1}</small>{item.label}</span><ArrowUpRight size={20} /></a>
          ))}
          <a href="#contact" className="studio-button studio-button--bright" onClick={() => navigate('contact')}>Discuss a project <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
