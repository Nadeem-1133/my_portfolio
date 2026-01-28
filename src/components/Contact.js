import React from 'react';

const Contact = ({ personalInfo }) => {
  return (
    <section id="contact" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1e293b] rounded-[3rem] shadow-2xl overflow-hidden border border-white/5">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-indigo-600 to-purple-700 p-12 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <h3 className="text-3xl font-bold mb-8 relative z-10">Contact Info</h3>
                <p className="text-indigo-100 mb-12 text-lg leading-relaxed relative z-10">
                  I'm currently available for freelance work and full-time positions.
                  Let's build something amazing together!
                </p>

                <div className="space-y-10 relative z-10">
                  {[
                    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                    { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                    { label: 'Location', value: personalInfo.location, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-indigo-600 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-xl font-bold hover:underline transition-all underline-offset-4">{item.value}</a>
                        ) : (
                          <p className="text-xl font-bold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 pt-10 border-t border-white/10 relative z-10">
                  <h4 className="font-bold text-sm uppercase tracking-[0.3em] mb-6">Social Connect</h4>
                  <div className="flex gap-4">
                    <a href={personalInfo.linkedin} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all border border-white/10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 p-12 md:p-16">
                <h3 className="text-3xl font-bold text-white mb-10">Write me a message</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Your Full Name</label>
                      <input type="text" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                      <input type="email" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Message Subject</label>
                    <input type="text" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all" placeholder="Project discussion" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Your Message</label>
                    <textarea rows="5" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none" placeholder="Tell me more about your project..."></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] active:scale-95 text-white font-black py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                    SEND DISCOVERY CALL REQUEST
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;