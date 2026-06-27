import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SkillCard from "@/components/SkillCard";
import SocialLinks from "@/components/SocialLinks";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${profile.fullName} — ${profile.title}`,
};

export default function AboutPage() {
  return (
    <div className="pt-[72px] pb-24">
      {/* ===== HEADER ===== */}
      <section className="relative px-6 py-24 lg:py-32 overflow-hidden">
        {/* Ambient background removed for minimalist look */}

        <div className="max-w-5xl mx-auto relative">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-14 lg:gap-20">
              {/* Photo Area */}
              <div className="shrink-0 relative w-56 h-[300px] sm:w-64 sm:h-[340px]">
                {/* Photo with smooth bottom fade */}
                <div 
                  className="relative w-full h-full"
                  style={{ 
                    WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                    maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)"
                  }}
                >
                  <Image
                    src={profile.avatar}
                    alt={profile.fullName}
                    fill
                    className="object-contain object-bottom drop-shadow-[0_0_30px_rgba(91,76,212,0.4)]"
                    priority
                    sizes="(max-width: 640px) 224px, 256px"
                  />
                </div>
              </div>

              {/* Text Area */}
              <div className="text-center md:text-left flex-1">
                <span className="section-label mb-5">About Me</span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
                  {profile.fullName}
                </h1>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/6 border border-accent/12 text-accent text-sm font-semibold mb-8">
                  {profile.title}
                </div>
                <div className="space-y-5 text-text-secondary text-justify leading-[1.8] text-[15px] mb-8">
                  {profile.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <SocialLinks className="justify-center md:justify-start" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="px-6 py-24 relative overflow-hidden">
        {/* Ambient glow removed */}

        <div className="max-w-4xl mx-auto relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-label justify-center mb-5">Timeline</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                Experience
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical Line with gradient */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-secondary/20 to-transparent" />

            <AnimatedSection stagger>
              <div className="space-y-10">
                {profile.timeline.map((item, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div key={i} className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}>
                      
                      {/* Timeline Node */}
                      <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-5 z-10">
                        <div className="w-6 h-6 rounded-full bg-background border-[3px] border-accent/30 shadow-lg shadow-accent/10 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-40px)] ml-16 md:ml-0 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[28px] p-6 relative group">
                          <div className="inline-block px-3 py-1 bg-accent/8 text-accent text-xs font-bold rounded-lg mb-3">
                            {item.year}
                          </div>
                          <h3 className="text-lg font-bold text-text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-text-secondary text-justify leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="px-6 py-24 relative overflow-hidden">
        {/* Ambient glow removed */}

        <div className="max-w-5xl mx-auto relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="section-label justify-center mb-5">Toolkit</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                Skills & Technologies
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {profile.skills.map((skill) => (
                <SkillCard
                  key={skill.category}
                  category={skill.category}
                  items={skill.items}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
