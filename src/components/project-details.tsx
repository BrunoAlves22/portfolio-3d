import { X } from "lucide-react";
import Image from "next/image";

export function ProjectDetails() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-neutral-800 to-neutral-900 border-white/10">
        <button className="absolute p-2 rounded-sm top-5 right-5 bg-neutral-800 hover:bg-neutral-700 transition-colors text-white cursor-pointer">
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
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-neutral-400">Criado por:</span>
            <span className="text-sm font-semibold text-white">
              Bruno Alves
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
