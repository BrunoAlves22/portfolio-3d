import { ArrowUpRightFromSquare, X } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";

interface ProjectDetailsProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen?: boolean;
}

export function ProjectDetails({ setIsOpen, isOpen }: ProjectDetailsProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-neutral-800 to-neutral-900 border-white/10"
      >
        <button
          className="absolute p-2 rounded-sm top-5 right-5 bg-neutral-800/50 hover:bg-neutral-800 transition-colors text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <X />
        </button>
        <Image
          src="/assets/img-landing.png"
          alt="Project Image"
          width={700}
          height={500}
          className="rounded-t-2xl w-full object-cover"
        />
        <div className="p-6 text-white font-dm-sans">
          <h5 className="font-poppins mb-2 text-2xl font-bold">
            Forest Landing Page
          </h5>
          <p className="text-sm text-neutral-400 font-normal">
            A beautiful landing page showcasing a forest theme.
          </p>
          <div className="flex items-center justify-between gap-2 mt-2">
            <div>
              <span className="text-sm text-neutral-400">Criado por: </span>
              <span className="text-sm font-semibold text-white">
                Bruno Alves
              </span>
            </div>

            <a
              href="https://github.com/BrunoAlves"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm-sans bg-neutral-800 hover:bg-neutral-700 transition-colors text-white px-4 py-2 rounded-md text-sm flex items-center"
            >
              Ver projeto
              <ArrowUpRightFromSquare className="inline ml-1.5 size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
