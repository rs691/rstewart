import { motion } from "motion/react";
import { Code2, Globe, Smartphone, BrainCircuit } from "lucide-react";

const SKILLS = [
  { name: "AI Agent Orchestration", icon: BrainCircuit, color: "text-emerald-400" },
  { name: "Software Development", icon: Code2, color: "text-emerald-400" },
  { name: "Web Development", icon: Globe, color: "text-emerald-400" },
  { name: "Mobile Development", icon: Smartphone, color: "text-emerald-400" },
];

const TECH_CATEGORIES = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C#", "Dart", "TypeScript", "JavaScript", "PHP", "SQL", "HTML/CSS"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Flutter", "Vue.js", "HTMX", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django", "Laravel", "ASP.NET", "REST APIs", "WebSockets / Socket.io"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (ECS, Lambda, RDS)", "Azure", "Docker", "GitHub Actions", "CI/CD", "Vercel"]
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "Firestore", "Supabase"]
  },
  {
    title: "AI Engineering",
    skills: ["Gemini API", "Multi-agent orchestration", "Event-driven AI systems", "LLM integration"]
  },
  {
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Flutter Test", "Postman"]
  }
];

export const SkillShowcase = () => {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* High-level Skill Domains */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className="group relative flex flex-col items-center p-5 sm:p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/[0.08]"
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className={`p-4 rounded-xl bg-white/5 mb-4 group-hover:ring-2 group-hover:ring-emerald-500/50 transition-all`}>
              <skill.icon className={`w-8 h-8 ${skill.color}`} />
            </div>
            
            <h3 className="text-lg font-medium tracking-tight text-white mb-2 italic">
              {skill.name}
            </h3>
            
            <div className="h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-300 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* Detailed Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {TECH_CATEGORIES.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-sm font-mono text-white/60 uppercase tracking-widest border-b border-white/10 pb-2">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-sm md:text-base font-light text-white/75 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
