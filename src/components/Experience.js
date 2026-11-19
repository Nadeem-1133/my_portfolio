import React from 'react';
import { Smartphone, Globe2, PanelsTopLeft, ShieldCheck, LifeBuoy, ArrowUpRight, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';

const serviceIcons = [Smartphone, Globe2, PanelsTopLeft, ShieldCheck, LifeBuoy];

const Experience = ({ experiences, onSelectService }) => (
  <section id="services" className="studio-section services-section">
    <div className="studio-container">
      <SectionHeading number="01" label="What we do" title={<>From first idea.<br /><span className="heading-accent">To what comes next.</span></>} description="One studio for building, testing and supporting the digital side of your business." />
      <div className="service-grid">
        {experiences.map((service, index) => {
          const Icon = serviceIcons[index];
          return (
            <a key={service.slug} id={service.slug} href="#contact" onClick={() => onSelectService(service.slug)} className={`service-card ${index === 0 ? 'service-card--featured' : ''}`} data-reveal style={{ '--reveal-delay': `${index * 65}ms` }} aria-label={`Discuss ${service.role}`}>
              <div className="service-card-top"><span className="service-icon"><Icon size={27} strokeWidth={1.5} /></span><span className="card-index">0{index + 1}</span></div>
              <div className="service-card-copy">
                <p className="card-kicker">{service.period}</p>
                <h3>{service.role}</h3>
                <p className="card-description">{service.description}</p>
              </div>
              <ul className="service-deliverables">
                {(service.examples || ['Flutter & React Native', 'App UI & API integration', 'Testing & release support']).map(item => <li key={item}><Check size={16} />{item}</li>)}
              </ul>
              <div className="service-card-bottom"><span>{index === 0 ? 'Discuss your app' : service.company.split(',')[0]}</span><ArrowUpRight size={22} className="card-arrow" /></div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

export default Experience;
