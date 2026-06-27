"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const firstName = profile.name.split(" ")[0];
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] max-w-5xl ${
        scrolled
          ? "bg-white/5 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)] border border-white/10"
          : "bg-transparent border border-transparent"
      } rounded-2xl`}
    >
      <nav className="px-5 h-[56px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2.5 hover:opacity-80 transition-opacity text-white`}
        >
        </Link>

        {/* Desktop Nav — pills */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA button desktop */}
        <Link
          href="/contact"
          className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-accent text-white hover:bg-accent-dark shadow-md shadow-accent/20"
              : "bg-white text-black hover:bg-white/90"
          }`}
        >
          Hire Me
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg transition-all text-white hover:bg-white/10`}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-[16px] h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[16px] h-[1.5px] bg-current rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-[16px] h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? "max-h-60 opacity-100 pb-3" : "max-h-0 opacity-0"}`}>
        <div className="px-3 flex flex-col gap-0.5 bg-black/90 backdrop-blur-2xl border-b border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent bg-accent/10"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
