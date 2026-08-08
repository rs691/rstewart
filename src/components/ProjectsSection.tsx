import { motion } from 'motion/react';
import { FolderGit2, ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    title: "YourOpoly",
    subtitle: "Multi-tenant community rewards & gamified local discovery experience",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/youropoly/id6759983671" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.neil.chamberopoly" },
      { label: "goodlifegames.co", href: "https://goodlifegames.co" },
    ],
    description: "Built a cross-platform mobile system for gamified local discovery and community rewards—users visit local businesses, scan QR codes to earn points, and redeem deals, with map-based discovery, leaderboards, promotions, and prize mechanics—backed by a scalable REST API and structured domain models.",
    bullets: [
      "Location validation at scale: Implemented server-side proximity enforcement using Haversine distance with configurable per-game radii.",
      "Multi-tenant architecture: Designed organization-scoped data models (games, businesses, memberships) with RBAC-style access control.",
      "Identity & real-time systems: Integrated OAuth providers (Google, Apple, Microsoft) with JWT-based session management; leveraged Socket.io for real-time client coordination."
    ],
    tags: ["Flutter", "Node.js", "Express", "Socket.io", "Redis", "OAuth"]
  },
  {
    title: "Multi-Product Admin Platform",
    subtitle: "Centralized Management & Role-Based Access",
    links: [{ label: "AWS" }],
    description: "Architected a role-based admin platform serving two distinct products (YourOpoly and GLG-Bingo) utilizing shared backend services.",
    bullets: [
      "Implemented per-product and per-tenant control panels to ensure granular access management and data isolation.",
      "Separated a privileged administrator layer from scoped self-service mini-dashboards.",
      "Empowered app owners to update businesses, logos, timers, and mini-games without touching critical systems."
    ],
    tags: ["Node.js", "React", "Next.js", "MySQL", "AWS"]
  },
  {
    title: "E-Commerce Application",
    subtitle: "Full-stack storefront",
    links: [{ label: "Vercel" }],
    description: "Built Next.js storefront with server-side rendering, integrated Stripe payment processing, and PostgreSQL database.",
    bullets: [
      "Implemented session management and optimistic UI updates for improved user experience."
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Stripe", "Vercel"]
  },
  {
    title: "Django Reservation System",
    subtitle: "High-traffic booking platform",
    links: [{ label: "Python Anywhere" }],
    description: "Developed high-traffic booking platform with HTMX for dynamic UI updates.",
    bullets: [
      "Designed conflict resolution logic for concurrent bookings.",
      "Implemented automated email notifications."
    ],
    tags: ["Django", "Python", "HTMX"]
  },
  {
    title: "Operational Efficiency & Support Suite",
    subtitle: "Internal Operations & Safety Tools",
    links: [{ label: "Azure" }],
    description: "Developed internal business applications using .NET technologies (C# and Blazor) with SQL Server, deployed through Azure CI/CD pipelines.",
    bullets: [
      "Safety Compliance & CMS Integration: Enabled real-time hazard reporting for field installers, achieving full adoption as a daily operational tool.",
      "Estimation Software Enhancement: Developed a dynamic pricing and service catalog leveraging SQL Server and external APIs.",
      "Service Desk Application: Engineered a Blazor-based help desk platform with full CRUD functionality."
    ],
    tags: ["C#", "Blazor", ".NET", "SQL Server", "Azure", "CI/CD"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 border-t border-white/5 relative overflow-hidden group scroll-mt-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-emerald-500/40"></span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-500/60 font-medium">
              04 // SELECTED_WORKS
            </span>
            <span className="h-px w-8 bg-emerald-500/40"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">PROJECTS</h2>
          <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-6"></div>
          <p className="max-w-2xl text-white/50 font-light text-lg italic">
            "A showcase of end-to-end platforms, multi-tenant architectures, and operational tools."
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group/card relative p-5 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover/card:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Layers className="w-3.5 h-3.5 text-emerald-500/50" />
                      <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                        {project.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.links.map((link, idx) => {
                  const className = "flex items-center gap-1.5 text-xs font-mono text-emerald-500/80 uppercase tracking-widest bg-emerald-500/5 px-2 py-1 rounded-md border border-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors";
                  if (link.href) {
                    return (
                      <a
                        key={idx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <span key={idx} className={className}>
                      {link.label}
                    </span>
                  );
                })}
              </div>

              <p className="text-white/70 font-light leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-3 mb-8 grow">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 text-white/60 font-light text-sm leading-relaxed group/item">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/30 group-hover/item:bg-emerald-500/80 transition-colors shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs font-mono text-white/40 uppercase tracking-widest hover:border-emerald-500/30 hover:text-emerald-400/80 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
