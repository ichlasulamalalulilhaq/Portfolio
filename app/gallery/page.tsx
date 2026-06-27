import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery | Hibah MBKM",
  description: "Gallery of activities for Hibah MBKM Kantor Pos Besar Yogyakarta",
};

export default function GalleryPage() {
  return (
    <div className="pt-[72px] pb-24 min-h-screen">
      {/* Header */}
      <section className="relative px-6 py-20 overflow-hidden">
        {/* Ambient background removed */}
        <div className="max-w-6xl mx-auto relative text-center">
          <AnimatedSection>
            <span className="section-label justify-center mb-5">Documentation</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight mb-6">
              Gallery <span className="gradient-text">MBKM</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Dokumentasi kegiatan dan momen berharga selama program Hibah MBKM di Kantor Pos Besar Yogyakarta.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection stagger delay={0.2}>
            {/* Masonry layout using CSS columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative break-inside-avoid rounded-2xl overflow-hidden group border border-white/10 shadow-lg bg-white/5 backdrop-blur-sm"
                >
                  <Image
                    src={src}
                    alt={`MBKM Kantor Pos Yogyakarta - Image ${index + 1}`}
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
