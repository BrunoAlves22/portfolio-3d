import { MenuIcon, XIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface ButtonNavProps {
  onOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

export function ButtonNav({ onOpen, isOpen }: ButtonNavProps) {
  return (
    <>
      <button
        onClick={() => onOpen(!isOpen)}
        className="cursor-pointer sm:hidden flex order-last"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-neutral-400 hover:text-white transition-colors sm:hidden flex" />
        ) : (
          <MenuIcon className="w-6 h-6 text-neutral-400 hover:text-white transition-colors sm:hidden flex" />
        )}
        <span className="sr-only">Abrir menu</span>
      </button>
    </>
  );
}
