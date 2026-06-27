import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto z-20">
      <div className="relative max-w-6xl mx-auto px-6 py-10 flex flex-col items-center justify-center gap-6">
        {/* Centered Socials */}
        <div className="scale-110 drop-shadow-lg">
          <SocialLinks size="md" className="justify-center" />
        </div>
        
        {/* Copyright */}
        <p className="text-sm font-medium text-white/40 tracking-wider">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
