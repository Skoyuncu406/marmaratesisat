import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

export default function HomePage() {
  return (
    <main className="w-full min-w-0 overflow-x-clip">
      <Hero />
      <About />
    </main>
  );
}
