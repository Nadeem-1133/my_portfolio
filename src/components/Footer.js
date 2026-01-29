import React from 'react';

const Footer = ({ personalInfo }) => {
  return (
    <footer className="bg-[#0f172a] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h3 className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-tighter">
              Nadeem Khan
            </h3>
            <p className="text-gray-500 mt-2 font-medium">Developing high-impact digital solutions.</p>
          </div>

          <div className="flex gap-4">
            {[
              { label: 'LinkedIn', href: personalInfo?.linkedin },
              { label: 'GitHub', href: personalInfo?.github }
            ].filter(social => social.href).map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all font-bold text-sm tracking-widest uppercase hover:border-indigo-500/30"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 text-center">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Nadeem Khan. Engineered for Excellence.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
            <p className="text-gray-600 text-xs font-bold uppercase tracking-[0.2em]">
              Built with Next-Gen Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;