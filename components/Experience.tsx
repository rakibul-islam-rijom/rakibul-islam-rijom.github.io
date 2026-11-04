const timeline = [
  {
    role: "Junior Software Engineer",
    company: "Flyinfosoft Technologies Limited",
    period: "Jan 2025 – Present",
    location: "Dhaka, Bangladesh",
    description: "Developing responsive web applications, reusable administrative components, financial ERP modules, and content portals using Next.js, React, Tailwind CSS, Material UI, and REST APIs."
  },
  {
    role: "Research Assistant Intern",
    company: "American International University–Bangladesh",
    period: "Jan 2024 – May 2024",
    location: "Dhaka, Bangladesh",
    description: "Conducted dataset verification, data quality auditing, image/text labeling for machine learning applications, and co-authored spatial analytical datasets."
  },
  {
    role: "B.Sc. in Computer Science & Engineering",
    company: "American International University–Bangladesh",
    period: "2020 – 2024",
    location: "CGPA: 3.54 / 4.00",
    description: "Graduated with honors. Completed core engineering coursework in software architecture, web technologies, algorithm design, and data structures."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-tertiary relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <h2 className="text-6xl md:text-[8rem] font-medium tracking-tighter leading-none">
            Experience
          </h2>
          <div className="mt-4 md:mt-0 md:pb-4">
            <p className="text-secondary text-sm tracking-widest uppercase">
              Career & Education
            </p>
          </div>
        </div>

        {/* Editorial Timeline List */}
        <div className="flex flex-col border-t border-secondary/20">
          {timeline.map((item, idx) => (
            <div 
              key={idx} 
              className="group border-b border-secondary/20 py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12 hover:bg-white/40 transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12"
            >
              
              {/* 1. Left: Period & Location */}
              <div className="w-full lg:w-1/4 flex flex-col">
                <span className="text-sm font-medium tracking-widest text-primary uppercase mb-2">
                  {item.period}
                </span>
                <span className="text-sm text-secondary">
                  {item.location}
                </span>
              </div>

              {/* 2. Middle: Role & Company */}
              <div className="w-full lg:w-1/3 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 group-hover:text-primary transition-colors leading-snug">
                  {item.role}
                </h3>
                <p className="text-base text-secondary font-medium">
                  {item.company}
                </p>
              </div>

              {/* 3. Right: Description */}
              <div className="w-full lg:w-5/12 flex items-center">
                <p className="text-base md:text-lg text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Background Watermark */}
      <div className="absolute top-0 right-0 text-[40rem] leading-none font-bold text-white/40 -z-0 pointer-events-none select-none opacity-60">
        E
      </div>
    </section>
  );
}