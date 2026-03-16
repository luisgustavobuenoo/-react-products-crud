import { NavLink } from "react-router-dom"

function Menu() {
  return (
    <nav className="glass-nav">
      <div className="nav-container">

        <div className="nav-logo">
          ProdutosApp
        </div>

        <div className="nav-links">

          <NavLink
            to="/"
            data-testid="menu-products"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Produtos
          </NavLink>

          <NavLink
            to="/about"
            data-testid="menu-about"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Sobre
          </NavLink>

        </div>

      </div>
    </nav>
  )
}

export default Menu