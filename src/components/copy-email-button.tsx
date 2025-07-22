"use client";

import { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

export function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("example@example.com").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight font-dm-sans bg-black/60 hover:bg-black/80 transition-colors w-[12rem] cursor-pointer overflow-hidden"
    >
      <p className="flex items-center justify-center gap-2 text-white">
        {isCopied ? (
          <CopyCheck className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        {isCopied ? "Copied!" : "Copy Email Address"}
      </p>
    </button>
  );
}
