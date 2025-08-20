"use client";

import Image from "next/image";
import { Card } from "./card";
import { useRef } from "react";
import { Globe } from "./globe";
import { CopyEmailButton } from "./copy-email-button";
import { Frameworks } from "./frameworks";

export function About() {
  const grid2ContainerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="sm:px-10 px-5 lg:px-15 min-h-screen mt-20 md:mt-30">
      <h2 className="font-bold text-3xl md:text-4xl text-white">Sobre Mim</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end bg-gradient-to-b from-[#282b4b] to-[#1f1e39] rounded-2xl row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <Image
            src="/assets/coding-pov.png"
            alt="Coding POV"
            fill
            className="absolute -right-[5rem] scale-[1.75] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] object-contain"
          />
          <div className="bg-gradient-to-t from-black/50 to-black/0 absolute z-[1] w-full h-full" />

          <div className="z-10 text-white font-poppins p-6">
            <p className="mt-2 mb-2 text-xl">Olá, sou Bruno Alves</p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty">
              Sou um desenvolvedor web apaixonado por criar soluções digitais
              inovadoras. Com experiência em tecnologias modernas, busco sempre
              entregar projetos de alta qualidade e desempenho.
            </p>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200 bg-gradient-to-b from-[#282b4b] to-[#1f1e39] rounded-2xl">
          <div
            ref={grid2ContainerRef}
            className="flex items-center justify-center h-full w-full"
          >
            <Card
              text="React"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2ContainerRef}
            />
            <Card
              text="JavaScript"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2ContainerRef}
            />

            <Card
              text="NextJS"
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              containerRef={grid2ContainerRef}
            />

            <Card
              text="TypeScript"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2ContainerRef}
            />
            <Card
              text="TailwindCSS"
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              containerRef={grid2ContainerRef}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="p-6 bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] rounded-2xl row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="z-10 w-[50%]">
            <p className="mt-2 mb-2 text-xl font-poppins text-white">
              Time Zone
            </p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty font-dm-sans">
              I&#39;m based in Mars, and open to remote work worldwide
            </p>
          </div>

          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="p-6 bg-gradient-to-b from-blue-800 to-blue-700 rounded-2xl row-span-1 md:col-span-2 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center mt-2 mb-2 text-xl font-poppins text-white">
              Entre em contato
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="bg-gradient-to-b from-[#282b4b] to-[#1f1e39] rounded-2xl row-span-1 md:col-span-4 h-[15rem] md:h-full overflow-hidden hover:-translate-y-1 duration-200">
          <div className="z-10 text-white font-poppins w-full p-6">
            <p className="mt-2 mb-2 text-xl">Tech Stack</p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty">
              Tecnologias e Frameworks que utilizo:
            </p>
          </div>
          <div className="mb-5">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}
