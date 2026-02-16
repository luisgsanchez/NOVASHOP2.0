import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 py-3">
      <Link className="navbar-brand fw-bold fs-3 glow" to="/">
        NovaShop
      </Link>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-semibold" to="/">
              Inicio
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white fw-semibold" to="/category/entornos">
              Entornos
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white fw-semibold" to="/cart">
              Carrito
            </NavLink>
          </li>
        </ul>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
