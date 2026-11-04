const skillCategories = [
  {
    category: "Frontend Engineering",
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Material UI (MUI)", "HTML5/CSS3"]
  },
  {
    category: "Backend & APIs",
    skills: ["ASP.NET Core", "ASP.NET MVC", "C#", "Python", "REST APIs", "Node.js Basics"]
  },
  {
    category: "Architecture & Security",
    skills: ["Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Role-Based Access Control (RBAC)", "Context API", "SEO Optimization"]
  }
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Giant Section Title */}
        <h2 className="text-6xl md:text-[8rem] font-medium tracking-tighter mb-24 relative z-10">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative z-10">
          {skillCategories.map((cat, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-baseline justify-between border-b border-secondary/20 pb-4 mb-8">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  {cat.category}
                </h3>
                <span className="text-sm text-secondary font-mono">
                  0{i + 1}
                </span>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {cat.skills.map((skill, index) => (
                  <li 
                    key={skill} 
                    className="flex items-center gap-4 text-secondary group cursor-default"
                  >
                    {/* Small decorative dot that turns primary on hover */}
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/30 group-hover:bg-primary transition-colors duration-300"></span>
                    <span className="text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Background Watermark (Optional, to match the 'About' section) */}
      <div className="absolute top-0 right-0 text-[30rem] leading-none font-bold text-tertiary -z-0 pointer-events-none select-none opacity-40">
        S
      </div>
    </section>
  );
}