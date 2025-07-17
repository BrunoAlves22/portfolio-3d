"use client";

import { Canvas } from "@react-three/fiber";
import { HeroText } from "./hero-text";
import { ParallaxBackground } from "./parallax-background";
import { Astronaut } from "./astronaut";

export function Hero() {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden">
      <HeroText />
      <ParallaxBackground />

      <figure className="absolute inset-0 h-lvh w-lvh">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Astronaut scale={0.23} position={[0, -1.5, 0]} />
        </Canvas>
      </figure>
    </section>
  );
}
