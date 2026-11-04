const professionalProjects = [
  {
    title: "News Portal & CMS",
    tech: ["Next.js", "React", "MUI", "REST", "SSR"],
    points: [
      "Developed a news platform with a dedicated administrative dashboard.",
      "Implemented Server-Side Rendering (SSR) for SEO and performance.",
      "Built CRUD features with form validation and reusable UI components."
    ]
  },
  {
    title: "Microfinance ERP Solution",
    tech: ["Next.js", "React", "MUI", "REST"],
    points: [
      "Developed ERP modules for loan distribution and installment tracking.",
      "Built financial dashboards and borrower analytics interfaces.",
      "Implemented authentication and Role-Based Access Control (RBAC)."
    ]
  },
  {
    title: "NGO Management Portal",
    tech: ["Next.js", "Tailwind CSS", "REST", "SSG"],
    points: [
      "Designed administrative controls and dashboards for publishing events.",
      "Implemented Static Site Generation (SSG) for optimized delivery.",
      "Integrated APIs for content management."
    ]
  },
  {
    title: "Guest House Management",
    tech: ["Next.js", "MUI", "Context API"],
    points: [
      "Built booking workflows and room availability interfaces.",
      "Integrated digital food ordering functionality into the system.",
      "Created responsive and intuitive user interfaces."
    ]
  },
  {
    title: "E-commerce Application",
    tech: ["Next.js", "React", "Tailwind CSS", "REST"],
    points: [
      "Developed shopping cart and checkout workflows.",
      "Built administrative dashboards for inventory management.",
      "Implemented dynamic routing and SEO-oriented page structures."
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-tertiary relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive Section Title */}
        <div className="flex items-end justify-between mb-24">
          <h2 className="text-6xl md:text-[8rem] font-medium tracking-tighter leading-none">
            Projects
          </h2>
          <p className="hidden md:block text-secondary text-sm tracking-widest uppercase mb-4">
            Selected Work
          </p>
        </div>

        {/* Project List */}
        <div className="flex flex-col">
          {professionalProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="group border-t border-secondary/20 py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 hover:bg-white/50 transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12"
            >
              
              {/* Left Side: Number & Title */}
              <div className="w-full lg:w-1/2 flex items-start gap-6 md:gap-12">
                <span className="text-xl md:text-3xl text-secondary/40 font-mono mt-1 md:mt-2">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Tech Stack Tags (Minimalist) */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium text-secondary tracking-wider uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Bullet Points */}
              <div className="w-full lg:w-1/2 flex items-center">
                <ul className="space-y-4">
                  {project.points.map((point, i) => (
                    <li key={i} className="text-base md:text-lg text-secondary leading-relaxed flex items-start gap-4">
                      <span className="text-primary/30 mt-2.5 text-[8px]">■</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
          {/* Bottom Border for the last item */}
          <div className="border-t border-secondary/20 w-full"></div>
        </div>

      </div>

      {/* Background Watermark */}
      <div className="absolute top-0 right-0 text-[40rem] leading-none font-bold text-white/50 -z-0 pointer-events-none select-none opacity-50">
        P
      </div>
    </section>
  );
}