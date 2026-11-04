export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Huge Section Title */}
        <h2 className="text-6xl md:text-[8rem] font-medium tracking-tighter mb-16 relative z-10">
          About
        </h2>

        <div className="flex flex-col md:flex-row gap-16 relative z-10">
          {/* Left Side: Subheading */}
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">
              The Journey
            </h3>
            <p className="text-secondary leading-relaxed">
              From dreaming of being a cowboy to architecting scalable web applications.
            </p>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-2/3 space-y-6 text-lg text-secondary max-w-2xl">
            <p>
              As a kid, you could usually find me fascinated by cows, dreaming of growing up to become a cowboy. Over time, that curiosity shifted toward how things worked under the hood—leading me down a path of problem-solving, code, and technology.
            </p>
            <p>
              Today, I’ve traded the cowboy boots for a keyboard. I completed my Bachelor of Science in Computer Science and Engineering from American International University–Bangladesh (AIUB) and now work as a Software Engineer at Flyinfosoft Technologies Limited. I specialize in building responsive, scalable web applications using Next.js, React.js, TypeScript, and Tailwind CSS.
            </p>
            <p>
              Beyond software engineering, I am passionate about research and continuous learning—proudly co-authoring a geospatial data study published in <em>Data in Brief</em> (2025).
            </p>
            <p>
              When I’m not writing clean code, you’ll find me on the pitch or watching a match. Football and cricket keep me energized and focused.
            </p>
          </div>
        </div>
      </div>
      
      {/* Background Watermark (Optional, mimics the faded 'A' in your image) */}
      <div className="absolute top-0 right-0 text-[40rem] leading-none font-bold text-tertiary -z-0 pointer-events-none select-none opacity-50">
        R
      </div>
    </section>
  );
}