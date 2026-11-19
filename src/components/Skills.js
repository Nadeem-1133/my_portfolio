import React from 'react';
import { ArrowUpRight, Braces } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Skills = ({ skills, process }) => (
  <section id="process" className="studio-section process-section">
    <div className="studio-container">
      <SectionHeading number="03" label="How we work" title={<>Good work starts<br /><span className="heading-accent">with a clear process.</span></>} description="A considered path from the first conversation to a dependable launch, with a scope that fits your project." />
      <ol className="process-track" data-reveal>
        {process.map((step, index) => (
          <li key={step} className="process-step" style={{ '--step-delay': `${index * 110}ms` }}>
            <span className="process-marker">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
          </li>
        ))}
      </ol>
      <div className="stack-heading" data-reveal><h3>The right tools for the job.</h3><a className="studio-text-link" href="#contact">Let's talk technology <ArrowUpRight size={18} /></a></div>
      <div className="stack-grid">
        {skills.map((skill, index) => (
          <div key={skill.name} className="stack-item" data-reveal style={{ '--reveal-delay': `${index % 4 * 60}ms` }}>
            <Braces className="stack-icon" size={22} strokeWidth={1.5} />
            <div><h4>{skill.name}</h4><p>{skill.detail}</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
