import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = personalInfo.phone.replace(/[^0-9]/g, '');
    const whatsappMessage = `*New Portfolio Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    try {
      if (SERVICE_ID !== "YOUR_SERVICE_ID") {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: personalInfo.email,
          },
          PUBLIC_KEY
        );
        alert('Email sent successfully!');
      } else {
        const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
      }
    } catch (error) {
      console.error('Email Error:', error);
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 md:w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-[#1e293b] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-white/5">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 relative z-10 uppercase tracking-tight">Contact Info</h3>
                <p className="text-indigo-100 mb-10 md:mb-12 text-base md:text-lg leading-relaxed relative z-10 font-light">
                  I'm currently available for freelance work and full-time positions.
                  Let's build something amazing together!
                </p>

                <div className="space-y-8 md:space-y-10 relative z-10">
                  {[
                    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                    { label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                    { label: 'Location', value: personalInfo.location, icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 md:gap-6 group">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-indigo-600 transition-all duration-300 shrink-0">
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-indigo-200 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-base md:text-xl font-bold hover:underline transition-all underline-offset-4 break-all block">{item.value}</a>
                        ) : (
                          <p className="text-base md:text-xl font-bold break-words">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/10 relative z-10">
                  <h4 className="font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-6">Social Connect</h4>
                  <div className="flex gap-4">
                    <a href={personalInfo.linkedin} className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all border border-white/10">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 md:p-16">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 uppercase tracking-tight">Write me a message</h3>
                <form className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-white/5 rounded-xl md:rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm md:text-base"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800/50 border border-white/5 rounded-xl md:rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm md:text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500">Message Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-white/5 rounded-xl md:rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm md:text-base"
                      placeholder="Project discussion"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-slate-800/50 border border-white/5 rounded-xl md:rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all resize-none text-sm md:text-base"
                      placeholder="Tell me more about your project..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 bg-[#25D366] hover:scale-[1.02] active:scale-95 text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl transition-all shadow-[0_10px_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 group text-xs md:text-sm tracking-widest"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      WHATSAPP
                    </button>

                    <button
                      type="button"
                      onClick={handleEmail}
                      disabled={isSending}
                      className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] active:scale-95 text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl transition-all shadow-[0_10px_30px_rgba(99,102,241,0.3)] disabled:opacity-50 flex items-center justify-center gap-3 group text-xs md:text-sm tracking-widest"
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {isSending ? 'SENDING...' : 'GMAIL'}
                    </button>
                  </div>
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