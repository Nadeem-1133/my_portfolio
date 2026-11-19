import React from 'react';
import { ArrowUpRight, Smartphone, Braces, ShieldCheck, Globe2, PanelsTopLeft, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projectIcons = {
  'mobile-app-development': Smartphone,
  'web-development': Globe2,
  'wordpress-development': PanelsTopLeft,
  'qa-testing': ShieldCheck,
};

const Projects = ({ projects }) => (
  <section id="work" className="studio-section work-section">
    <div className="studio-container">
      <SectionHeading number="02" label="Selected work" title={<>Built with purpose.<br /><span className="heading-accent">Made to work.</span></>} description="A selection of app, web and quality-assurance work. Project scope and details are available on request." />
      <div className="project-grid">
        {projects.map((project, index) => {
          const Icon = projectIcons[project.serviceSlug] || Braces;
          const hasCase = project.link && project.link !== '#';
          return (
            <article key={project.name} className="project-card" data-reveal="scale" style={{ '--reveal-delay': `${index * 90}ms` }}>
              <div className={`project-art project-art--${(index % 3) + 1}`} aria-hidden="true">
                <span className="project-art-index">0{index + 1}</span>
                <Icon size={76} strokeWidth={1} />
                <span className="project-art-label">{project.tags[0]} / {project.category}</span>
              </div>
              <div className="project-card-body">
                <p className="card-kicker">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="card-description">{project.description}</p>
                <div className="qa-note">
                  <ShieldCheck size={16} />
                  <span>{project.qaScope}</span>
                </div>
                <blockquote className="project-review">
                  <Quote size={17} />
                  <p>{project.review}</p>
                  <cite>{project.reviewer}</cite>
                </blockquote>
                <ul className="tech-tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                <a className="project-link" href={hasCase ? project.link : '#contact'} {...(hasCase ? { target: '_blank', rel: 'noopener noreferrer' } : {})} aria-label={`${hasCase ? 'View' : 'Discuss'} ${project.name}`}>
                  <span>{hasCase ? 'View case study' : 'Discuss this project'}</span><ArrowUpRight size={21} />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
