"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
export function ButtonNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer sm:hidden flex order-last"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-neutral-400 hover:text-white transition-colors sm:hidden flex" />
        ) : (
          <MenuIcon className="w-6 h-6 text-neutral-400 hover:text-white transition-colors sm:hidden flex" />
        )}
        <span className="sr-only">Abrir menu</span>
      </button>

      {isOpen && (
        <div className="block overflow-hidden text-center sm:hidden order-none z-10">
          <nav className="pb-5">
            <ul className="">
              <li className="">
                <a href="#home">Home</a>
              </li>

              <li className="">
                <a href="#about">About</a>
              </li>

              <li className="">
                <a href="#work">Work</a>
              </li>

              <li className="">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
