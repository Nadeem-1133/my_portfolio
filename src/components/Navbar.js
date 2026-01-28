import React, { useState } from 'react';

const Navbar = ({ navItems, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e, itemId) => {
    if (itemId !== 'home') {
      setActiveSection(itemId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 py-6 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] px-8 py-4 flex justify-between items-center shadow-2xl">
          <button
            className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-tighter"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('about');
            }}
          >
            Nadeem.
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id === 'home' ? '#home' : `#${item.id}`}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative py-2 ${activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                  }`}
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1]"></span>
                )}
              </a>
            ))}
            <a href="#contact" className="ml-4 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-indigo-500/20 active:scale-95">
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl border border-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-6 shadow-2xl">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id === 'home' ? '#home' : `#${item.id}`}
                  className={`text-lg font-bold uppercase tracking-widest py-2 border-b border-white/5 last:border-0 ${activeSection === item.id
                      ? 'text-indigo-400'
                      : 'text-gray-400 hover:text-white'
                    }`}
                  onClick={(e) => handleClick(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;