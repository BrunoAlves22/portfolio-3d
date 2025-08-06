import { ArrowRight } from "lucide-react";
import { ProjectDetails } from "./project-details";

export function Projects() {
  return (
    <section className="sm:px-10 px-5 lg:px-15 min-h-screen mt-20 md:mt-30">
      <h2 className="font-bold text-3xl md:text-4xl font-poppins text-white">
        Meus Projetos
      </h2>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      <div className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0 font-dm-sans">
        <div>
          <p className="text-2xl text-white">Forest Landing Page</p>

          <div className="flex gap-5 mt-2 text-[#d6995c]">
            <span>NextJS</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </div>
        <button className="text-white flex items-center gap-1 cursor-pointer hover:scale-105 transition-all">
          Ver Mais
          <ArrowRight />
        </button>

        <ProjectDetails />
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
    </section>
  );
}
