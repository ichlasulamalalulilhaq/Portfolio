"use client";

import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Parallax effects based on scroll position
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background is provided by HomeBackground in layout */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full mt-20 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text content */}
          <motion.div
            style={{ opacity }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >

            {/* Greeting removed for minimalism */}

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl xl:text-[3.5rem] font-extrabold tracking-tight leading-[1.12] mb-5 text-white"
            >
              <span className="gradient-text">{profile.fullName}</span>
            </motion.h1>

            {/* Title badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-white backdrop-blur-md text-sm font-semibold shadow-[0_0_20px_rgba(91,76,212,0.3)]">
                {profile.title}
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <Link href="/projects" className="btn-primary group">
                <span>View My Work</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-10"
            >
              <SocialLinks className="justify-center lg:justify-start" />
            </motion.div>
          </motion.div>

          {/* Right — Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              className="relative w-72 h-[340px] sm:w-80 sm:h-[400px] lg:w-[420px] lg:h-[500px]"
            >
              {/* Photo with smooth bottom fade (Hologram Effect) */}
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
                  className="object-contain object-bottom drop-shadow-[0_0_40px_rgba(91,76,212,0.4)]"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 420px"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
