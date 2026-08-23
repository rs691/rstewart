import { motion } from 'motion/react';
import { FolderGit2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "YourOpoly",
    subtitle: "Community rewards & local discovery",
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/youropoly/id6759983671" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.neil.chamberopoly" },
      { label: "Website", href: "https://goodlifegames.co" },
    ],
    description: "A mobile app that rewards people for visiting local businesses. Users explore a map, check in, earn points, and redeem deals — with leaderboards and promotions to keep things fun.",
    bullets: [
      "Built for both iPhone and Android and published on the major app stores.",
      "Designed so each community or organization can run its own version without mixing data.",
      "Includes sign-in options, live updates, and tools that help the team understand how the app is being used.",
    ],
  },
  {
    title: "Multi-Product Admin Platform",
    subtitle: "One dashboard, multiple apps",
    links: [],
    description: "A central admin site for managing two related products from one place — with different access levels for owners, staff, and everyday users.",
    bullets: [
      "Gives full administrators control over settings while letting app owners update their own content safely.",
      "Keeps each product and tenant's information separated.",
      "Lets owners update businesses, branding, timers, and mini-games without touching core systems.",
    ],
  },
  {
    title: "E-Commerce Application",
    subtitle: "Online storefront",
    links: [],
    description: "A modern online shop with fast page loads, secure card payments, and a cart that remembers what you added.",
    bullets: [
      "Smooth checkout flow with a polished browsing experience.",
    ],
  },
  {
    title: "Django Reservation System",
    subtitle: "Booking & scheduling",
    links: [],
    description: "A reservation app that prevents double-bookings and sends automatic confirmation emails.",
    bullets: [
      "Handles overlapping requests cleanly so two people can't book the same slot.",
      "Updates the page dynamically without full reloads for a snappier feel.",
    ],
  },
  {
    title: "Operational Efficiency & Support Suite",
    subtitle: "Internal tools for the field team",
    links: [],
    description: "A set of internal tools for safety reporting, pricing estimates, and IT support — built for people who work outside a traditional office.",
    bullets: [
      "Let field staff report hazards from the job site in real time.",
      "Helped the team generate quotes and manage service requests in one place.",
      "Became part of daily operations across the company.",
    ],
  },
  {
    title: "Multi-Tenant Task Board API",
    subtitle: "Shared boards with private data",
    links: [
      { label: "Live Demo", href: "https://multi-tenant-task-board-rs691.azurewebsites.net" },
      { label: "GitHub", href: "https://github.com/rs691/multi-tenant-task-board" },
    ],
    description: "A small task board API where each organization only sees its own data — the same isolation pattern used in larger production apps, rebuilt here as a clear example.",
    bullets: [
      "Keeps every team's tasks private so one group can't see another group's work.",
      "Uses secure sign-in tokens so access rules follow the user through every request.",
      "Automatically builds, tests, and deploys to Azure whenever code is pushed.",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 border-t border-white/5 relative overflow-hidden group scroll-mt-24">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
              04 // PROJECTS
            </span>
            <span className="h-px w-8 bg-emerald-500/40"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">Projects</h2>
          <div className="h-1.5 w-16 bg-emerald-500 rounded-full mb-6"></div>
          <p className="max-w-2xl text-white/75 font-light text-base md:text-lg leading-relaxed">
            Apps and tools I've built — from public mobile products to internal systems teams rely on every day.
          </p>
        </motion.div>

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
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover/card:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/60 mt-1">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-emerald-400/90 bg-emerald-500/5 px-3 py-1.5 rounded-md border border-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-5">
                {project.description}
              </p>

              <ul className="space-y-3 grow">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 text-base text-white/75 font-light leading-relaxed group/item">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover/item:bg-emerald-500/80 transition-colors shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
