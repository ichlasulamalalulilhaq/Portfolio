"use client";

import { useState, type FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="pt-[72px] pb-24">
      {/* ===== HEADER ===== */}
      <section className="px-6 py-24 lg:py-32 relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-secondary/[0.03]" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-3xl mx-auto mb-8 shadow-lg shadow-accent/20">
              ✉️
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Have a question, idea, or just want to say hi? I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="px-6 py-8 relative">
        {/* Ambient glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/3 translate-x-1/3" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          
          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] h-full overflow-hidden">
              {/* Form header bar */}
              <div className="h-1 w-full bg-gradient-to-r from-accent via-secondary to-accent-muted" />

              <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-7">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-text-primary">Send a Message</h3>
                  <p className="text-sm text-text-muted">I usually respond within 24 hours.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label htmlFor="contact-name" className="text-sm font-semibold text-text-primary flex items-center gap-2">
                      <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label htmlFor="contact-email" className="text-sm font-semibold text-text-primary flex items-center gap-2">
                      <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label htmlFor="contact-message" className="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-text-muted/50 text-sm focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 focus:bg-white/10 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="btn-primary w-full justify-center py-4 text-base"
                  disabled={submitted}
                >
                  {submitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info Sidebar */}
          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] p-8 sm:p-10 h-full flex flex-col">
              <h3 className="text-xl font-bold text-text-primary mb-8">Contact Info</h3>
              
              <div className="space-y-7">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-1">Email</span>
                    <a
                      href={`mailto:${profile.socials.email}`}
                      className="text-sm font-medium text-text-primary hover:text-accent transition-colors break-all"
                    >
                      {profile.socials.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-1">Location</span>
                    <p className="text-sm font-medium text-text-primary">Indonesia 🇮🇩</p>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-3">
                    Social Media
                  </span>
                  <SocialLinks />
                </div>
              </div>

              {/* Availability */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-emerald-700">
                    Available for freelance work
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
