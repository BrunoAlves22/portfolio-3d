"use client";

import { FlipWords } from "./flip-words";
import { motion } from "motion/react";

export function HeroText() {
  const words = ["Seguro", "Moderno", "Escalável"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-40 text-center md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex space-y-4">
        <motion.h1
          className="text-4xl font-medium text-white font-poppins"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Olá, eu sou Bruno
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300 font-dm-sans"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Um Desenvolvedor <br /> Dedicado a Criar
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              duration={3000}
              className="text-8xl font-black text-white font-dm-sans"
            />
          </motion.div>
        </div>
        <motion.p
          className="text-4xl font-medium text-neutral-300 font-dm-sans"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          Soluções Web
        </motion.p>
      </div>

      {/* Mobile View */}

      <div className="flex flex-col md:hidden space-y-4">
        <motion.p
          className="text-4xl font-medium font-poppins text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Olá, eu sou Bruno
        </motion.p>
        <div className="">
          <motion.p
            className="text-5xl font-black text-neutral-300 font-dm-sans"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Construindo
          </motion.p>
          <motion.div
            className=""
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              duration={3000}
              className="text-7xl font-bold font-dm-sans text-white"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral-300 font-dm-sans"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Aplicações Web
          </motion.p>
        </div>
      </div>
    </div>
  );
}
