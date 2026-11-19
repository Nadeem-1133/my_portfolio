import React from 'react';
import { ArrowUpRight, MapPin, Check } from 'lucide-react';

const About = ({ personalInfo }) => (
  <section id="about" className="studio-section about-section">
    <div className="studio-container about-layout">
      <figure className="founder-portrait" data-reveal="left">
        <div className="portrait-frame">
          <img src={personalInfo.image} alt={`${personalInfo.founder}, founder of NK Build Studio`} width="1122" height="1402" loading="lazy" />
          <span className="portrait-corner portrait-corner--top" aria-hidden="true" />
          <span className="portrait-corner portrait-corner--bottom" aria-hidden="true" />
        </div>
        <figcaption><span>{personalInfo.founder}<small>Founder, NK Build Studio</small></span><ArrowUpRight size={26} /></figcaption>
      </figure>
      <div className="about-copy" data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
        <p className="eyebrow"><span className="section-number">04</span>Behind the studio</p>
        <h2>A real person.<br /><span className="heading-accent">A shared ambition.</span></h2>
        <p className="about-lead">Hi, I'm {personalInfo.founder}. I founded NK Build Studio to turn useful ideas into dependable digital products.</p>
        <p>Our focus starts with mobile apps and extends to web development, WordPress, QA and technical support. You work directly with the person shaping and building your project.</p>
        <ul className="about-principles">
          {['Clear scope and honest communication', 'Care in the details, from build to handover', 'Support that fits the needs of your project'].map(item => <li key={item}><Check size={18} />{item}</li>)}
        </ul>
        <div className="about-bottom"><a href="#contact" className="studio-button studio-button--bright">Work together <ArrowUpRight size={18} /></a><span className="founder-location"><MapPin size={17} />{personalInfo.location}</span></div>
      </div>
    </div>
  </section>
);

export default About;
