import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollEffects from './hooks/useScrollEffects';

import profileImg from './images/founder-teal.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const rootRef = useRef(null);
  useScrollEffects(rootRef, setActiveSection);

  const personalInfo = {
    name: "NK Build Studio",
    founder: "Nadeem Khan",
    title: "Mobile App Development, Web, WordPress, QA & Support",
    email: "nadeemzia52572@gmail.com",
    phone: "+92 3029661825",
    location: "Timergara, Pakistan",
    linkedin: "https://www.linkedin.com/in/nadeem-zia-133178341",
    github: "https://github.com/Nadeem-1133",
    bio: "NK Build Studio helps founders, small businesses and growing teams build dependable mobile apps, websites, WordPress experiences, QA workflows and technical support systems.",
    tagline: "Build better apps. Launch better digital experiences.",
    image: profileImg
  };

  const services = [
    {
      slug: 'mobile-app-development',
      role: "Mobile App Development",
      company: "Flutter, React Native, Expo",
      period: "Primary service",
      description: "Cross-platform app UI, API integration, maintenance, release support and practical improvements for real business workflows.",
      examples: ["Car service booking app", "Customer portal app", "Internal operations app"]
    },
    {
      slug: 'web-development',
      role: "Web Development",
      company: "React, responsive business sites, web apps",
      period: "Build & improve",
      description: "Fast, responsive websites and web applications with clear structure, modern interfaces and maintainable frontend/backend foundations.",
      examples: ["Business landing site", "Career guidance web app", "Service booking website"]
    },
    {
      slug: 'wordpress-development',
      role: "WordPress Development",
      company: "Setup, customization, content structure",
      period: "Flexible delivery",
      description: "WordPress setup, theme customization, content organization, handover support and ongoing improvements for business websites.",
      examples: ["Company website", "Blog and content hub", "Local service website"]
    },
    {
      slug: 'qa-testing',
      role: "QA Testing",
      company: "Manual, UI, API, regression, Playwright",
      period: "Quality layer",
      description: "Test planning, functional checks, UI review, API checks, bug reports and regression support before and after launch.",
      examples: ["App release testing", "Website responsive QA", "WordPress form and content checks"]
    },
    {
      slug: 'technical-support',
      role: "Technical Support",
      company: "Troubleshooting, triage, documentation",
      period: "Scoped support",
      description: "Application troubleshooting, access/user support, reproducible incident reports and coordination with the responsible team."
    }
  ];

  const skills = [
    { name: "Flutter", detail: "Cross-platform app builds" },
    { name: "React Native", detail: "Mobile UI and integrations" },
    { name: "React.js", detail: "Modern web interfaces" },
    { name: "Node.js & Express", detail: "APIs and backend services" },
    { name: "WordPress", detail: "Setup and customization" },
    { name: "Tailwind CSS", detail: "Responsive design systems" },
    { name: "REST APIs", detail: "Integration and data flows" },
    { name: "Playwright QA", detail: "Automation where useful" }
  ];

  const process = [
    "Discover",
    "Plan",
    "Build",
    "Test",
    "Launch",
    "Support & improve"
  ];

  const projects = [
    {
      name: "Alromaih Car Application",
      category: "Mobile app",
      serviceSlug: "mobile-app-development",
      description: "A Flutter-based car service and management application focused on performance, business workflows and clean cross-platform delivery.",
      qaScope: "Tested booking flow, account screens, API responses, responsive layouts and release-blocking bugs.",
      review: "The app flow became clearer and the handover was easy to follow.",
      reviewer: "Operations manager",
      link: "#",
      tags: ["Flutter", "Dart", "Odoo", "Supabase"]
    },
    {
      name: "AI-Based Career Counseling System",
      category: "Web app",
      serviceSlug: "web-development",
      description: "A guidance platform built around structured inputs, AI-assisted recommendations and a clear web experience for students.",
      qaScope: "Tested student forms, recommendation output screens, navigation states and mobile usability.",
      review: "The web experience felt organized, modern and simple for students to use.",
      reviewer: "Education project lead",
      link: "#",
      tags: ["React", "AI", "Node.js"]
    },
    {
      name: "Service Business Website",
      category: "Web development",
      serviceSlug: "web-development",
      description: "A responsive business website with service pages, clear calls to action, contact paths and a fast mobile-first layout.",
      qaScope: "Tested contact links, section anchors, browser behavior, mobile spacing and form readiness.",
      review: "The site made our services easier to understand and gave customers a direct way to contact us.",
      reviewer: "Small business owner",
      link: "#",
      tags: ["React", "Tailwind", "Responsive"]
    },
    {
      name: "Local Company WordPress Site",
      category: "WordPress",
      serviceSlug: "wordpress-development",
      description: "A WordPress company site with structured service content, page setup, theme customization and handover support.",
      qaScope: "Tested pages, menus, forms, plugin states, image loading and mobile content spacing.",
      review: "The WordPress setup was clean, and updating content after handover was straightforward.",
      reviewer: "Company administrator",
      link: "#",
      tags: ["WordPress", "Theme setup", "Forms"]
    },
    {
      name: "Cross-Project QA Coverage",
      category: "QA testing",
      serviceSlug: "qa-testing",
      description: "Testing coverage across mobile app, web app, business website and WordPress work before release or handover.",
      qaScope: "Covered Alromaih app, career counseling web app, service website and WordPress site with UI, forms, regression and device checks.",
      review: "Clear issue reports helped us fix problems faster before launch.",
      reviewer: "Project stakeholder",
      link: "#",
      tags: ["Manual QA", "UI checks", "Bug reports"]
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'services',
      label: 'Services',
      children: [
        { id: 'mobile-app-development', label: 'App Development' },
        { id: 'web-development', label: 'Web Development' },
        { id: 'wordpress-development', label: 'WordPress' },
        { id: 'qa-testing', label: 'QA Testing' },
        { id: 'technical-support', label: 'Technical Support' }
      ]
    },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
  ];

  return (
    <div className="App studio-site" ref={rootRef}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main id="main-content">
        <Hero personalInfo={personalInfo} />
        <Experience experiences={services} onSelectService={setSelectedService} />
        <Projects projects={projects} />
        <Skills skills={skills} process={process} />
        <About personalInfo={personalInfo} />
        <Contact personalInfo={personalInfo} services={services} selectedService={selectedService} />
      </main>
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;
