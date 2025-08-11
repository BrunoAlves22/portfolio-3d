"use client";

import { ArrowRight } from "lucide-react";
import { ProjectDetails } from "./project-details";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Projects() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative sm:px-10 px-5 lg:px-15 min-h-screen mt-20 md:mt-30"
    >
      <h2 className="font-bold text-3xl md:text-4xl font-poppins text-white">
        Meus Projetos
      </h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <div
        onMouseEnter={() => setPreviewImage("/assets/img-landing.png")}
        onMouseLeave={() => setPreviewImage(null)}
        className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0 font-dm-sans"
      >
        <div>
          <p className="text-2xl text-white">Forest Landing Page</p>

          <div className="flex gap-5 mt-2 text-[#d6995c]">
            <span>NextJS</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </div>
        <button
          className="text-white flex items-center gap-1 cursor-pointer hover:scale-105 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          Ver Mais
          <ArrowRight />
        </button>

        {isOpen && <ProjectDetails setIsOpen={setIsOpen} isOpen={isOpen} />}
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {previewImage && !isOpen && (
        <motion.img
          src={previewImage}
          style={{ x: springX, y: springY }}
          className="fixed top-0 left-0 z-50 object-contain h-64 rounded-lg shadow-lg pointer-events-none w-96"
        />
      )}
    </section>
  );
}
