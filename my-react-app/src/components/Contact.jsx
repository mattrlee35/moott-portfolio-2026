import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const CONTACT_EMAIL = 'mattrlee35@gmail.com';

const contactLinks = [
  { name: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: FaEnvelope },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/matthew-lee-69647126a/', icon: FaLinkedin },
  { name: 'GitHub', href: 'https://github.com/mattrlee35', icon: FaGithub },
];

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const body = `${formData.message}\n\n${formData.name} (${formData.email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitStatus(null), 4000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Get In <span className="text-emerald-400">Touch</span>
        </h2>
        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3 mx-auto" />
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {contactLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 text-sm text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Icon className="w-4 h-4" />
              {name}
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-900 bg-gradient-to-b from-slate-900/50 to-slate-950/50 backdrop-blur-sm p-8 sm:p-10 shadow-2xl relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/40 border border-slate-900 text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950/40 border border-slate-900 text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Subject</label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              placeholder="Project Collaboration"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-950/40 border border-slate-900 text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
            <textarea
              required
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3.5 rounded-xl bg-slate-950/40 border border-slate-900 text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-300 resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="min-h-[24px]">
              {submitStatus === 'success' && (
                <div className="text-sm text-emerald-400 font-semibold flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  Opening your email app...
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-10 py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:opacity-90 active:scale-95 disabled:opacity-50 transition-all shadow-xl shadow-emerald-500/10 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
