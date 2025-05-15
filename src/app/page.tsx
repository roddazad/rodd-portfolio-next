import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      {/* Spacer div to ensure content scrolls over the hero section */}
      <div className="h-screen" />
      <div className="relative z-10 bg-gray-900">
        <Projects />
      </div>
    </main>
  );
}
