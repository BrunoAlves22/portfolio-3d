"use client";

import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnchorContext } from "@/contexts/AnchorContext";

export const FloatingNavbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="fixed inset-x-0 mx-auto flex w-fit rounded-full backdrop-blur-lg bg-neutral-200/10 p-1 z-20 **:select-none"
    >
      <Tab setPosition={setPosition} section="home">
        Início
      </Tab>
      <Tab setPosition={setPosition} section="about">
        Sobre
      </Tab>
      <Tab setPosition={setPosition} section="projects">
        Projetos
      </Tab>
      <Tab setPosition={setPosition} section="contact">
        Contato
      </Tab>

      <Cursor position={position} />
    </motion.ul>
  );
};

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  section: "home" | "about" | "projects" | "contact";
};

const Tab = ({ children, setPosition, section }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const { homeRef, aboutRef, projectsRef, contactRef } =
    useContext(AnchorContext);

  const handleClick = () => {
    let target: HTMLDivElement | null = null;

    if (section === "home") target = homeRef.current;
    if (section === "about") target = aboutRef.current;
    if (section === "projects") target = projectsRef.current;
    if (section === "contact") target = contactRef.current;

    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li
      ref={ref}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base font-dm-sans"
    >
      {children}
    </li>
  );
};

type CursorProps = {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-neutral-200 md:h-12"
    />
  );
};
