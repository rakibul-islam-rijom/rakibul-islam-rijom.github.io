export default function Publications() {
  const publications = [
    {
      title: "Geospatial dataset on deforestation and urban sprawl in Dhaka, Bangladesh: A resource for environmental analysis",
      journal: "Data in Brief (Elsevier)",
      volume: "Volume 61, 2025, Article 111786",
      doi: "10.1016/j.dib.2025.111786",
      link: "https://doi.org/10.1016/j.dib.2025.111786",
      abstract: "Co-authored a peer-reviewed scientific dataset documenting urban sprawl and vegetation dynamics in Dhaka, supporting machine learning models and spatial environmental analysis."
    }
  ];

  return (
    <section id="publications" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <h2 className="text-6xl md:text-[8rem] font-medium tracking-tighter leading-none">
            Publications
          </h2>
          <div className="mt-4 md:mt-0 md:pb-4">
            <p className="text-secondary text-sm tracking-widest uppercase">
              Peer-Reviewed Research
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t border-secondary/20">
          {publications.map((pub, idx) => (
            <div 
              key={idx} 
              className="group py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-16 hover:bg-tertiary/30 transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12"
            >
              
              {/* Left Side: Journal Info & Title */}
              <div className="w-full lg:w-1/2 flex items-start gap-6 md:gap-12">
                <span className="text-xl md:text-3xl text-secondary/40 font-mono mt-1 md:mt-2">
                  0{idx + 1}
                </span>
                
                <div>
                  {/* Journal Outline Badge */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-xs font-semibold tracking-wider text-primary border border-primary/30 px-3 py-1 rounded-full uppercase">
                      {pub.journal}
                    </span>
                    <span className="text-xs text-secondary tracking-wide">{pub.volume}</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-6 leading-tight">
                    {pub.title}
                  </h3>
                  
                  
                </div>
              </div>

              {/* Right Side: Abstract & Link */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
                <p className="text-base md:text-lg text-secondary leading-relaxed mb-8">
                  {pub.abstract}
                </p>

                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group/link relative inline-flex items-center gap-2 text-sm font-medium text-primary pb-1 overflow-hidden"
                >
                  <span>Read Publication (DOI: {pub.doi})</span>
                  <span className="text-xs transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 duration-300">↗</span>
                  
                  {/* Animated underline */}
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-primary translate-y-[1px] group-hover/link:translate-y-0 transition-transform duration-300 ease-out"></span>
                </a>
              </div>

            </div>
          ))}
          {/* Bottom Border */}
          <div className="border-t border-secondary/20 w-full"></div>
        </div>

      </div>

      {/* Background Watermark */}
      <div className="absolute top-0 right-0 text-[40rem] leading-none font-bold text-tertiary -z-0 pointer-events-none select-none opacity-50">
        R
      </div>
    </section>
  );
}