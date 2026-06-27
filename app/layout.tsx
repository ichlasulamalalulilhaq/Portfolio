import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import HomeBackground from "@/components/HomeBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Iclasul Amal Al Ulil Haq — Developer & Creative Thinker",
    template: "%s | Iclasul Amal",
  },
  description:
    "Personal website & portfolio of Iclasul Amal Al Ulil Haq. Developer, creative thinker, and technology enthusiast building beautiful digital experiences.",
  keywords: ["developer", "portfolio", "web development", "personal website"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* Lucide Icons via CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/font/lucide.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <HomeBackground />
        <PageBackground />
        <div className="relative z-10 flex flex-col min-h-full flex-1">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
