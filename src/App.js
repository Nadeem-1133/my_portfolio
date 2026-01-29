import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import profileImg from './images/image.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const personalInfo = {
    name: "Nadeem Khan",
    title: "Full Stack & Application Developer",
    email: "nadeemzia52572@gmail.com",
    phone: "+92 3029661825",
    location: "Timergara, Pakistan",
    linkedin: "https://www.linkedin.com/in/nadeem-zia-133178341",
    github: "https://github.com/Nadeem-1133",
    bio: "Computer Science graduate with strong hands-on experience in Application development and Web development. Expert in building cross-platform mobile apps using React Native and scalable web solutions with React and Node.js.",
    image: profileImg
  };

  const skills = [
    { name: "Flutter", level: 85 },
    { name: "React Native", level: 95 },
    { name: "React.js", level: 92 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "Expo", level: 90 },
    { name: "Redux / Context API", level: 88 },
    { name: "RESTful APIs", level: 90 },
    { name: "Git", level: 85 }
  ];

  const experiences = [
    {
      role: "Application Developer",
      company: "TedRed Software House",
      period: "Sept 2024 - Current",
      description: "Developing cross-platform mobile applications using React Native and Expo. Skilled in building responsive UIs with Tailwind CSS and modern libraries like React Native Paper and Reanimated."
    },
    {
      role: "Web Developer",
      company: "TedRed Software House",
      period: "Sept 2024 - Current",
      description: "Leveraging React.js for building interactive user interfaces. Improved user experience and increased site traffic by 30% for various clients."
    },
    {
      role: "Backend Developer",
      company: "TedRed Software House",
      period: "Dec 2024 - Current",
      description: "Building scalable backend applications using Node.js and Express.js. Experienced in RESTful API development and integration with frontend apps."
    }
  ];

  const education = [
    {
      degree: "BS Computer Science",
      institution: "University Of Malakand",
      year: "2020 - 2024"
    },
    {
      degree: "Intermediate (Pre-Medical)",
      institution: "Allama Iqbal Public High School and College",
      year: "2018 - 2020"
    }
  ];

  const projects = [
    {
      name: "Alromaih Car Application",
      description: "A modern and efficient car-related application built with Flutter, providing users with a high-performance, cross-platform experience for car services and management.",
      link: "#",
      tags: ["Flutter", "Dart", "Odoo", "Supabase"]
    },
    {
      name: "AI-Based Career Counseling System",
      description: "A personalized guidance system for students to help them choose the right career path using AI trends.",
      link: "#",
      tags: ["React", "AI", "Node.js"]
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="App">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;