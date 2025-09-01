"use client";

import { HeroText } from "./hero-text";
import { ParallaxBackground } from "./parallax-background";
import { useContext } from "react";
import { AnchorContext } from "@/contexts/AnchorContext";

export function Hero() {
  const { homeRef } = useContext(AnchorContext);

  return (
    <section
      ref={homeRef}
      className="flex items-start justify-center md:items-start md:justify-center lg:justify-start min-h-screen overflow-hidden"
    >
      <HeroText />
      <ParallaxBackground />
    </section>
  );
}
