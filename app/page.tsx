import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-tertiary min-h-screen text-slate-900 selection:bg-primary selection:text-white">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Publications />
      <Experience />
      <Footer />
    </main>
  );
}