/**
 * ========================================
 * PERSONAL PROFILE DATA
 * ========================================
 * Edit this file to update your personal information
 * across the entire website. This is the single source
 * of truth for all your profile data.
 */

export const profile = {
  /** Your display name */
  name: "Iclasul Amal Ichlasul Amal Al Ulil Haq",

  /** Your full name (used in meta tags & heading) */
  fullName: "Iclasul Amal Al Ulil Haq",

  /** Your title/role */
  title: "Data Science Undergraduate",

  /** A short, catchy description */
  tagline: "Data Science Student. Passionate about machine learning, engineering, and building things that matter.",

  /** Longer bio for the About page */
  bio: [
    "Hi, I'm Ichlasul Amal Al Ulil Haq. I'm currently pursuing a degree in Data Science at Universitas Sebelas Maret. My core interests lie at the intersection of artificial intelligence and practical software engineering.",
    "Lately, I've been focused on bridging the gap between data models and user interfaces, actively developing my skills in Full-Stack Development, Machine Learning, and NLP.",
    "Outside of academics, I spend my time contributing to open-source projects, experimenting with new web frameworks, and refining my problem-solving skills."
  ],

  /** Profile image path (put your photo in /public/images/) */
  avatar: "/images/avatar_transparent.png",

  /** Social media & contact links */
  socials: {
    github: "https://github.com/ichlasulamalalulilhaq",
    linkedin: "https://www.linkedin.com/in/ichlasul-amal-al-ulil-haq-8ab159288/",
    instagram: "https://www.instagram.com/ichlasulll_?igsh=c2RiMDlqcW1hMGtr",
    email: "ichlasridho44@gmail.com",
  },

  /** Skills grouped by category */
  skills: [
    {
      category: "Data Science",
      items: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Data Analysis",
        "Data Visualization",
      ],
    },
    {
      category: "Artificial Intelligence",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "Model Development",
      ],
    },
    {
      category: "Full-Stack Development",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Cloud & Tools",
      items: [
        "Microsoft Azure",
        "Git",
        "Linux",
        "VS Code",
        "SQL",
      ],
    },
  ],

  /** Education / experience timeline */
  timeline: [
    {
      year: "2023 — Present",
      title: "Data Science Undergraduate",
      description:
        "Pursuing a Bachelor's degree in Data Science at Universitas Sebelas Maret, with a strong interest in Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, Data Engineering, and Full-Stack Development.",
    },
    {
      year: "2023",
      title: "Programming Foundations",
      description:
        "Began my programming journey by learning C and R, developing a solid foundation in algorithms, problem-solving, and data analysis.",
    },
    {
      year: "2024",
      title: "Expanding Software Development Skills",
      description:
        "Enhanced programming expertise through C++, Java, Python, and SQL, gaining experience in software development, database management, and data processing.",
    },
    {
      year: "2024 — 2025",
      title: "Leadership and Organizational Experience",
      description:
        "Actively participated in student organizations, including KOPMA and KRNH-46, strengthening leadership, communication, teamwork, and project management skills.",
    },
    {
      year: "2025",
      title: "Web, Mobile, Cloud, and AI Development",
      description:
        "Explored modern web and mobile application development using Node.js, React, Expo, and Flutter. Additionally, studied Microsoft Azure, Machine Learning, and Artificial Intelligence to broaden technical expertise.",
    },
    {
      year: "2026",
      title: "MBKM Program and Advanced AI Studies",
      description:
        "Participated in the MBKM Grant Program, including an internship and community service project at Yogyakarta Central Post Office. Further expanded knowledge in Next.js, Deep Learning, and Natural Language Processing (NLP).",
    },
  ],
} as const;

export type Profile = typeof profile;
