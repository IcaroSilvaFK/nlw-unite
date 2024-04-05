import Logo from "../../assets/Vector.svg";
import { NavLink } from "../NavLink";

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <div className="bg-orange-500 w-8 h-8 rounded flex items-center justify-center">
        <img src={Logo} alt="Logo" className="w-5 h-5" />
      </div>

      <nav className="flex items-center gap-5">
        <NavLink href="#participantes">Eventos</NavLink>
        <NavLink href="#eventos">Participantes</NavLink>
      </nav>
    </header>
  );
}
