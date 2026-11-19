import React from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = ({ personalInfo, services, selectedService }) => {
  const serviceName = services.find(service => service.slug === selectedService)?.role;
  const subject = serviceName ? `Let's discuss ${serviceName}` : "Let's build something together";
  const message = serviceName
    ? `Hi Nadeem, I'd like to discuss ${serviceName} for my project.`
    : "Hi Nadeem, I'd like to discuss a project with NK Build Studio.";
  const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="studio-section contact-section" aria-labelledby="contact-heading">
      <div className="studio-container contact-layout">
        <div className="contact-copy" data-reveal="left">
          <p className="eyebrow"><span className="section-number">05</span>Start a conversation</p>
          <h2 id="contact-heading">Let's make<br /><span className="heading-accent">something useful.</span></h2>
          <p>Have an idea in mind? Tell me what you're building. Let's find the right next step, together.</p>
          <div className="contact-person">
            <span className="contact-monogram" aria-hidden="true">NK</span>
            <div><p>{personalInfo.founder}</p><span>Founder, {personalInfo.name}</span></div>
          </div>
          <p className="contact-location"><MapPin size={14} aria-hidden="true" />{personalInfo.location}</p>
          <div className="contact-social">
            <a href={personalInfo.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a>
            <a href={personalInfo.github} className="social-link" target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="contact-channels" data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
          <div className="contact-channels-heading"><span>YOUR IDEA. OUR NEXT CONVERSATION.</span><ArrowUpRight size={20} aria-hidden="true" /></div>
          <a className="contact-action contact-action--whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
            <span className="contact-action-icon"><MessageCircle size={27} strokeWidth={1.5} aria-hidden="true" /></span>
            <span className="contact-action-copy"><span className="contact-action-label">LET'S TALK</span><span className="contact-action-title">Chat on WhatsApp</span><span className="contact-action-description">A quick hello. A new possibility.</span><span className="contact-action-address">{personalInfo.phone}</span></span>
            <span className="contact-action-arrow"><ArrowUpRight size={22} aria-hidden="true" /></span>
          </a>
          <a className="contact-action contact-action--email" href={gmailUrl} target="_blank" rel="noopener noreferrer" aria-label="Send an email">
            <span className="contact-action-icon"><Mail size={27} strokeWidth={1.5} aria-hidden="true" /></span>
            <span className="contact-action-copy"><span className="contact-action-label">SHARE YOUR VISION</span><span className="contact-action-title">Send an email</span><span className="contact-action-description">Room for the details. Space for the big idea.</span><span className="contact-action-address">{personalInfo.email}</span></span>
            <span className="contact-action-arrow"><ArrowUpRight size={22} aria-hidden="true" /></span>
          </a>
          <p className="contact-channel-note">Connect directly with Nadeem.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
