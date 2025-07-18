import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <NavBar />

      <Hero />

      <About />
    </div>
  );
}
