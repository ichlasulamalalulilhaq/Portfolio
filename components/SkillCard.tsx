interface SkillCardProps {
  category: string;
  items: readonly string[];
  size?: "default" | "wide" | "tall";
}

const categoryConfig = {
  "Full-Stack Development": {
    icon: "💻",
    color: "from-violet-500 to-fuchsia-500",
    bg: "bg-white/5",
    text: "text-violet-400",
  },

  "Data Science": {
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-white/5",
    text: "text-blue-400",
  },

  "Artificial Intelligence": {
    icon: "🧠",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-white/5",
    text: "text-emerald-400",
  },

  "Cloud & Tools": {
    icon: "☁️",
    color: "from-amber-500 to-orange-500",
    bg: "bg-white/5",
    text: "text-amber-400",
  },
};

export default function SkillCard({ category, items, size = "default" }: SkillCardProps) {
  const config = categoryConfig[category as keyof typeof categoryConfig] ?? { icon: "💡", color: "from-gray-400 to-gray-500", bg: "bg-white/5", text: "text-gray-400" };

  return (
    <div className={`group relative rounded-[28px] ${config.bg} border border-white/10 backdrop-blur-md p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1 hover:border-white/20 ${size === "wide" ? "sm:col-span-2" : size === "tall" ? "sm:row-span-2" : ""
      }`}>
      {/* Hover glow */}
      <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition-opacity duration-700`} />

      <div className="relative">
        {/* Icon */}
        <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-500 w-fit">
          {config.icon}
        </div>

        {/* Category */}
        <h3 className={`text-lg font-bold ${config.text} mb-1`}>
          {category}
        </h3>
        <p className="text-xs text-white/50 font-medium mb-5">{items.length} technologies</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
