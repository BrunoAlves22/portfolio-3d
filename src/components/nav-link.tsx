export function NavLink() {
  return (
    <ul className="flex flex-col text-center space-y-2 sm:flex-row sm:space-x-6 text-neutral-400">
      <li className="">
        <a href="#home" className="hover:text-white">
          Início
        </a>
      </li>

      <li className="">
        <a href="#about" className="hover:text-white">
          Sobre
        </a>
      </li>

      <li className="">
        <a href="#work" className="hover:text-white">
          Trabalho
        </a>
      </li>

      <li className="">
        <a href="#contact" className="hover:text-white">
          Contato
        </a>
      </li>
    </ul>
  );
}
