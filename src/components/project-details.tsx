import { X } from "lucide-react";

export function ProjectDetails() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-neutral-800 to-neutral-900 border-white/10">
        <button className="absolute p-2 rounded-sm top-5 right-5 bg-neutral-800 hover:bg-neutral-700 transition-colors text-white cursor-pointer">
          <X />
        </button>
      </div>
    </div>
  );
}
