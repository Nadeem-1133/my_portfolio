import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import StudioLogo from './StudioLogo';

const Footer = ({ personalInfo }) => (
  <footer className="studio-footer">
    <div className="studio-container">
      <div className="footer-top" data-reveal>
        <div><p className="eyebrow">Have something in mind?</p><a href="#contact" className="footer-invitation">Let's build it.<ArrowUpRight strokeWidth={1.2} /></a></div>
        <a href={`mailto:${personalInfo.email}`} className="studio-text-link footer-email">{personalInfo.email}<ArrowUpRight size={19} /></a>
      </div>
      <div className="footer-main">
        <a href="#home" aria-label="NK Build Studio home" className="brand-link"><StudioLogo /></a>
        <p>{personalInfo.tagline}</p>
        <div className="footer-socials">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn<ArrowUpRight size={16} /></a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub<ArrowUpRight size={16} /></a>
          <a href="#home" className="icon-link" aria-label="Back to top" title="Back to top"><ArrowUp size={19} /></a>
        </div>
      </div>
      <div className="footer-bottom"><p>&copy; {new Date().getFullYear()} NK Build Studio.</p><span>Independent studio. Thoughtful digital work.</span><span>{personalInfo.location}</span></div>
    </div>
  </footer>
);

export default Footer;
