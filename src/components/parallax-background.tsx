"use client";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export function ParallaxBackground() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "50%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  useEffect(() => {
    // Ajuste esse tempo baseado na duração real do seu GIF
    const gifDuration = 4000; // 4 segundos, por exemplo

    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="absolute inset-0">
      {/* Conteúdo com máscara do GIF */}
      <div className="absolute inset-0 mask-[url(/assets/ink.gif)] mask-cover mask-center">
        <div className="relative h-screen overflow-y-hidden">
          {/*Background Sky*/}
          <div className="absolute inset-0 w-full h-screen -z-50 bg-[url(/assets/sky.jpg)] bg-bottom bg-cover" />

          {/*Mountain Layer 3*/}
          <motion.div
            style={{ y: mountain3Y }}
            className="absolute inset-0 -z-40 bg-[url(/assets/mountain-3.png)] bg-bottom bg-cover"
          />

          {/*Planets*/}
          <motion.div
            style={{ x: planetsX }}
            className="absolute inset-0 -z-30 bg-[url(/assets/planets.png)] bg-bottom bg-cover"
          />

          {/*Mountain Layer 2*/}
          <motion.div
            style={{ y: mountain2Y }}
            className="absolute inset-0 -z-20 bg-[url(/assets/mountain-2.png)] bg-bottom bg-cover"
          />

          {/*Mountain Layer 1*/}
          <motion.div
            style={{ y: mountain1Y }}
            className="absolute inset-0 -z-10 bg-[url(/assets/mountain-1.png)] bg-bottom bg-cover"
          />
        </div>
      </div>

      {/* Overlay que aparece após o GIF com animação suave */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: showOverlay ? 1 : 0 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
