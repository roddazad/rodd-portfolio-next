import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      {/* Spacer div to ensure content scrolls over the hero section */}
      <div className="h-screen" />
      <div className="relative z-10 bg-gray-900 pt-20">
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
