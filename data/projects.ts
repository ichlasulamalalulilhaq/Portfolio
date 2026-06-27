/**
 * ========================================
 * PROJECTS DATA
 * ========================================
 * Add, edit, or remove projects here.
 * Each project will automatically appear on the
 * Projects page and featured ones on the Home page.
 */

export interface Project {
  /** Unique identifier */
  id: string;
  /** Project title */
  title: string;
  /** Short description */
  description: string;
  /** Technologies used */
  tech: string[];
  /** Link to live demo (optional) */
  liveUrl?: string;
  /** Link to source code (optional) */
  githubUrl?: string;
  /** Whether to feature on homepage */
  featured: boolean;
  /** Emoji icon for the project card */
  icon: string;
}

export const projects: Project[] = [
  {
    id: "dashboard-monitoring",
    title: "Dashboard Monitoring",
    description:
      "Sistem dashboard real-time untuk monitoring operasional dengan visualisasi data interaktif dan notifikasi otomatis.",
    tech: ["Next.js", "TypeScript", "Chart.js", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: "📊",
  },
  {
    id: "personal-website",
    title: "Personal Website",
    description:
      "Website portfolio pribadi yang modern dengan dark theme, animasi halus, dan desain glassmorphism.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    icon: "🌐",
  },
  {
    id: "data-analysis",
    title: "Data Analysis Pipeline",
    description:
      "Pipeline analisis data untuk customer segmentation menggunakan clustering algorithms dan visualisasi interaktif.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    githubUrl: "#",
    featured: true,
    icon: "🔬",
  },
  {
    id: "mobile-app",
    title: "Mobile Delivery App",
    description:
      "Aplikasi mobile untuk manajemen pengiriman dengan fitur tracking real-time dan notifikasi push.",
    tech: ["Flutter", "Dart", "Firebase", "Go"],
    featured: false,
    icon: "📱",
  },
  {
    id: "ml-fraud-detection",
    title: "Fraud Detection System",
    description:
      "Sistem deteksi fraud menggunakan machine learning dengan federated learning untuk menjaga privasi data.",
    tech: ["Python", "PyTorch", "R-GCN", "NetworkX"],
    githubUrl: "#",
    featured: false,
    icon: "🛡️",
  },
  {
    id: "automation-scripts",
    title: "Automation Toolkit",
    description:
      "Kumpulan script automasi untuk mempermudah workflow development dan deployment.",
    tech: ["Python", "Bash", "Docker", "GitHub Actions"],
    githubUrl: "#",
    featured: false,
    icon: "⚙️",
  },
];
