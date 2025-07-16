"use client";

import { FlipWords } from "./flip-words";
import { motion } from "motion/react";

export function HeroText() {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex space-y-4">
        <motion.h1
          className="text-4xl font-medium text-white font-poppins"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I&#39;m Bruno
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300 font-dm-sans"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
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
          Web Solutions
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
          Hi, I&#39;m Bruno
        </motion.p>
        <div className="">
          <motion.p
            className="text-5xl font-black text-neutral-300 font-dm-sans"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
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
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
}
