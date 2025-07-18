export function NavLink() {
  return (
    <ul className="flex flex-col mt-20 sm:mt-0 text-center space-y-2 sm:flex-row sm:space-x-6 text-neutral-400 font-dm-sans">
      <li className="">
        <a href="#home" className="hover:text-white text-2xl sm:text-base">
          Início
        </a>
      </li>

      <li className="">
        <a href="#about" className="hover:text-white text-2xl sm:text-base">
          Sobre
        </a>
      </li>

      <li className="">
        <a href="#projects" className="hover:text-white text-2xl sm:text-base">
          Projetos
        </a>
      </li>

      <li className="">
        <a href="#contact" className="hover:text-white text-2xl sm:text-base">
          Contato
        </a>
      </li>
    </ul>
  );
}
