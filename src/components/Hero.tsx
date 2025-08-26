"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { HeroText } from "./hero-text";
import { ParallaxBackground } from "./parallax-background";
import { Astronaut } from "./astronaut";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";
import { Suspense, useContext } from "react";
import { Loader } from "./loader";
import { AnchorContext } from "@/contexts/AnchorContext";

export function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const { homeRef } = useContext(AnchorContext);

  return (
    <section
      ref={homeRef}
      className="flex items-start justify-center md:items-start md:justify-center lg:justify-start min-h-screen overflow-hidden"
    >
      <HeroText />
      <ParallaxBackground />

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.22 : undefined}
                position={isMobile ? [0, -0.1, 0] : undefined}
              />
            </Float>

            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}
