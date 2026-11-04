export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24">
          
          {/* Left: Main Call to Action */}
          <div className="w-full md:w-2/3">
            <p className="text-secondary text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-secondary/50 block"></span> Let's collaborate
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-medium tracking-tighter leading-[0.95]">
              Let's build <br /> something great.
            </h2>
          </div>

          {/* Right: Direct Contact & Location */}
          <div className="w-full md:w-1/3 flex flex-col gap-12 md:pb-4">
            <div>
              <p className="text-secondary text-[10px] uppercase tracking-widest mb-3">Primary Email</p>
              <a 
                href="mailto:rakibulislamrijom@gmail.com" 
                className="group relative inline-block text-xl md:text-2xl font-medium text-white overflow-hidden"
              >
                rakibulislamrijom@gmail.com
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white translate-y-[3px] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              </a>
            </div>

            <div className="flex gap-12">
              <div>
                <p className="text-secondary text-[10px] uppercase tracking-widest mb-3">Phone</p>
                <a 
                  href="tel:+8801571219976" 
                  className="text-white hover:text-secondary transition-colors duration-300 text-sm"
                >
                  +880 1571219976
                </a>
              </div>
              <div>
                <p className="text-secondary text-[10px] uppercase tracking-widest mb-3">Base</p>
                <p className="text-white text-sm">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Links & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-secondary text-xs">
            © {new Date().getFullYear()} Rakibul Islam Rijom.
          </p>
          
          <div className="flex gap-8 text-xs font-medium uppercase tracking-wider">
            <a 
              href="https://www.linkedin.com/in/rakibul-islam-rijom-/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-secondary transition-colors duration-300 flex items-center gap-1"
            >
              LinkedIn <span className="text-[10px]">↗</span>
            </a>
            <a 
              href="https://github.com/Rakibul-Islam-Rijom" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-secondary transition-colors duration-300 flex items-center gap-1"
            >
              GitHub <span className="text-[10px]">↗</span>
            </a>
            <a 
              href="https://doi.org/10.1016/j.dib.2025.111786" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:text-secondary transition-colors duration-300 flex items-center gap-1"
            >
              Publication <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Background Watermark to match the rest of the site */}
      <div className="absolute -bottom-24 -right-12 text-[30rem] leading-none font-bold text-white/[0.02] -z-0 pointer-events-none select-none">
        R
      </div>
    </footer>
  );
}