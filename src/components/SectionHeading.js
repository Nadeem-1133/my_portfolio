import React from 'react';

const SectionHeading = ({ number, label, title, description }) => (
  <div className="section-heading" data-reveal>
    <div>
      <p className="eyebrow"><span className="section-number">{number}</span>{label}</p>
      <h2>{title}</h2>
    </div>
    {description && <p className="section-description">{description}</p>}
  </div>
);

export default SectionHeading;
