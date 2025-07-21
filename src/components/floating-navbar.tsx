"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const FloatingNavbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="fixed inset-x-0 mx-auto flex w-fit rounded-full backdrop-blur-lg bg-neutral-800/30 p-1 z-20"
    >
      <Tab setPosition={setPosition}>Início</Tab>
      <Tab setPosition={setPosition}>Sobre</Tab>
      <Tab setPosition={setPosition}>Projetos</Tab>
      <Tab setPosition={setPosition}>Contato</Tab>

      <Cursor position={position} />
    </ul>
  );
};

type TabProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
};

const Tab = ({ children, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
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
