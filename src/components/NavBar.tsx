import { ButtonNav } from "./button-nav";
import { NavLink } from "./nav-link";

export function NavBar() {
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-neutral-950/40">
      <div className="mx-auto space-x-4 max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Bruno
          </a>

          <ButtonNav />
          <nav className="hidden sm:flex items-center space-x-4">
            <NavLink />
          </nav>
        </div>
      </div>
    </div>
  );
}
