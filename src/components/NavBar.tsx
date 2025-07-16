"use client";

import { useState } from "react";
import { ButtonNav } from "./button-nav";
import { NavLink } from "./nav-link";
import { motion } from "motion/react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className={`fixed ${
        isOpen ? "h-screen sm:h-0" : "h-0"
      } inset-x-0 z-20 w-full backdrop-blur-lg bg-neutral-900/60`}
    >
      <div className="mx-auto space-x-4 max-w-7xl">
        <div className="flex items-center justify-between px-3 sm:px-0 py-2">
          <a
            href="#"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white font-poppins"
          >
            Bruno
          </a>

          <ButtonNav isOpen={isOpen} onOpen={setIsOpen} />

          <div className="hidden sm:flex items-center justify-center">
            <NavLink />
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.nav
          className="pb-5 overflow-hidden sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <NavLink />
        </motion.nav>
      )}
    </div>
  );
}
