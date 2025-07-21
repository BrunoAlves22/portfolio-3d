import { About } from "@/components/About";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <FloatingNavbar />

      <Hero />

      <About />
    </div>
  );
}
