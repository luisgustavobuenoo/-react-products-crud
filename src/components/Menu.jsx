import { Link } from "react-router-dom"

function Menu() {
  return (
    <nav>

      <Link to="/" data-testid="menu-products">
        Produtos
      </Link>

      <Link to="/about" data-testid="menu-about">
        Sobre
      </Link>

    </nav>
  )
}

export default Menu