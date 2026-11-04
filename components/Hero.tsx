import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden">

            {/* Top Navigation Overlay (Simplified for example) */}
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 md:px-12 z-10 text-sm">
                <div className="font-bold tracking-tighter text-lg">RIJOM</div>
                <div className="hidden md:flex space-x-8 text-secondary">
                    <a href="#about" className="hover:text-primary transition-colors">About Me</a>
                    <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                    <a href="#publications" className="hover:text-primary transition-colors">Publications</a>
                </div>
                <a href="#contact" className="flex items-center gap-1 hover:text-secondary transition-colors">
                    Let's Connect <span className="text-xs">↗</span>
                </a>
            </nav>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl mx-auto relative z-0 mt-12">

                {/* Left Side: Text & Stats */}
                <div className="w-full md:w-1/2 flex flex-col h-full justify-between space-y-16">

                    {/* Vertical Label */}
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
                        <p className="vertical-text text-xs text-secondary tracking-widest uppercase">Software Engineer</p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-12 pl-0 md:pl-12">
                        <div>
                            <p className="text-3xl font-light">+{new Date().getFullYear() - 2024}</p>
                            <p className="text-xs text-secondary">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-light">+5</p>
                            <p className="text-xs text-secondary">Enterprise Projects</p>
                        </div>
                    </div>

                    {/* Main Title */}
                    <div className="pl-0 md:pl-12">
                        <h1 className="text-7xl md:text-[10rem] font-medium tracking-tighter leading-none -ml-2 md:-ml-4 text-primary">
                            Hello
                        </h1>
                        <p className="text-sm text-secondary mt-4 max-w-xs">
                            — It's Rakibul Islam Rijom, a Software Engineer based in Bangladesh.
                        </p>
                    </div>

                    <div className="pl-0 md:pl-12 flex items-end justify-between mt-12">
                        <p className="text-xs text-secondary">2024</p>
                        <a href="#about" className="text-xs flex items-center gap-2 hover:text-secondary transition-colors">
                            Scroll down <span>↓</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 relative">
                    {/* Replace with your actual photo */}
                    <div className="relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] bg-secondary/20 rounded-t-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Placeholder for your image. Add your photo to public/ and change src */}
                        <Image
                            src="/rijom.jpg"
                            alt="Rijom"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}