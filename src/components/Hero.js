import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero = ({ personalInfo }) => (
  <section id="home" className="studio-hero">
    <div className="hero-image" aria-hidden="true">
      <img src={personalInfo.image} alt="" width="1122" height="1402" fetchPriority="high" />
    </div>
    <div className="studio-container hero-content">
      <div className="hero-copy">
        <p className="eyebrow hero-enter" style={{ '--enter-delay': '80ms' }}>
          <span className="tiny-rule" /> Independent digital studio
        </p>
        <h1 className="hero-enter" style={{ '--enter-delay': '180ms' }}>NK Build{' '}<span>Studio<span className="hero-dot">.</span></span></h1>
        <p className="hero-value hero-enter" style={{ '--enter-delay': '280ms' }}>Thoughtful apps. Dependable delivery.</p>
        <p className="hero-intro hero-enter" style={{ '--enter-delay': '360ms' }}>Mobile apps, websites and WordPress experiences, built with care. From the first idea to QA, launch and ongoing support.</p>
        <div className="hero-actions hero-enter" style={{ '--enter-delay': '440ms' }}>
          <a href="#contact" className="studio-button studio-button--bright">Discuss a project <ArrowUpRight size={19} /></a>
          <a href="#work" className="studio-text-link">Explore our work <ArrowRight size={19} /></a>
        </div>
      </div>
      <div className="hero-signature hero-enter" style={{ '--enter-delay': '600ms' }}>
        <span>{personalInfo.founder}</span><small>Founder & developer</small>
      </div>
    </div>
    <div className="hero-bottom">
      <div className="studio-container hero-bottom-inner">
        <span className="availability"><span className="status-dot" /> Available for scoped projects</span>
        <a href="#services" className="studio-text-link">Discover the studio <ArrowDown size={17} /></a>
      </div>
    </div>
  </section>
);

export default Hero;
